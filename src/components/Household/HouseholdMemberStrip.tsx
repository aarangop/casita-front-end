import { HouseholdMember } from "@/store/casitaApi";

export default function HouseholdMemberStrip({
  householdMember,
}: {
  householdMember: HouseholdMember;
}) {
  return <div>Name: {householdMember.user.name}</div>;
}
