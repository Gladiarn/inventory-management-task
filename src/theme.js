// src/theme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // Brand Colors - Pastel Greens
    primary: {
      main: '#4CAF50',    // Softer green (from #2E7D32)
      light: '#81C784',
      dark: '#388E3C',
    },
    
    // Secondary - Keep as is or adjust
    secondary: {
      main: '#388E3C',
      light: '#66BB6A',
      dark: '#2C6B2F',
    },
    
    // Alert/Warning - Softer amber
    warning: {
      main: '#FFB300',    // Softer amber (from #F57C00)
      light: '#FFCA28',
      dark: '#FF8F00',
    },
    
    // Error/Critical
    error: {
      main: '#F44336',
      light: '#EF5350',
      dark: '#C2185B',
    },
    
    // Success
    success: {
      main: '#66BB6A',    // Fresh green (from #4CAF50)
      light: '#81C784',
      dark: '#388E3C',
    },
    
    // Info
    info: {
      main: '#0288D1',
      light: '#4FC3F7',
      dark: '#01579B',
    },
    
    // Background Colors - Lighter pastel
    background: {
      default: '#F9FDF9', // Very light mint (from #F8FBF8)
      paper: '#FFFFFF',
    },
    
    // Text Colors - Keep as is
    text: {
      primary: '#1A2027',
      secondary: '#3E5060',
    },
  },
  
  // Keep everything else EXACTLY as before
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
    // Brand Colors - Keep original dark mode greens
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
    
    // Warning - Keep original
    warning: {
      main: '#FFB74D',
      light: '#FFCC80',
      dark: '#FF9800',
    },
    
    // Error - Keep original
    error: {
      main: '#F44336',
      light: '#E57373',
      dark: '#D32F2F',
    },
    
    // Success - Keep original
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