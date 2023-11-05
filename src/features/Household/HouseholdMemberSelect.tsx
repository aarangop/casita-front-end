import {
  Household,
  useLazyGetUsersByUsernameOrEmailQuery,
  User,
  useUpdateHouseholdMembersMutation,
} from "@/store/casitaApi";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { OnChangeValue } from "react-select";
import { setSelectedHousehold } from "@/store/features/householdSlice";

function getUserOption(user: User): HouseholdMemberOption {
  return {
    label: user.username,
    value: user.id,
  };
}

interface HouseholdMemberOption {
  label: string;
  value: string;
}

const animatedComponents = makeAnimated();
export default function HouseholdMemberSelect({
  household,
  isDisabled,
  className = "",
}: {
  household: Household;
  isDisabled: boolean;
  className?: string;
}) {
  const memberUsers = useAppSelector(
    (state) =>
      state.household.selectedHousehold?.householdMembers?.map(getUserOption) ||
      [],
  );

  const [getUsersByUsernameOrEmail, { data: users }] =
    useLazyGetUsersByUsernameOrEmailQuery();
  const loadOptions = (
    inputValue: string,
    callback: (options: HouseholdMemberOption[]) => void,
  ) => {
    getUsersByUsernameOrEmail({ term: inputValue }).then(() => {
      if (users) {
        callback(users.map(getUserOption));
      }
    });
  };
  const dispatch = useAppDispatch();
  const [updateHouseholdMembers] = useUpdateHouseholdMembersMutation();
  const onChange = (
    selectedOptions: OnChangeValue<HouseholdMemberOption, true>,
  ) => {
    const userIds = selectedOptions.map((option) => option.value);
    if (household) {
      updateHouseholdMembers({
        id: household.id!!,
        body: userIds,
      })
        .then(
          (result) => {
            if ("data" in result) dispatch(setSelectedHousehold(result.data));
          },
          (error) => {
            console.log(error);
          },
        )
        .catch((error) => {
          console.log(`${error} updating household!`);
        });
    }
  };
  return (
    <AsyncSelect
      className={`${className}`}
      isMulti
      components={animatedComponents}
      value={memberUsers}
      loadOptions={loadOptions}
      cacheOptions
      isDisabled
      onChange={onChange}
    />
  );
}
