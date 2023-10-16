import { Household } from "@/types/Household";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const householdApi = createApi({
  reducerPath: "householdApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8001" }),
  tagTypes: ["Household"],
  endpoints: (builder) => ({
    getUserHouseholds: builder.query<Household[], void>({
      query: () => "/household",
      transformResponse: (response: { data: Household[] }, meta, arg) => {
        console.log(response);
        return response.data;
      },
      providesTags: [{ type: "Household", id: "LIST" }],
    }),
    createNewHousehold: builder.mutation<Household, Household>({
      query: (payload) => ({
        url: "household",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response: { data: Household }, meta, arg) =>
        response.data as Household,
      invalidatesTags: [{ type: "Household", id: "LIST" }],
    }),
    updateHousehold: builder.mutation<Household, Household>({
      query: (payload) => ({
        url: `/household/${payload._id}`,
        method: "PUT",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

export const { useGetUserHouseholdsQuery, useCreateNewHouseholdMutation } =
  householdApi;
