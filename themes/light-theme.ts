import { createTheme } from "@mui/material";
import { grey, pink, red } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[300],
    },
    primary:{
      main: '#4a148c',
    },
    secondary: {
      main: '#19857b',
    },
    error:{
      main: pink[700],
    }
  },
  components: {
    MuiIconButton:{
      styleOverrides:{
        root: {
          color: '#fff',
          elevation: 0,
        }
      }
    },
    MuiAppBar: {
      styleOverrides:{
        root: {
          elevation: 0,
        }
      }
    }
  }
});