"use client";

import { createContext, useContext } from "react";

const DropdownAncestryContext = createContext(false);

export function useDropdownAncestryContext() {
  return useContext(DropdownAncestryContext);
}

export function DropdownAncestryContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DropdownAncestryContext.Provider value={true}>
      {children}
    </DropdownAncestryContext.Provider>
  );
}
