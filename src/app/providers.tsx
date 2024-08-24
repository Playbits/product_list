"use client";

import { AppStore, makeStore } from "@/store";
import { useRef } from "react";
import { Provider } from "react-redux";

const ReduxRegistry = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export { ReduxRegistry };
