import React from "react";
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

const Header = () => {
  //* IsLaptop and isTablet that handle responsive. when screen size is laptop size or Tablet size.
  const isLaptop = useMediaQuery("(max-width:1160px)");
  const isTablet = useMediaQuery("(max-width:800px)");
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
            <IconButton sx={{ marginLeft: "auto" }}>
              <MenuSharpIcon fontSize="large" sx={{ color: "#fff" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Stack>
  );
};

export default Header;
