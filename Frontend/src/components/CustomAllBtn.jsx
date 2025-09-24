import React from "react";
import { Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useDialog } from "../context_Api/DialogContext";

const CustomAllBtn = ({ useIn }) => {
  const { handleOpenDialog  } = useDialog();
  const renderButton = () => {
    switch (useIn) {
      case "filter":
        return (
          <Button
            startIcon={<FilterListIcon />}
            variant="contained"
            sx={{ bgcolor: "secondary.dark", mr: 2 }}
            onClick={() => handleOpenDialog("filter")}
          >
            Filter
          </Button>
        );

      case "create":
        return (
          <Button
            variant="outlined"
            sx={{
              borderColor: "text.secondary",
              color: "text.secondary",
            }}
            startIcon={<PersonAddIcon />}
            onClick={() => handleOpenDialog("create")}
          >
            Create User
          </Button>
        );

      case "search":
        return (
          <Button
            variant="contained"
            sx={{
              bgcolor: "secondary.dark",
              mr: 2,
              textTransform: "uppercase",
              px: 5,
              ml: 2,
            }}
          >
            Search
          </Button>
        );

      default:
        return null;
    }
  };

  return <>{renderButton()}</>;
};

export default React.memo(CustomAllBtn);
