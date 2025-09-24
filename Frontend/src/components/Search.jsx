import { TextField, InputAdornment, useMediaQuery } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useFilter } from "../context_Api/UserFilterContext";

const Search = () => {
  //* IsLaptop that handle responsive. when screen size is laptop size.
  const isLaptop = useMediaQuery("(max-width:1160px)");
  const { handleApplyFilters, handleResetFilters } = useFilter();

  //* handl search logic.
  const handleSearch = (e) => {
  const value = e.target.value;
  if (!value) {
    handleResetFilters();
  } else {
    handleApplyFilters({ name: value, email: value, phone: value, company: value });
  }
};
  return (
    <TextField
      fullWidth
      id="search"
      type="search"
      size={isLaptop?"medium":"small"}
      placeholder="Search by name, email, or department..."
      variant="outlined"
      onChange={handleSearch}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" >
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        bgcolor: "#ccbdf5",
        borderRadius: isLaptop ? 1 : 55,
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
          fontWeight: 500,
        },
        "& input::placeholder": {
          color: "#595959",
          opacity: 0.9,
          letterSpacing: 0.5,
        },
      }}
    />
  );
};

export default Search;
