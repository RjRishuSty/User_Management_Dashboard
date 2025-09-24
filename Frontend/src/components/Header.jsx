import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import Logo from "./Logo";
import Search from "./Search";
import CustomAllBtn from "./CustomAllBtn";
import Sidebar from "./Sidebar";

const Header = () => {
  //* IsLaptop and isTablet that handle responsive. when screen size is laptop size or Tablet size.
  const isLaptop = useMediaQuery("(max-width:1160px)");
  const isTablet = useMediaQuery("(max-width:800px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Stack>
      <AppBar position="static" sx={{ bgcolor: "primary.dark", p: 0.7 }}>
        <Toolbar>
          <Logo />
          {!isTablet ? (
            <>
              {!isLaptop && (
                <Box sx={{ width: "40%", marginLeft: "auto" }}>
                  <Search />
                </Box>
              )}
              <Box sx={{ marginLeft: "auto" }}>
                <CustomAllBtn useIn="filter" />
                <CustomAllBtn useIn="create" />
              </Box>
            </>
          ) : (
            <IconButton sx={{ marginLeft: "auto" }} onClick={toggleDrawer(true)}>
              <MenuSharpIcon fontSize="large" sx={{ color: "#fff" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Sidebar open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </Stack>
  );
};

export default Header;
