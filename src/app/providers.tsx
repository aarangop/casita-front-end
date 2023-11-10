"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <Provider store={store}>
        <ThemeProvider>{children}</ThemeProvider>
      </Provider>
    </UserProvider>
  );
}
