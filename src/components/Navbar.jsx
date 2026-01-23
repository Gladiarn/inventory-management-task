import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
  Badge,
} from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function Navbar({
  darkMode,
  toggleDarkMode,
  toggleSidebar,
  sidebarCollapsed,
}) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: "blur(20px)",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(26, 37, 33, 0.9)"
            : "rgba(255, 255, 255, 0.9)",
        borderBottom: (theme) =>
          `1px solid ${
            theme.palette.mode === "dark"
              ? "rgba(76, 175, 80, 0.1)"
              : "rgba(46, 125, 50, 0.1)"
          }`,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Toolbar sx={{ py: 1.5 }}>
        {/* Logo and Brand */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: (theme) => theme.palette.primary.main,
              borderRadius: 10,
              p: 0.75,
              mr: 2,
            }}
          >
            <InventoryIcon sx={{ color: "#FFFFFF", fontSize: 24 }} />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              background: (theme) =>
                theme.palette.mode === "dark"
                  ? "linear-gradient(135deg, #4CAF50 0%, #81C784 100%)"
                  : "linear-gradient(135deg, #2E7D32 0%, #43A047 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.3px",
            }}
          >
            GreenSupply Co
          </Typography>
          <Box
            sx={{
              ml: 2,
              px: 1.5,
              py: 0.5,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(76, 175, 80, 0.1)"
                  : "rgba(46, 125, 50, 0.1)",
              borderRadius: 8,
              display: { xs: "none", md: "block" },
            }}
          >
            {/* Tagline */}
            <Typography
              variant="caption"
              sx={{
                fontWeight: 600,
                color: "primary.main",
              }}
            >
              Sustainable Inventory Management
            </Typography>
          </Box>
        </Box>

        {/* Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Notif */}
          <IconButton
            sx={{
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
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Theme Toggle */}
          <IconButton
            onClick={toggleDarkMode}
            sx={{
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
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          {/*Profile */}
          <IconButton
            sx={{
              ml: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(76, 175, 80, 0.1)"
                  : "rgba(46, 125, 50, 0.1)",
              "&:hover": {
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "rgba(76, 175, 80, 0.2)"
                    : "rgba(46, 125, 50, 0.2)",
              },
            }}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: "primary.main" }}>
              <PersonIcon fontSize="small" />
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
