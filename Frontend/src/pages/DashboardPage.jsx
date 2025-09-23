import { Box, Container, useMediaQuery } from "@mui/material";
import Search from "../components/Search";
import CustomAllBtn from "../components/CustomAllBtn";
import { useUsers } from "../context_Api/UserContext";
import UserTable from "../components/UserTable";
import { useFilter } from "../context_Api/UserFilterContext";
import UserFilterDialog from "../components/UserFilterDialog";

const DashboardPage = () => {
  //* IsLaptop and isTablet that handle responsive. when screen size is laptop size or Tablet size.
  const isLaptop = useMediaQuery("(max-width:1160px)");
  const isTablet = useMediaQuery("(max-width:800px)");
  const { loading } = useUsers();
  const {openFilterDialog} = useFilter();
  return (
    <Box
      sx={{
        height: "auto",
        overflowY: "auto",
      }}
    >
      {isLaptop && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Search />
          {!isTablet && <CustomAllBtn useIn="search" />}
        </Box>
      )}

      <Container
        maxWidth="xl"
        sx={{
          minHeight: "69vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 5,
        }}
      >
        {loading ? "Loading..." : <UserTable />}
      </Container>

      {/* Open Filter or Add dialog */}
      {
        openFilterDialog && <UserFilterDialog/>
      }
    </Box>
  );
};

export default DashboardPage;
