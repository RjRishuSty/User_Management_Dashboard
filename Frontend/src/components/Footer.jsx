import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: "center",
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "secondary.dark",
      }}
    >
      <Typography variant="body2" color="text.secondary" sx={{letterSpacing:0.7}}>
        © {new Date().getFullYear()} User Management Dashboard. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
