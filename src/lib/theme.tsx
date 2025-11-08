'use client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import * as React from 'react';

export const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#0BA4FF',
    },
    secondary: {
      main: '#0071B5',
    },
  },
});

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
