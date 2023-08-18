export interface HouseholdMember {
  name: string;
  lastname: string;
  avatar: string;
}

export interface Household {
  id: string;
  address: string;
  city: string;
  members: HouseholdMember[];
}
