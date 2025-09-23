import { Typography, useMediaQuery } from "@mui/material";
import React from "react";
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';

const Logo = () => {
  const smallDevice = useMediaQuery("(max-width:375px)");
  return (
    <Typography variant={smallDevice?"h5":"h4"}  sx={{ fontWeight: 800 }}>
      Manage
      <Typography component="span" variant={smallDevice?"h6":"h5"} sx={{ml:0.5,fontWeight:700,textTransform:'uppercase'}}>
        Users
      </Typography>
    </Typography>
  );
};

export default Logo;
