// UserActions.jsx
import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import { useDialog } from "../context_Api/DialogContext";
import { useUsers } from "../context_Api/UserContext";
import { enqueueSnackbar } from "notistack";

const UserActions = ({ userId }) => {
  
  const { handleOpenDialog } = useDialog();
  //* Custom hook that provide all user data.
  const { users,handlerDeleteUser } = useUsers();

  const handleUpdateClick = (userId) => {
    const user = users.find((user) => user.id === userId);
    handleOpenDialog("update", user);
  };
  //* THis handle work on when user click on delete button.
  const handleDeleteClick = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await handlerDeleteUser(userId);
        enqueueSnackbar("User deleted successfully.", { variant: "success" });
      } catch (err) {
        enqueueSnackbar(`Failed to delete user. ${err.message}`, { variant: "error" });
      }
    }
  };
  return (
    <>
      <Tooltip title="Delete">
        <IconButton
          onClick={()=>handleDeleteClick(userId)}
          sx={{
            mr: 1,
            bgcolor: "#ffe6e6",
            "&:hover": { bgcolor: "#ffcccc" },
          }}
        >
          <DeleteIcon sx={{ color: "#cc0000" }} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Update">
        <IconButton
          onClick={() => handleUpdateClick(userId)}
          sx={{
            bgcolor: "#e6ffe6",
            "&:hover": { bgcolor: "#ccffcc" },
          }}
        >
          <EditSquareIcon sx={{ color: "#00b300" }} />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default React.memo(UserActions);
 