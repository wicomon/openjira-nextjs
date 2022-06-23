import { ChangeEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export const NewEntry = () => {
  const [adding, setAdding] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const onFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  }

  const onSave = () => {
    if (inputValue.length === 0) return;
    console.log({inputValue});
  }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {adding ? (
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
            <Button variant="text" onClick={() => setAdding(false)}>Cancelar</Button>
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
          <Button startIcon={<AddIcon />} fullWidth variant="outlined" onClick={() => setAdding(true)} >
            Agregar Tarea
          </Button>
        </>
      )}
    </Box>
  );
};
