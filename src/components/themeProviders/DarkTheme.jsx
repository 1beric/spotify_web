import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import dark from '../../styles/themes/dark';

const DarkTheme = ({ children }) => {
  return <ThemeProvider theme={dark}>{children}</ThemeProvider>;
};

export default DarkTheme;
