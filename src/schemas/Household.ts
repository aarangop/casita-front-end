import { z } from "zod";
import { householdMemberSchema } from "@/schemas/HouseholdMember";

export const householdSchema = z.object({
  id: z.string().optional(),
  address: z.string(),
  city: z.string(),
  country: z.string(),
  members: z.any(),
});

export const householdValidationSchema = z.object({
  id: z.string().optional(),
  street: z.string().min(2, "Address is required"),
  houseNumber: z.string().min(2, "A street number is required"),
  city: z.string().min(1, "Street is required"),
  country: z.string().min(1, "Country is required"),
  zipCode: z.string().min(4, "Zip code is required"),
  householdMembers: z.array(householdMemberSchema),
});
