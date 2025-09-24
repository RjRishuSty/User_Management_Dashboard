import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import UserTableActions from "./UserTableActions";
import { userTableHeaders } from "../customObjects/userTableHeaders";
//* Hooks.......
import { useState } from "react";
//* Custome hoook..........
import { useUsers } from "../context_Api/UserContext";
import { useFilter } from "../context_Api/UserFilterContext";

const UserTable = () => {
  //* Custom hook that provide all user data.
  const { users } = useUsers();
  const { filteredUsers, isFilterApplied } = useFilter();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  //* THis handle work on  pagination change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  //* this handler work only when user selects a new number of rows per page.
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(Number(event.target.value));
    setPage(0); // reset to first page
  };

  const usersToShow = isFilterApplied ? filteredUsers : users;

  //* slice users based on page + rowsPerPage
  const paginatedUsers = usersToShow.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  //* This handler for change is table cell color.
  const handlerIsEven = (index) => {
    return index % 2 == 0;
  };

  return (
    <Paper sx={{ width: "100%", height: "100%" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "secondary.dark" }}>
              {userTableHeaders?.map((item) => (
                <TableCell
                  key={item.id}
                  sx={{
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "text.secondary",
                  }}
                >
                  {item.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user, index) => (
                <TableRow
                  key={user.id}
                  sx={{
                    bgcolor: handlerIsEven(index)
                      ? "background.paper"
                      : "#f2f2f2",
                  }}
                >
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.company.name}</TableCell>
                  {/* //* Add user action button like update delete. */}
                  <TableCell>
                    <UserTableActions userId={user.id} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={6}
                  align="center"
                  sx={{ fontWeight: 600, color: "text.primary" }}
                >
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* //* This is table pagination. */}
      <TablePagination
        sx={{ bgcolor: "primary.light" }}
        component="div"
        count={users.length} // total users
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
      />
    </Paper>
  );
};

export default UserTable;
