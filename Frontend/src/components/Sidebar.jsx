import React from "react";
import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import CustomAllBtn from "./CustomAllBtn";

const Sidebar = ({ open, onClose }) => {

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{ width: 250, p: 2 }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <Box sx={{mt:5}}>
          <CustomAllBtn useIn="create" />
          <CustomAllBtn useIn="filter" />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
