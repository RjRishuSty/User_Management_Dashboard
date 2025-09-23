import React from "react";
import { Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useFilter } from "../context_Api/UserFilterContext";

const CustomAllBtn = ({ useIn }) => {
  const {openFilterDialog, handleOpenFilterDialog} = useFilter();
  console.log(openFilterDialog)

  const renderButton = () => {
    switch (useIn) {
      case "filter":
        return (
          <Button
            startIcon={<FilterListIcon />}
            variant="contained"
            sx={{ bgcolor: "secondary.dark", mr: 2 }}
            onClick={handleOpenFilterDialog}
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
            // onClick={onClick}
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
