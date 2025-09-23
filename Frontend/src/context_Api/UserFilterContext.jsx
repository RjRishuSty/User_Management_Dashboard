import React, { createContext, useContext, useState } from "react";
//* Create user Filter context that manage open modal and apply filter.
const UserFilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [openFilterDialog, setOpenFilterDialog] = useState(false);
//   const [applyFilter, setApplyFilter] = useState(false);

  //* This Handle control Dialog.
  const handleOpenFilterDialog = () => {
    setOpenFilterDialog(true);
  };
 
  //* This Handle  Close filter Dialog.
  const handleCloseFilterDialog = () => {
    setOpenFilterDialog(true);
  };
  return (
    <UserFilterContext.Provider
      value={{ openFilterDialog, handleOpenFilterDialog,handleCloseFilterDialog }}
    >
      {children}
    </UserFilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilter = () => useContext(UserFilterContext);
