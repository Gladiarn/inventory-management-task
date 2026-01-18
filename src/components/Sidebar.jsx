import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Tooltip,
  IconButton,
  Divider,
  Typography
} from "@mui/material";
import Link from 'next/link';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const menuItems = [
  { text: 'Dashboard', href: '/', icon: <DashboardIcon /> },
  { text: 'Products', href: '/products', icon: <Inventory2Icon /> },
  { text: 'Warehouses', href: '/warehouses', icon: <WarehouseIcon /> },
  { text: 'Stock Levels', href: '/stock', icon: <TrendingUpIcon /> },
  { text: 'Transfers', href: '/transfers', icon: <SwapHorizIcon /> },
  { text: 'Alerts', href: '/alerts', icon: <NotificationsIcon /> },
];

export default function Sidebar({ collapsed, toggleSidebar }) {
  const drawerWidth = collapsed ? 70 : 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          transition: 'width 0.3s ease',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        p: 2,
        minHeight: '64px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
      }}>
        {!collapsed ? (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Inventory2Icon sx={{ mr: 1 }} />
              <Typography variant="h6" noWrap>
                Menu
              </Typography>
            </Box>
            <Tooltip title="Collapse sidebar">
              <IconButton onClick={toggleSidebar} size="small">
                <ChevronLeftIcon />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            width: '100%' 
          }}>
            <Inventory2Icon sx={{ mb: 1 }} />
            <Tooltip title="Expand sidebar">
              <IconButton onClick={toggleSidebar} size="small">
                <ChevronRightIcon />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Box>
      
      {/* Menu Items */}
      <Box sx={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <Tooltip title={collapsed ? item.text : ""} placement="right">
                <ListItemButton
                  component={Link}
                  href={item.href}
                  sx={{
                    minHeight: 48,
                    justifyContent: collapsed ? 'center' : 'initial',
                    px: collapsed ? 2 : 2.5,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: collapsed ? 0 : 3,
                      justifyContent: 'center',
                      color: 'inherit'
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {!collapsed && (
                    <ListItemText 
                      primary={item.text} 
                      sx={{ 
                        opacity: 1,
                        whiteSpace: 'nowrap'
                      }}
                    />
                  )}
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Box>
      
      {/* Footer (optional) */}
      {!collapsed && (
        <Box sx={{ p: 2, borderTop: '1px solid rgba(0, 0, 0, 0.12)' }}>
          <Typography variant="caption" sx={{ display: 'block', textAlign: 'center' }}>
            GreenSupply Co
          </Typography>
        </Box>
      )}
    </Drawer>
  );
}