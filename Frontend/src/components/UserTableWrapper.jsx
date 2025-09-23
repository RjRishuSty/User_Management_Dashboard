import React, { useState } from "react";
import { Button } from "@mui/material";
import UserFilterDialog from "./UserFilterDialog";

const UserTableWrapper = ({ users }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleApplyFilters = (filters) => {
    const { firstName, lastName, email, department } = filters;
    const filtered = users.filter((user) => {
      return ( 
        user.name.toLowerCase().includes(firstName.toLowerCase()) &&
        user.username.toLowerCase().includes(lastName.toLowerCase()) &&
        user.email.toLowerCase().includes(email.toLowerCase()) &&
        user.company.name.toLowerCase().includes(department.toLowerCase())
      );
    });
    setFilteredUsers(filtered);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={() => setOpenFilter(true)}>
        Filter
      </Button>

      <UserFilterDialog
        open={openFilter}
        onClose={() => setOpenFilter(false)}
        onApply={handleApplyFilters}
      /> */}

      {/* Render your table here using filteredUsers */}
    </div>
  );
};

export default UserTableWrapper;
