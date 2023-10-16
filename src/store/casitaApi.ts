import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHouseholdById: build.query<
      GetHouseholdByIdApiResponse,
      GetHouseholdByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/households/${queryArg.id}` }),
    }),
    putHousehold: build.mutation<PutHouseholdApiResponse, PutHouseholdApiArg>({
      query: (queryArg) => ({
        url: `/api/households/${queryArg.id}`,
        method: "PUT",
        body: queryArg.household,
      }),
    }),
    getHouseholds: build.query<GetHouseholdsApiResponse, GetHouseholdsApiArg>({
      query: () => ({ url: `/api/households` }),
    }),
    createHousehold: build.mutation<
      CreateHouseholdApiResponse,
      CreateHouseholdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/households`,
        method: "POST",
        body: queryArg.household,
      }),
    }),
    getAllUsers: build.query<GetAllUsersApiResponse, GetAllUsersApiArg>({
      query: () => ({ url: `/users` }),
    }),
    getUserById: build.query<GetUserByIdApiResponse, GetUserByIdApiArg>({
      query: (queryArg) => ({ url: `/users/${queryArg.id}` }),
    }),
    getAllHouseholdMembers: build.query<
      GetAllHouseholdMembersApiResponse,
      GetAllHouseholdMembersApiArg
    >({
      query: () => ({ url: `/api/household_members` }),
    }),
    getHouseholdMember: build.query<
      GetHouseholdMemberApiResponse,
      GetHouseholdMemberApiArg
    >({
      query: (queryArg) => ({ url: `/api/household_members/${queryArg.id}` }),
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
export type GetHouseholdsApiResponse = /** status 200 OK */ Household[];
export type GetHouseholdsApiArg = void;
export type CreateHouseholdApiResponse = /** status 200 OK */ Household;
export type CreateHouseholdApiArg = {
  household: Household;
};
export type GetAllUsersApiResponse = /** status 200 OK */ object;
export type GetAllUsersApiArg = void;
export type GetUserByIdApiResponse = /** status 200 OK */ User;
export type GetUserByIdApiArg = {
  id: string;
};
export type GetAllHouseholdMembersApiResponse = /** status 200 OK */ object;
export type GetAllHouseholdMembersApiArg = void;
export type GetHouseholdMemberApiResponse =
  /** status 200 OK */ HouseholdMember;
export type GetHouseholdMemberApiArg = {
  id: string;
};
export type User = {
  id: string;
  name: string;
  lastName: string;
  nickname: string;
  username: string;
  password: string;
};
export type HouseholdMember = {
  id: string;
  user: User;
};
export type Household = {
  id: string;
  street: string;
  houseNumber: string;
  zipCode: string;
  city: string;
  country: string;
  householdMembers: HouseholdMember[];
};
export const {
  useGetHouseholdByIdQuery,
  usePutHouseholdMutation,
  useGetHouseholdsQuery,
  useCreateHouseholdMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useGetAllHouseholdMembersQuery,
  useGetHouseholdMemberQuery,
} = injectedRtkApi;
