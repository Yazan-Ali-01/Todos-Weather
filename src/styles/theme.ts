import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Fredoka", "Helvetica", "Arial", sans-serif'
  },
  palette: {
    // Your palette options
  },
  components: {
    // Override styles for all instances of this component
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f0f2f5' // Example background color
          // Add other global styles here if needed
        }
      }
    }
  }
});

export default theme;
