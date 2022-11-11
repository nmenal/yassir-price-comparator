import { createTheme } from '@mui/material/styles';

// A custom theme for this app
export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF7D00',
      contrastText: '#fff',
    },
    secondary: {
      main: '#000',
    },
    error: {
      main: '#FF6666',
    },
    background: {
      default: '#fff',
    },
    success: {
      main: '#27C780',
      contrastText: '#fff',
    },
    text: {
      primary: '#1B1B1B',
      secondary: '#6D6D6D',
    },
    // action: {
    //   disabledBackground: '#FFCB99',
    //   disabled: '#fff'
    // },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
