import React, { createContext, useContext, useState } from "react";
import { useUsers } from "./UserContext";
//* Create user Filter context that manage open modal and apply filter.
const UserFilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { users } = useUsers();
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleApplyFilters = (filters) => {
    const { name, email, phone, company } = filters;

    const filtered = users.filter((user) => {
      return (
        (!name || user.name.toLowerCase().includes(name.toLowerCase())) &&
        (!email || user.email.toLowerCase().includes(email.toLowerCase())) &&
        (!phone || user.phone.toLowerCase().includes(phone.toLowerCase())) &&
        (!company ||
          user.company.name.toLowerCase().includes(company.toLowerCase()))
      );
    });

    setFilteredUsers(filtered);
  };

    //* Reset all filters....
  const handleResetFilters = () => {
    setFilteredUsers(users);
  };
  return (
    <UserFilterContext.Provider value={{filteredUsers, handleApplyFilters,handleResetFilters }}>
      {children}
    </UserFilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilter = () => useContext(UserFilterContext);
