import React, { createContext, useContext, useState } from "react";

const DialogContext = createContext();

export const DialogProvider = ({ children }) => {
  //* null = no dialog open | "filter" | "create" | "update"
  const [openDialogType, setOpenDialogType] = useState(null);
  //* THis state provide me selected user for update.
  const [selectedUser, setSelectedUser] = useState(null);

  //* Handle open dialog.
  const handleOpenDialog = (type, user) => {
    setOpenDialogType(type);
    setSelectedUser(user);
  };
  //* Handle Colse Dialog.
  const handleCloseDialog = () => {
    setOpenDialogType(null);
  };

  return (
    <DialogContext.Provider
      value={{
        selectedUser,
        openDialogType,
        handleOpenDialog,
        handleCloseDialog,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDialog = () => useContext(DialogContext);
