import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField, 
  Stack,
} from "@mui/material";
import { useFilter } from "../context_Api/UserFilterContext";

const UserFilterDialog = ({  onApply }) => {
  const {openFilterDialog,handleCloseFilterDialog} = useFilter();
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleApply = () => {
    onApply(filters);
    handleCloseFilterDialog();
  };

  const handleReset = () => {
    const resetFilters = { firstName: "", lastName: "", email: "", department: "" };
    setFilters(resetFilters);
    onApply(resetFilters);
    handleCloseFilterDialog();
  };

  return (
    <Dialog open={openFilterDialog} onClose={handleCloseFilterDialog} sx={{border:'3px solid red'}}>
      <DialogTitle>Filter Users</DialogTitle>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            label="First Name"
            name="firstName"
            value={filters.firstName}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={filters.lastName}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={filters.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Department"
            name="department"
            value={filters.department}
            onChange={handleChange}
            fullWidth
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleReset}>Reset</Button>
        <Button variant="contained" onClick={handleApply}>
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserFilterDialog;
