import { z } from "zod";

export const householdSchema = z.object({
  _id: z.string(),
  address: z.string(),
  city: z.string(),
  country: z.string(),
  members: z.any(),
});

export type Household = z.infer<typeof householdSchema>;
