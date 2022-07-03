import { createTheme } from "@mui/material";
import { pink, red } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#19857b',
    },
    error:{
      main: pink[700],
    }
  },
  components: {
    MuiAppBar: {
      defaultProps: {

      },
      styleOverrides:{
        root: {
          backgroundColor: '#4a1a8c',
        }
      }
    }
  }
});