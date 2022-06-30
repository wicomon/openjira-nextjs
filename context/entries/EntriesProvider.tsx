import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { Entry } from '../../interfaces';
import {EntriesContext, entriesReducer } from './';
import { entriesApi } from '../../apis';

export interface EntriesState{
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = { 
  entries: [
    
  ],
}

export const EntriesProvider:FC<PropsWithChildren> = ({children}) => {

  const[state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addEntry = async(description: string) => {

    const {data} = await entriesApi.post<Entry>('/entries', {description});

    dispatch({
      type: '[Entries] - Add Entry',
      payload: data
    });
  }

  const updateEntry = async({_id, description, status}: Entry) => {
    try {
      const {data} = await entriesApi.put<Entry>(`/entries/${_id}`, {description, status});
      dispatch({
        type: '[Entries] - Entry Updated',
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  }

  const refreshEntries = async () => {
    const {data} = await entriesApi.get<Entry[]>('/entries');
    console.log(data)
    dispatch({
      type: '[Entries] - Refresh-Data',
      payload: data
    });
  
  }

  useEffect(() => {
    refreshEntries();
  }, [])
  

  return(
    <EntriesContext.Provider value={{
      ...state,
      addEntry,
      updateEntry
    }}>
      {children}
    </EntriesContext.Provider>
  );
}