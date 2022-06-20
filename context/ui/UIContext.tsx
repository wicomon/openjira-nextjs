import { createContext } from "react";

interface ContextProps{
  sidemenuOpone: boolean;
  OpenSideMenu: () => void;
  CloseSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
