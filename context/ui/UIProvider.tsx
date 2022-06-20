import { FC, PropsWithChildren, useReducer } from 'react';
import {UIContext, UIReducer } from './';

export interface UIState{
  sidemenuOpone: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpone: false,
}

export const UIProvider:FC<PropsWithChildren> = ({children}) => {

  const[state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const OpenSideMenu = () => {
    dispatch({type: 'UI - Open Sidebar'});
  }
  const CloseSideMenu = () => {
    dispatch({type: 'UI - Close Sidebar'});
  }

  return(
    <UIContext.Provider value={{
      ...state,
      OpenSideMenu,
      CloseSideMenu,
    }}>
      {children}
    </UIContext.Provider>
  );
}