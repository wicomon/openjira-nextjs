import { DragEvent, FC, useContext, useMemo } from "react";
import { List, Paper } from "@mui/material"
import { EntryStatus } from "../../interfaces";
import { EntryCard } from "./"
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

interface Props{
  status: EntryStatus;
} 

export const EntryList:FC<Props> = ({status}) => {
  const {isDragging} = useContext(UIContext);
  const {entries} = useContext(EntriesContext);
  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);
  
  const onDrop = (event: DragEvent) => {
    console.log(event);
    const id = event.dataTransfer.getData('text');
    if(id) {
      const entry = entries.find(entry => entry._id === id);
      if(entry) {
        entry.status = status;
      }
    }
  }

  const allowDrop = (event: DragEvent) => {
    event.preventDefault();
  }


  return (
    <div onDrop={onDrop} onDragOver={allowDrop} >
      <Paper sx={{height: 'calc(100vh - 180px)', overflowX: 'scroll', backgroundColor: 'transparent', padding: '1px 5px'}} >
        <List sx={{opacity: isDragging ? 0.2 : 1, transition: 'all .3s'}} >
          {entriesByStatus.map(entry => <EntryCard key={entry._id} entry={entry} />)}
        </List>

      </Paper>
    </div>
  )
}
