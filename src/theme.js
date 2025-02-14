import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#f4f4f4",
      light: "#e3f2fd", // Light blue
      medium: "#bbdefb", // Medium blue
      dark: "#90caf9", // Darker blue
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontWeight: "bold",
          textTransform: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "#1565c0", // Darker blue on hover
            color: "#fff",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "16px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;
