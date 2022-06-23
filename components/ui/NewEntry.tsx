import { ChangeEvent, useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { EntriesContext } from '../../context/entries/';
import { UIContext } from '../../context/ui/';

export const NewEntry = () => {

  const {addEntry} = useContext(EntriesContext);
  const {isAddingEntry, SetIsAddingEntry} = useContext(UIContext);

  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const onFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  }

  const onSave = () => { 
    if (inputValue.length === 0) return;
    // console.log({inputValue});
    addEntry(inputValue);
    setInputValue('');
    SetIsAddingEntry(false);
    setTouched(false)
  }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva Entrada"
            autoFocus
            multiline
            label="Nueva Entrada"
            helperText={inputValue.length <= 0 && touched && 'Ingrese un Valor'}
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onFieldChange}
            onBlur={() => setTouched(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button variant="text" onClick={() => SetIsAddingEntry(false)}>Cancelar</Button>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Button startIcon={<AddIcon />} fullWidth variant="outlined" onClick={() => SetIsAddingEntry(true)} >
            Agregar Tarea
          </Button>
        </>
      )}
    </Box>
  );
};
