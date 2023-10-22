import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const User = z
  .object({
    id: z.string(),
    name: z.string(),
    lastName: z.string(),
    nickname: z.string(),
    username: z.string(),
    password: z.string(),
  })
  .passthrough();
const HouseholdMember = z.object({ id: z.string(), user: User }).passthrough();
const Household = z
  .object({
    id: z.string(),
    street: z.string(),
    houseNumber: z.string(),
    zipCode: z.string(),
    city: z.string(),
    country: z.string(),
    householdMembers: z.array(HouseholdMember),
  })
  .passthrough();

export const schemas = {
  User,
  HouseholdMember,
  Household,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/api/household_members",
    alias: "getAllHouseholdMembers",
    requestFormat: "json",
    response: z.void(),
  },
  {
    method: "get",
    path: "/api/household_members/:id",
    alias: "getHouseholdMember",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/api/households",
    alias: "getHouseholds",
    requestFormat: "json",
    response: z.void(),
  },
  {
    method: "post",
    path: "/api/households",
    alias: "createHousehold",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Household,
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/api/households/:id",
    alias: "getHouseholdById",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: "put",
    path: "/api/households/:id",
    alias: "putHousehold",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Household,
      },
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/users",
    alias: "getAllUsers",
    requestFormat: "json",
    response: z.void(),
  },
  {
    method: "get",
    path: "/users/:id",
    alias: "getUserById",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
