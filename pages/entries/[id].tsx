import { ChangeEvent, FC, useContext, useMemo, useState } from "react";
import { GetServerSideProps } from "next";
import {
  Button,
  capitalize,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Layout } from "../../components/layouts/Layout";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Entry, EntryStatus } from "../../interfaces";
import { dbEntries } from "../../database";
import { EntriesContext } from '../../context/entries/';
import { getFormatDistanceToNow } from "../../utils/dateFunctions";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];
interface Props {
  entry: Entry;
}
const EntryPage: FC<Props> = ({entry}) => {
  // console.log(entry);
  const { updateEntry } = useContext(EntriesContext);
  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);

  const onInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const onSave = () => {
    if (inputValue.trim().length === 0) return;

    const updatedEntry: Entry = {
      ...entry,
      description: inputValue,
      status,
    };
    updateEntry(updatedEntry, true);
  };

  const isNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched]
  );

  return (
    <Layout title={`${inputValue}`}>
      <Grid container justifyContent={"center"} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entrada: ${inputValue}`}
              // subheader={`creada hace : ${  entry.createdAt} minutos `}
              subheader={`creada hace : ${ getFormatDistanceToNow( entry.createdAt)} minutos `}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="Nueva Entrada"
                autoFocus
                multiline
                label="Entrada"
                value={inputValue}
                onChange={onInputValueChanged}
                onBlur={() => setTouched(true)}
                helperText={isNotValid && "Ingrese un valor"}
                error={isNotValid}
              />

              <FormControl>
                <FormLabel>Estado : </FormLabel>
                <RadioGroup
                  row={true}
                  value={status}
                  onChange={onStatusChanged}
                >
                  {validStatus.map((status) => (
                    <FormControlLabel
                      key={status}
                      value={status}
                      control={<Radio />}
                      label={capitalize(status)}
                      sx={{ marginRight: 5 }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
                onClick={onSave}
                disabled={inputValue.length <= 0}
              >
                Guardar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "error.main",
          padding: "1rem",
          boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.2)",
        }}
      >
        <DeleteOutlinedIcon />
      </IconButton>
    </Layout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };
  
  const entry = await dbEntries.getEntryById(id);
  // console.log(entry);
  if (!entry) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      }
    }
  }

  return {
    props: {
      entry
    },
  };
};

export default EntryPage;
