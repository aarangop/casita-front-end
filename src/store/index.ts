import { configureStore } from "@reduxjs/toolkit";
import HouseholdReducer from "@/store/features/householdSlice";
import { casitaApi } from "@/store/casitaApi";

export const store = configureStore({
  reducer: {
    household: HouseholdReducer,
    [casitaApi.reducerPath]: casitaApi.reducer,
  },
  // Add api middleware to enable caching, invalidation, polling, etc.
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(casitaApi.middleware);
  },
});

if (typeof window !== "undefined" && window.Cypress) {
  window.Cypress.store = store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
