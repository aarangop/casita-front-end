import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Household } from "@/types/Household";

export interface HouseholdState {
  activeHousehold?: Household;
  selectedHousehold?: Household;
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
    setSelectedHousehold: (state, action: PayloadAction<Household>) => {
      state.selectedHousehold = action.payload;
    },
  },
});

export const { setActiveHousehold, setHouseholds, setSelectedHousehold } =
  householdSlice.actions;
export default householdSlice.reducer;
