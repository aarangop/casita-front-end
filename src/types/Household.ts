import { z } from "zod";

export const householdSchema = z.object({
  _id: z.string().optional(),
  address: z.string(),
  city: z.string(),
  country: z.string(),
  members: z.any(),
});
