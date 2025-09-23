import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FilterAltOffSharpIcon from "@mui/icons-material/FilterAltOffSharp";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  const isTablet = useMediaQuery("(max-width:800px)");
  return (
    <Stack>
      <AppBar position="static" sx={{ bgcolor: "primary.main", p: 0.7 }}>
        <Toolbar>
          <Logo />
          {!isTablet ? (
            <>
              <Box sx={{ width: "40%", marginLeft: "auto" }}>
                <Search />
              </Box>
              <Box sx={{ marginLeft: "auto" }}>
                <Button
                  startIcon={<AddIcon />}
                  variant="outlined"
                  sx={{
                    mr: 2,
                    borderColor: "text.secondary",
                    color: "text.secondary",
                  }}
                >
                  Create New User
                </Button>
                <Button
                  endIcon={<FilterAltOffSharpIcon />}
                  variant="contained"
                  sx={{ bgcolor: "secondary.dark" }}
                >
                  Filter User
                </Button>
              </Box>
            </>
          ) : (
            <IconButton sx={{marginLeft:'auto',}}>
              <MenuSharpIcon fontSize="large" sx={{color:'#fff'}} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Stack>
  );
};

export default Header;
