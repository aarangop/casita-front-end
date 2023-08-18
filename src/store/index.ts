import { configureStore } from "@reduxjs/toolkit";
import HouseholdReducer from "@/store/features/householdSlice";
import { householdApi } from "@/store/features/householdApi";

export const store = configureStore({
  reducer: {
    household: HouseholdReducer,
    householdApi: householdApi.reducer,
  },
  // Add api middleware to enable caching, invalidation, polling, etc.
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(householdApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
