import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Navbar({ darkMode, toggleDarkMode, toggleSidebar }) {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.primary.main),
        color: '#FFFFFF',
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={toggleSidebar}
          edge="start"
          sx={{ mr: 1 }}
        >
        </IconButton>
        <InventoryIcon sx={{ mr: 1 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GreenSupply Co
        </Typography>
        <IconButton onClick={toggleDarkMode} color="inherit">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}