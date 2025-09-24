import { Box, Container, useMediaQuery } from "@mui/material";
import Search from "../components/Search";
import CustomAllBtn from "../components/CustomAllBtn";
import { useUsers } from "../context_Api/UserContext";
import UserTable from "../components/UserTable";
import CustomeAllDialog from "../components/CustomeAllDialog";
import { useDialog } from "../context_Api/DialogContext";
import SkeletonLoader from '../components/SkeletonLoader';

const DashboardPage = () => {
  //* IsLaptop and isTablet that handle responsive. when screen size is laptop size or Tablet size.
  const isLaptop = useMediaQuery("(max-width:1160px)");
  const isTablet = useMediaQuery("(max-width:800px)");
  
  const { loading } = useUsers();
  const {openDialogType} = useDialog();
  return (
    <Box
      sx={{
        height: "auto",
        overflowY: "auto",
      }}
    >
      {isLaptop && (
        <Container
          sx={{
            mt:isLaptop?2:1,
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Search />
          {!isTablet && <CustomAllBtn useIn="search" />}
        </Container>
      )}

      <Container
        maxWidth="xl"
        sx={{
          minHeight: "auto",
          // border:'2px solid red',
          mt:5,
          mb:3
        }}
      >
        {loading? <SkeletonLoader/> : <UserTable />}
      </Container>

      {/* Open Filter or Add dialog */}
      {
        openDialogType && <CustomeAllDialog/>
      }
    </Box>
  );
};

export default DashboardPage;
