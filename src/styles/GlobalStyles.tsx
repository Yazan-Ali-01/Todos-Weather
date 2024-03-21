import React from 'react';
import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

const GlobalStyles = () => {
  return (
    <MuiGlobalStyles
      styles={{
        '*': {
          margin: 12,
          padding: 0,
          boxSizing: 'border-box'
        }
      }}
    />
  );
};

export default GlobalStyles;
