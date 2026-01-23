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
  Typography,
  Badge,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SpaIcon from "@mui/icons-material/Spa";

const menuItems = [
  {
    text: "Dashboard",
    href: "/",
    icon: <DashboardIcon />,
    key: "dashboard",
  },
  {
    text: "Products",
    href: "/products",
    icon: <Inventory2Icon />,
    key: "products",
  },
  {
    text: "Warehouses",
    href: "/warehouses",
    icon: <WarehouseIcon />,
    key: "warehouses",
  },
  {
    text: "Stock Levels",
    href: "/stock",
    icon: <TrendingUpIcon />,
    key: "stock",
  },
  {
    text: "Transfers",
    href: "/transfers",
    icon: <SwapHorizIcon />,
    key: "transfers",
  },
  {
    text: "Reports",
    href: "/reports",
    icon: <AssessmentIcon />,
    key: "reports",
  },
];

export default function Sidebar({ collapsed, toggleSidebar }) {
  const drawerWidth = collapsed ? 80 : 280;
  
  const [notifications, setNotifications] = useState({
    dashboard: 0,
    products: 0,
    warehouses: 2,
    stock: 0,
    transfers: 3,
    reports: 0,
  });

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "linear-gradient(180deg, #0A150C 0%, #1A2521 100%)"
              : "linear-gradient(180deg, #FFFFFF 0%, #F8FDF8 100%)",
          borderRight: (theme) =>
            `1px solid ${
              theme.palette.mode === "dark"
                ? "rgba(76, 175, 80, 0.1)"
                : "rgba(46, 125, 50, 0.1)"
            }`,
        },
      }}
    >
      <Box
        sx={{
          p: collapsed ? 2 : 3,
          display: "flex",
          flexDirection: collapsed ? "column" : "row",
          alignItems: collapsed ? "center" : "flex-start",
          gap: collapsed ? 1 : 2,
          borderBottom: (theme) =>
            `1px solid ${
              theme.palette.mode === "dark"
                ? "rgba(76, 175, 80, 0.1)"
                : "rgba(46, 125, 50, 0.1)"
            }`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "flex-start",
            width: "100%",
            gap: collapsed ? 0 : 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: "primary.main",
              borderRadius: 10,
              p: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SpaIcon sx={{ color: "#FFFFFF", fontSize: collapsed ? 20 : 24 }} />
          </Box>

          {!collapsed && (
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: "primary.main",
                  lineHeight: 1.2,
                }}
              >
                GreenSupply
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  display: "block",
                }}
              >
                Management
              </Typography>
            </Box>
          )}
        </Box>

        <IconButton
          onClick={toggleSidebar}
          size="small"
          sx={{
            mt: collapsed ? 1 : 0,
            color: "text.secondary",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(0, 0, 0, 0.02)",
            "&:hover": {
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.05)",
            },
          }}
        >
          {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          p: 2,
          "&::-webkit-scrollbar": {
            width: 4,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(76, 175, 80, 0.3)"
                : "rgba(46, 125, 50, 0.3)",
            borderRadius: 2,
          },
        }}
      >
        <List>
          {menuItems.map((item) => {
            const badgeCount = notifications[item.key] || 0;
            
            return (
              <ListItem
                key={item.text}
                disablePadding
                sx={{
                  display: "block",
                  mb: 0.5,
                }}
              >
                <Tooltip
                  title={collapsed ? item.text : ""}
                  placement="right"
                  arrow
                >
                  <ListItemButton
                    component={Link}
                    href={item.href}
                    sx={{
                      minHeight: 48,
                      justifyContent: collapsed ? "center" : "flex-start",
                      px: collapsed ? 2 : 2.5,
                      py: 1.25,
                      borderRadius: 10,
                      transition: "all 0.2s ease",
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: (theme) =>
                          theme.palette.mode === "dark"
                            ? "rgba(76, 175, 80, 0.1)"
                            : "rgba(46, 125, 50, 0.08)",
                        transform: "translateX(4px)",
                      },
                      "&.active": {
                        backgroundColor: (theme) => theme.palette.primary.main,
                        color: "#FFFFFF",
                        "& .MuiListItemIcon-root": {
                          color: "#FFFFFF",
                        },
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: collapsed ? 0 : 2,
                        justifyContent: "center",
                        color: "text.secondary",
                      }}
                    >
                      {badgeCount > 0 ? (
                        <Badge
                          badgeContent={badgeCount}
                          color="error"
                          size="small"
                          sx={{
                            "& .MuiBadge-badge": {
                              fontSize: "0.6rem",
                              height: 16,
                              minWidth: 16,
                            },
                          }}
                        >
                          {item.icon}
                        </Badge>
                      ) : (
                        item.icon
                      )}
                    </ListItemIcon>
                    {!collapsed && (
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      />
                    )}
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {!collapsed && (
        <Box
          sx={{
            p: 3,
            borderTop: (theme) =>
              `1px solid ${
                theme.palette.mode === "dark"
                  ? "rgba(76, 175, 80, 0.1)"
                  : "rgba(46, 125, 50, 0.1)"
              }`,
          }}
        >
          <Box
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(76, 175, 80, 0.1)"
                  : "rgba(46, 125, 50, 0.08)",
              borderRadius: 10,
              p: 2,
              textAlign: "center",
            }}
          >
            <SpaIcon
              sx={{
                color: "primary.main",
                fontSize: 20,
                mb: 1,
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                display: "block",
                fontWeight: 500,
              }}
            >
              Sustainable Operations
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                display: "block",
                fontSize: "0.7rem",
                mt: 0.5,
              }}
            >
              85% Carbon Neutral
            </Typography>
          </Box>
        </Box>
      )}
    </Drawer>
  );
}