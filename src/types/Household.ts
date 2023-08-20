import { User } from "@/types/User";

export interface Household {
  id: string;
  address: string;
  city: string;
  members: User[];
}
