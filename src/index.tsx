import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@styles/theme';
import { CssBaseline } from '@mui/material';
import GlobalStyles from '@styles/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
