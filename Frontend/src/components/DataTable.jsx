import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import { userTableHeaders } from "../customObjects/userTableHeaders";

const DataTable = ({ users }) => {
  //* This function return address formate like street->suite->city....
  const formatAddress = (address) =>
    `${address.street}, ${address.suite}, ${address.city} - ${address.zipcode}`;

  const handlerIsEven = (index)=>{
    return index%2==0;
  }
  return (
    <TableContainer component={Paper} sx={{ p: 5, minHeight: "89vh" }}>
      <Table sx={{}}>
        <TableHead>
          <TableRow sx={{bgcolor:'primary.dark'}}>
            {userTableHeaders?.map((item) => (
              <TableCell
                key={item.id}
                sx={{
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                {item.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0
            ? users.map((user,index) => (
                <TableRow key={user.id} sx={{bgcolor:handlerIsEven(index)?"primary.light":'secondary.light'}}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{formatAddress(user.address)}</TableCell>
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
            : ""}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
