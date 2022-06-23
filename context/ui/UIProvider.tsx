import { FC, PropsWithChildren, useReducer } from 'react';
import {UIContext, UIReducer } from './';

export interface UIState{
  sidemenuOpone: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpone: false,
  isAddingEntry: false,
  isDragging: false,
}

export const UIProvider:FC<PropsWithChildren> = ({children}) => {

  const[state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const OpenSideMenu = () => {
    dispatch({type: 'UI - Open Sidebar'});
  }
  const CloseSideMenu = () => {
    dispatch({type: 'UI - Close Sidebar'});
  }
  const SetIsAddingEntry = (isAdding: boolean) => {
    dispatch({type: 'UI - Adding Entry', payload: isAdding});
  }
  const startDragging = () => {
    dispatch({type: 'UI - Start Dragging'});
  }
  const endDragging = () => {
    dispatch({type: 'UI - End Dragging'});
  }

  return(
    <UIContext.Provider value={{
      ...state,
      OpenSideMenu,
      CloseSideMenu,
      SetIsAddingEntry,
      startDragging,
      endDragging,      
    }}>
      {children}
    </UIContext.Provider>
  );
}