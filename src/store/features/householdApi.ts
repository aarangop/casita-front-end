import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Household } from "@/types/Household";

export const householdApi = createApi({
  reducerPath: "householdApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getUserHouseholds: builder.query<Household, null>({
      query: () => `households`,
    }),
  }),
});
