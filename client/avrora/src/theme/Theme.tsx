import React, {FC} from 'react';
import {createTheme, ThemeProvider, CssBaseline} from '@mui/material'
import {documentDefaultStyles} from './styles/defaultStyle'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

interface themeProps {
  children: React.ReactNode | React.ReactChildren
}

const Theme: FC<themeProps> = ({children}) => {

  const theme = createTheme({
    palette: {
      primary: {main: '#ff6505'},
      secondary: {main: '#ffffff'}
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: documentDefaultStyles
      },
    },
    status: {
      danger: 'red'
    },
  })


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {children}
      </CssBaseline>
    </ThemeProvider>
  );
};

export default Theme;
