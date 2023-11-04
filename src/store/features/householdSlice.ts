import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Household, User } from "@/store/casitaApi";

export interface HouseholdState {
  activeHousehold: Household | null;
  selectedHousehold: Household | null;
  households: Household[];
}

export const householdInitialState: HouseholdState = {
  households: [],
  activeHousehold: null,
  selectedHousehold: null,
};

const householdSlice = createSlice({
  name: "household",
  initialState: householdInitialState,
  reducers: {
    setActiveHousehold: (state, action: PayloadAction<Household>) => {
      state.activeHousehold = action.payload;
    },
    setSelectedHousehold: (state, action: PayloadAction<Household | null>) => {
      state.selectedHousehold = action.payload;
    },
    addHousehold: (state, action: PayloadAction<Household>) => {
      state.households = [...state.households, action.payload];
    },
    addMemberToSelectedHousehold: (state, action: PayloadAction<User>) => {
      if (state.selectedHousehold)
        state.selectedHousehold.householdMembers = [
          action.payload,
          ...state.selectedHousehold.householdMembers,
        ];
    },
  },
});

export const {
  setActiveHousehold,
  // setHouseholds,
  setSelectedHousehold,
  addMemberToSelectedHousehold,
  addHousehold,
} = householdSlice.actions;
export default householdSlice.reducer;
