import { DragEvent, FC, useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";
import { EntryStatus } from "../../interfaces";
import { EntryCard } from "./";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";
import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { isDragging, endDragging } = useContext(UIContext);
  const { entries, updateEntry } = useContext(EntriesContext);
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const onDrop = (event: DragEvent) => {
    const id = event.dataTransfer.getData("text");
    console.log({id});
    if (id) {
      const entry = entries.find((entry) => entry._id === id);
      if (entry) {
        updateEntry({ ...entry, status });
      }
    }
    endDragging();
  };

  const allowDrop = (event: DragEvent) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={onDrop}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflowX: "scroll",
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
