import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // Brand Colors - Medium Greens
    primary: {
      main: '#43A047',    // Medium green - between light and dark
      light: '#66BB6A',
      dark: '#388E3C',
    },
    
    secondary: {
      main: '#388E3C',
      light: '#66BB6A',
      dark: '#2C6B2F',
    },
    
    warning: {
      main: '#FFB300',
      light: '#FFCA28',
      dark: '#FF8F00',
    },
    
    error: {
      main: '#F44336',
      light: '#EF5350',
      dark: '#C2185B',
    },
    
    success: {
      main: '#66BB6A',
      light: '#81C784',
      dark: '#388E3C',
    },
    
    info: {
      main: '#0288D1',
      light: '#4FC3F7',
      dark: '#01579B',
    },
    
    background: {
      default: '#F9FDF9',
      paper: '#FFFFFF',
    },
    
    text: {
      primary: '#1A2027',
      secondary: '#3E5060',
    },
  },
  
  shape: {
    borderRadius: 8,
  },
  
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    
    secondary: {
      main: '#66BB6A',
      light: '#A5D6A7',
      dark: '#4CAF50',
    },
    
    warning: {
      main: '#FFB74D',
      light: '#FFCC80',
      dark: '#FF9800',
    },
    
    error: {
      main: '#F44336',
      light: '#E57373',
      dark: '#D32F2F',
    },
    
    success: {
      main: '#66BB6A',
      light: '#A5D6A7',
      dark: '#4CAF50',
    },
    
    info: {
      main: '#4FC3F7',
      light: '#81D4FA',
      dark: '#0288D1',
    },
    
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    
    text: {
      primary: '#FFFFFF',
      secondary: '#B0BEC5',
    },
  },
  
  shape: {
    borderRadius: 8,
  },
  
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
});

export { lightTheme, darkTheme };