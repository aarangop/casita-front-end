"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import store from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <main className="min-h-screen">
          <div className="p-4">Yoo this is the home page!</div>
        </main>
      </ThemeProvider>
    </Provider>
  );
}
