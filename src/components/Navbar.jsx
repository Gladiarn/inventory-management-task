import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Link from 'next/link';

export default function Navbar({darkMode, toggleDarkMode}) {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: (theme) => (theme.palette.mode === darkMode ? theme.palette.background.paper : theme.palette.primary.main),
        color: (theme) => (theme.palette.mode = "#FFFFFF"),
      }}
    >
      <Toolbar>
        <InventoryIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GreenSupply Co
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button color="inherit" component={Link} href="/">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} href="/products">
            Products
          </Button>
          <Button color="inherit" component={Link} href="/warehouses">
            Warehouses
          </Button>
          <Button color="inherit" component={Link} href="/stock">
            Stock Levels
          </Button>
          <Button color="inherit" component={Link} href="/transfers">
            Transfers
          </Button>
          <Button color="inherit" component={Link} href="/alerts">
            Alerts
          </Button>
        </Box>
        <IconButton onClick={toggleDarkMode} color="inherit" sx={{ ml: 2 }}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
