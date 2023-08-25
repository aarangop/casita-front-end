import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Household } from "@/types/Household";

export const householdApi = createApi({
  reducerPath: "householdApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8001" }),
  tagTypes: ["Household"],
  endpoints: (builder) => ({
    getUserHouseholds: builder.query<Household[], null>({
      query: () => `households`,
      providesTags: [{ type: "Household", id: "LIST" }],
    }),
    postNewHousehold: builder.mutation<Household, Household>({
      query: (payload) => ({
        url: "household",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [{ type: "Household", id: "LIST" }],
    }),
    updateHousehold: builder.mutation<Household, Household>({
      query: (payload) => ({
        url: `/household/${payload.id}`,
        method: "PUT",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});
