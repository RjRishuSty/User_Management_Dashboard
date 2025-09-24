import React from "react";
import { Button, useMediaQuery } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useDialog } from "../context_Api/DialogContext";

const CustomAllBtn = ({ useIn }) => {
  const { handleOpenDialog } = useDialog();
  //* IsLaptop and isTablet that handle responsive. when screen size is laptop size or Tablet size.
  const isLaptop = useMediaQuery("(max-width:1160px)");
  const isTablet = useMediaQuery("(max-width:800px)");
  const renderButton = () => {
    switch (useIn) {
      case "filter":
        return (
          <Button
          fullWidth={isTablet?true:false}
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
            fullWidth={isTablet?true:false}
            sx={{
              borderColor:isTablet?"primary.main": "text.secondary",
              color: isTablet?"primary.main":"text.secondary",
              mb:isTablet?2:0
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
            size={isLaptop ? "medium" : "small"}
            sx={{
              bgcolor:"secondary.dark",
              mr: 2,
              textTransform: "uppercase",
              px: 5,
              py: 1.8,
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
