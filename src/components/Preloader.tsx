"use client";
import { useEffect, useRef } from "react";
import { store } from "@/store";
import {
  setActiveHousehold,
  setHouseholds,
  setSelectedHousehold,
} from "@/store/features/householdSlice";
import { Household } from "@/store/casitaApi";

export default function Preloader({
  activeHousehold,
  households,
}: {
  activeHousehold: Household;
  households: Household[];
}) {
  const loaded = useRef(false);

  useEffect(() => {
    store.dispatch(setActiveHousehold(activeHousehold));
    store.dispatch(setHouseholds(households));
    store.dispatch(setSelectedHousehold(activeHousehold));
  });

  if (!loaded.current) {
    loaded.current = true;
  }
  return null;
}
