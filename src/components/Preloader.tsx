"use client";
import { useEffect, useRef } from "react";
import { Household } from "@/types/Household";
import { store } from "@/store";
import {
  setActiveHousehold,
  setHouseholds,
} from "@/store/features/householdSlice";

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
  });

  if (!loaded.current) {
    loaded.current = true;
  }
  return null;
}
