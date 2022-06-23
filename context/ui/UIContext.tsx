import { createContext } from "react";

interface ContextProps{
  sidemenuOpone: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  OpenSideMenu: () => void;
  CloseSideMenu: () => void;
  SetIsAddingEntry: (isAdding: boolean) => void;
  startDragging: () => void;
  endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
