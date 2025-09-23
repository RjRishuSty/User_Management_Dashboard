import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    button: {
      textTransform: "capitalize", // ✅ capitalize only
      fontWeight: 600,
    },
  },
  palette: {
    mode: "light", // you can toggle "dark" for dark mode
    primary: {
      main: "#5c2ede",   
      light: "#ccbdf5",  
      dark: "#431cb0", 
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#00cc00",   
      light: "#ccffcc",  
      dark: "#008000",   
      contrastText: "#ffffff",
    },
    background: {
      default: "#f2f2f2", // Gray 50
      paper: "#ffff",   // White for cards, tables, modals
    },
    text: {
      primary: "#000", // Gray 900
      secondary: "#ffff", // Gray 600
    },
    divider: "#E5E7EB", // Gray 200
    
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, 
          padding: "6px 16px",
          letterSpacing:0.8
        },
      },
    },
   
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#000", // label color white
          "&.Mui-focused": {
            color: "#000", // label stays white when focused
          },
        },
      },
    },
   
  },
});

export default theme;
