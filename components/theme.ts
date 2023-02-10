import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#c3fdff',
      main: '#90caf9',
      dark: '#5d99c6',
      contrastText: '#FFF',
    },
    secondary: {
      light: '#eeffff',
      main: '#bbdefb',
      dark: '#8aacc8',
      contrastText: '#666',
    },
  },
  typography: {
    fontFamily: ['Murecho', 'sans-serif'].join(','),
    fontSize: 14,
  },
});

export default theme;
