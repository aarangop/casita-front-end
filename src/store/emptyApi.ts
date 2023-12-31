import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

/**
 * This is an empty API slice that will be injected endpoints autogenerated using an OpenAPI definition.
 * The OpenAPI definition is fetched from casita's backend server.
 */
export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8001" }),
  endpoints: () => ({}),
});
