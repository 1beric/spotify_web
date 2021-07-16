import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import light from '../../styles/themes/light';

const LightTheme = ({ children }) => {
  return <ThemeProvider theme={light}>{children}</ThemeProvider>;
};

export default LightTheme;
