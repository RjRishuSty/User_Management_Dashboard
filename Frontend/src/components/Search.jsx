import { TextField, InputAdornment } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <TextField
      fullWidth
      id="search"
      type="search"
      size="small"
      placeholder="Search by name, email, or department..."
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        bgcolor: "#ccbdf5",
        borderRadius: 55,
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none", // remove default border
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: "none", // keep no border on hover
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "none", // keep no border on focus
        },
        input: {
          paddingLeft: 1,
          fontWeight:500
        },
        "& input::placeholder": {
          color: "#595959",
          opacity:0.9,
          letterSpacing:0.5
        },
      }}
    />
  );
};

export default Search;
