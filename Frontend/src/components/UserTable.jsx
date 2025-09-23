import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import { userTableHeaders } from "../customObjects/userTableHeaders";
import { useUsers } from "../context_Api/UserContext";
import { useState } from "react";

const UserTable = () => {
  //* Custom hook that provide all user data.
  const { users } = useUsers();
  console.log(users)
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

  //* slice users based on page + rowsPerPage
  const filteredUser = users.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  //* This handler for change is table cell color.
  const handlerIsEven = (index) => {
    return index % 2 == 0;
  };
  return (
    <Paper sx={{ width: "100%" }}>
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
                    color:'text.secondary'
                  }}
                >
                  {item.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length > 0
              ? filteredUser.map((user, index) => (
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
                    <TableCell>
                      <Tooltip title="Delete">
                        <IconButton
                          sx={{
                            mr: 1,
                            bgcolor: "#ffe6e6",
                            "&:hover": { bgcolor: "#ffcccc" },
                          }}
                        >
                          <DeleteIcon sx={{ color: "#cc0000" }} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton
                          sx={{
                            bgcolor: "#e6ffe6",
                            "&:hover": { bgcolor: "#ccffcc" },
                          }}
                          // onClick={handleOpen}
                        >
                          <EditSquareIcon sx={{ color: "#00b300" }} />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>

      {/* //* This is table pagination. */}
      <TablePagination
        sx={{  bgcolor: "primary.light" }}
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
