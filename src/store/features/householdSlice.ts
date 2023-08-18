import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Household } from "@/types/Household";

export interface HouseholdState {
  activeHousehold?: Household;
  households: Household[];
}

const householdInitialState: HouseholdState = {
  households: [],
};

const householdSlice = createSlice({
  name: "household",
  initialState: householdInitialState,
  reducers: {
    setHouseholds: (state, action: PayloadAction<Household[]>) => {
      state.households = action.payload;
    },
    setActiveHousehold: (state, action: PayloadAction<Household>) => {
      state.activeHousehold = action.payload;
    },
  },
});

export const { setActiveHousehold, setHouseholds } = householdSlice.actions;
export default householdSlice.reducer;
