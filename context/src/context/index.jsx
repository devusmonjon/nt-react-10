import { createContext } from "react";

export const initialValue = {
  count: 0,
  toggle: false,
  color: "blue",
  name: "Usmonjon",
};

export const Context = createContext();
