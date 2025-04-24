import { createTheme } from "@mui/material";
import { COLOR_PALETTE } from "./constant";

const TYPOGRAPHY = {
  fontFamily: "Roboto, sans-serif",
  fontSize: 14,
  h1: {
    fontSize: "2rem",
    fontWeight: 700
  },
  h2: {
    fontSize: "1.5rem",
    fontWeight: 700
  },
  h3: {
    fontSize: "1.25rem",
    fontWeight: 700
  },
  h4: {
    fontSize: "1.125rem",
    fontWeight: 700
  },
  h5: {
    fontSize: "1rem",
    fontWeight: 700
  },
  h6: {
    fontSize: "0.875rem",
    fontWeight: 700
  }
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2"
    },
    secondary: {
      main: "#dc004e"
    },
    error: {
      main: "#f44336"
    },
    warning: {
      main: "#ff9800"
    },
    info: {
      main: "#2196f3"
    },
    success: {
      main: "#4caf50"
    },
    text: {
      primary: "#000",
      secondary: "#fff"
    }
  },
  typography: TYPOGRAPHY,
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOR_PALETTE.darkEspresso.main
          },
          "& .MuiInputBase-input": {
            color: COLOR_PALETTE.darkEspresso.main
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOR_PALETTE.darkEspresso.main
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: COLOR_PALETTE.darkEspresso.main,
          "&.Mui-focused": {
            color: COLOR_PALETTE.darkEspresso.main
          }
        }
      }
    }
  }
});
