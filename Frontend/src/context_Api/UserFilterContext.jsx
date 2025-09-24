import React, { createContext, useContext, useEffect, useState } from "react";
import { useUsers } from "./UserContext";
//* Create user Filter context that manage open modal and apply filter.
const UserFilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { users } = useUsers();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleApplyFilters = (filters) => {
    const { name, email, phone, company } = filters;
  const searchValue = (name || email || phone || company || "").toLowerCase();

  if (!searchValue) {
    setFilteredUsers(users);
    setIsFilterApplied(false);
    return;
  }

  const filtered = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue) ||
      user.phone.toLowerCase().includes(searchValue) ||
      user.company.name.toLowerCase().includes(searchValue)
    );
  });

  setFilteredUsers(filtered);
  setIsFilterApplied(true);
  };

  //* Reset all filters....
  const handleResetFilters = () => {
    setFilteredUsers(users);
  };
  console.log("Filtered Users:", filteredUsers);
  return (
    <UserFilterContext.Provider
      value={{  filteredUsers, handleApplyFilters, handleResetFilters, isFilterApplied }}
    >
      {children}
    </UserFilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilter = () => useContext(UserFilterContext);
