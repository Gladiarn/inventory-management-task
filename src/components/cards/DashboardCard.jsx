import { Card, CardContent, Box, Typography } from "@mui/material";

export default function DashboardCard({ item }) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Box sx={{ mr: 1, color: "primary.main" }}>
            {item.icon}
          </Box>
          <Typography variant="h6">{item.title}</Typography>
        </Box>
        <Typography variant="h3">{item.value}</Typography>
        {item.subtitle && (
          <Typography variant="caption" color="textSecondary">
            {item.subtitle}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}