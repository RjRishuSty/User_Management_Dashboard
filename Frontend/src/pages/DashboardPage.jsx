import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../components/DataTable";
import UserFilterDialog from "../components/UserFilterDialog";
import UserTableWrapper from "../components/UserTableWrapper";

const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  //* This UseEffect fetch user data from JSONPlaceholder.............
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, []);
  console.log("User Data", users);
  return (
    <Box sx={{ minHeight: "80vh" }}>
    {/* <UserTableWrapper/>
    <UserFilterDialog/>
      {isLoading ? "" : <DataTable users={users} />} */}
    </Box>
  );
};

export default DashboardPage;
