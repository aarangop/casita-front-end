import { emptySplitApi as api } from "./emptyApi";
export const addTagTypes = [
  "households-controller",
  "users-controller",
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getHouseholdById: build.query<
        GetHouseholdByIdApiResponse,
        GetHouseholdByIdApiArg
      >({
        query: (queryArg) => ({ url: `/api/households/${queryArg.id}` }),
        providesTags: ["households-controller"],
      }),
      putHousehold: build.mutation<PutHouseholdApiResponse, PutHouseholdApiArg>(
        {
          query: (queryArg) => ({
            url: `/api/households/${queryArg.id}`,
            method: "PUT",
            body: queryArg.household,
          }),
          invalidatesTags: ["households-controller"],
        }
      ),
      deleteHousehold: build.mutation<
        DeleteHouseholdApiResponse,
        DeleteHouseholdApiArg
      >({
        query: (queryArg) => ({
          url: `/api/households/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["households-controller"],
      }),
      updateHouseholdMembers: build.mutation<
        UpdateHouseholdMembersApiResponse,
        UpdateHouseholdMembersApiArg
      >({
        query: (queryArg) => ({
          url: `/api/households/${queryArg.id}/household_members`,
          method: "PUT",
          body: queryArg.body,
        }),
        invalidatesTags: ["households-controller"],
      }),
      getHouseholds: build.query<GetHouseholdsApiResponse, GetHouseholdsApiArg>(
        {
          query: () => ({ url: `/api/households` }),
          providesTags: ["households-controller"],
        }
      ),
      createHousehold: build.mutation<
        CreateHouseholdApiResponse,
        CreateHouseholdApiArg
      >({
        query: (queryArg) => ({
          url: `/api/households`,
          method: "POST",
          body: queryArg.household,
        }),
        invalidatesTags: ["households-controller"],
      }),
      getUsers: build.query<GetUsersApiResponse, GetUsersApiArg>({
        query: () => ({ url: `/api/users` }),
        providesTags: ["users-controller"],
      }),
      getUserById: build.query<GetUserByIdApiResponse, GetUserByIdApiArg>({
        query: (queryArg) => ({ url: `/api/users/${queryArg.id}` }),
        providesTags: ["users-controller"],
      }),
      getUsersByUsernameOrEmail: build.query<
        GetUsersByUsernameOrEmailApiResponse,
        GetUsersByUsernameOrEmailApiArg
      >({
        query: (queryArg) => ({
          url: `/api/users/email_or_username/`,
          params: { term: queryArg.term },
        }),
        providesTags: ["users-controller"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as casitaApi };
export type GetHouseholdByIdApiResponse = /** status 200 OK */ Household;
export type GetHouseholdByIdApiArg = {
  id: string;
};
export type PutHouseholdApiResponse = /** status 200 OK */ Household;
export type PutHouseholdApiArg = {
  id: string;
  household: Household;
};
export type DeleteHouseholdApiResponse = unknown;
export type DeleteHouseholdApiArg = {
  id: string;
};
export type UpdateHouseholdMembersApiResponse = /** status 200 OK */ Household;
export type UpdateHouseholdMembersApiArg = {
  id: string;
  body: string[];
};
export type GetHouseholdsApiResponse = /** status 200 OK */ Household[];
export type GetHouseholdsApiArg = void;
export type CreateHouseholdApiResponse = /** status 200 OK */ Household;
export type CreateHouseholdApiArg = {
  household: Household;
};
export type GetUsersApiResponse = /** status 200 OK */ User[];
export type GetUsersApiArg = void;
export type GetUserByIdApiResponse = /** status 200 OK */ User;
export type GetUserByIdApiArg = {
  id: string;
};
export type GetUsersByUsernameOrEmailApiResponse = /** status 200 OK */ User[];
export type GetUsersByUsernameOrEmailApiArg = {
  term: string;
};
export type User = {
  id: string;
  name: string;
  lastName: string;
  nickname: string;
  username: string;
};
export type Household = {
  id?: string;
  street: string;
  houseNumber: string;
  zipCode: string;
  city: string;
  country: string;
  householdMembers: User[];
};
export const {
  useGetHouseholdByIdQuery,
  useLazyGetHouseholdByIdQuery,
  usePutHouseholdMutation,
  useDeleteHouseholdMutation,
  useUpdateHouseholdMembersMutation,
  useGetHouseholdsQuery,
  useLazyGetHouseholdsQuery,
  useCreateHouseholdMutation,
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
  useGetUsersByUsernameOrEmailQuery,
  useLazyGetUsersByUsernameOrEmailQuery,
} = injectedRtkApi;
