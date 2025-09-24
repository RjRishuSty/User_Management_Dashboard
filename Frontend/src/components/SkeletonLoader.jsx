import React from "react";
import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function SkeletonLoader() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {["ID", "Name", "Email", "Phone", "Company", "Actions"].map(
              (heading, index) => (
                <TableCell key={index}>
                  <Skeleton variant="text" width={100} height={50}/>
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 8 }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {Array.from({ length: 6 }).map((__, colIndex) => (
                <TableCell key={colIndex}>
                  <Skeleton variant="text" width="100%" height={30} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
