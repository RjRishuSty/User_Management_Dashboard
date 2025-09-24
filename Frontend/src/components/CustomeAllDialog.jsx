import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";
import { useDialog } from "../context_Api/DialogContext";
import UserForm from "./UserForm";
import { useFilter } from "../context_Api/UserFilterContext";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useUsers } from "../context_Api/UserContext";
import CircularProgress from "@mui/material/CircularProgress";

const CustomeAllDialog = () => {
  //* Custome hook that provide data related Dialog.
  const { openDialogType, selectedUser, handleCloseDialog } = useDialog();
  const { handleApplyFilters, handleResetFilters } = useFilter();
  const { handlerAddUser, handlerUpdateUser, loading } = useUsers();
  //* This hook provide me show the error message.
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  //* Pre-fill form when user selects update
  useEffect(() => {
    if (selectedUser && openDialogType === "update") {
      setFormData({
        id: selectedUser.id,
        name: selectedUser.name || "",
        email: selectedUser.email || "",
        phone: selectedUser.phone || "",
        company: selectedUser.company?.name || "",
      });
    } else if (openDialogType === "create" || openDialogType === "filter") {
      setFormData({ id: null, name: "", email: "", phone: "", company: "" });
    }
  }, [selectedUser, openDialogType]);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }, []);

  // Validation function
  const handleValidate = useCallback(() => {
    if (openDialogType === "filter") {
      const hasValue = Object.values(formData).some(
        (val) => val && val.trim() !== ""
      );
      if (!hasValue) {
        enqueueSnackbar("Please enter at least one filter value.", {
          variant: "error",
        });
        return false;
      }
      return true;
    } else {
      //* Create / Update: all fields are required
      if (!formData.name.trim()) {
        enqueueSnackbar("Name is required.", { variant: "error" });
        return false;
      }
      //* Email Validation.
      if (!formData.email.trim()) {
        enqueueSnackbar("Email is required.", { variant: "error" });
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        enqueueSnackbar(
          "Please enter a valid email address (example@domain.com).",
          { variant: "error" }
        );
        return false;
      }
      //* Phone Validation.
      if (!formData.phone.trim()) {
        enqueueSnackbar("Phone number is required.", { variant: "error" });
        return false;
      }
      if (formData.phone.length < 10) {
        enqueueSnackbar("Phone number must be at least 10 digits.", {
          variant: "error",
        });
        return false;
      }
      //* company Validation.
      if (!formData.company.trim()) {
        enqueueSnackbar("Company is required.", { variant: "error" });
        return false;
      }
      return true; // valid
    }
  }, [formData, openDialogType, enqueueSnackbar]);

  const handleApplyClick = useCallback(async () => {
    if (!handleValidate()) return;

    if (openDialogType === "create") {
      await handlerAddUser({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: { name: formData.company },
      });
    } else if (openDialogType === "update" && formData.id) {
      await handlerUpdateUser(formData.id, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: { name: formData.company },
      });
      enqueueSnackbar("User updated successfully.", { variant: "success" });
    } else if (openDialogType === "filter") {
      handleApplyFilters(formData);
    }

    handleCloseDialog();
    setFormData({ name: "", email: "", phone: "", company: "", id: null });
  }, [
    openDialogType,
    formData,
    handlerAddUser,
    handlerUpdateUser,
    handleApplyFilters,
    handleCloseDialog,
    handleValidate,
    enqueueSnackbar,
  ]);

  //* Reset handler
  const handleResetClick = useCallback(() => {
    setFormData({ name: "", email: "", phone: "", company: "" });
    if (openDialogType === "filter") {
      handleResetFilters();
    }
    handleCloseDialog();
  }, [handleResetFilters, handleCloseDialog, openDialogType]);

  //* memoized dialog header title..
  const dialogTitle = useMemo(() => {
    switch (openDialogType) {
      case "filter":
        return "Filter Users";
      case "create":
        return "Create New User";
      case "update":
        return "Update User";
      default:
        return "";
    }
  }, [openDialogType]);

  return (
    <Dialog open={!!openDialogType} onClose={handleCloseDialog}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <DialogTitle variant="h5" sx={{ fontWeight: 600 }}>
          {dialogTitle}
        </DialogTitle>
        <IconButton
          onClick={handleCloseDialog}
          sx={{ mr: 2, bgcolor: "primary.dark", color: "white" }}
        >
          <CloseIcon fontSize="medium" />
        </IconButton>
      </Box>
      <DialogContent>
        <UserForm formData={formData} handleChange={handleChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleResetClick}>Reset</Button>
        <Button variant="contained" onClick={handleApplyClick}>
          {openDialogType === "filter" ? (
            "Apply Filter"
          ) : openDialogType === "create" ? (
            loading ? (
              <CircularProgress size={20} sx={{color:'white'}} />
            ) : (
              "Create User"
            )
          ) : openDialogType === "update" ? (
            loading ? (
              <CircularProgress size={20} sx={{color:'white'}} />
            ) : (
              "Update User"
            )
          ) : (
            ""
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomeAllDialog;
