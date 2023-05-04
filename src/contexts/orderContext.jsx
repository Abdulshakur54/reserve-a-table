import React, { createContext } from "react";
export const orderContext = createContext();

export function OrderProvider({ children, value }) {
  return (
    <orderContext.Provider value={value}>{children}</orderContext.Provider>
  );
}
