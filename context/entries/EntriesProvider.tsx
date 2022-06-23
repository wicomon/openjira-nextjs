import { FC, PropsWithChildren, useReducer } from 'react';
import { Entry } from '../../interfaces';
import {EntriesContext, entriesReducer } from './';
import {v4 as uuidv4} from 'uuid';

export interface EntriesState{
  entries: Entry[];
}
const date = Date.now();
const Entries_INITIAL_STATE: EntriesState = { 
  entries: [
    {
      _id: uuidv4(),
      description: 'Pendiente - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
      status: 'pending',
      createdAt: 1000000,
    },
    {
      _id: uuidv4(),
      description: 'En Progreso - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
      status: 'in-progress',
      createdAt:1000000,
    },
    {
      _id: uuidv4(),
      description: 'Finisheado - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
      status: 'finished',
      createdAt: 1000000,
    },
  ],
}

export const EntriesProvider:FC<PropsWithChildren> = ({children}) => {

  const[state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addEntry = (description: string) => {

    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: 'pending',
      createdAt: Date.now(),
    }

    dispatch({
      type: '[Entries] - Add Entry',
      payload: newEntry
    });
  }

  return(
    <EntriesContext.Provider value={{
      ...state,
      addEntry
    }}>
      {children}
    </EntriesContext.Provider>
  );
}