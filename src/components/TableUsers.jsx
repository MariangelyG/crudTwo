import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { Buttons } from "./Buttons";
//Tabla que muestra los datos
//recibe como prop users, que es el arreglo con los datos del usurio.
export const TableUsers = ({ users, openModal, handleView, handleEdit }) => {
  return (
    <>
      <TableContainer sx={{ mt: "20px" }}>
        <Table aria-label="simple table" size="small">
          <TableHead sx={{ bgcolor: "#2b064d" }}>
            <TableRow>
              <TableCell
                sx={{
                  color: "white",
                  fontSize: 18,
                }}
              >
                Name
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontSize: 18,
                }}
              >
                UserName
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontSize: 18,
                }}
              >
                Email
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontSize: 18,
                }}
              >
                Phone
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontSize: 18,
                }}
              >
                Website
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontSize: 18,
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                // sx={{ "&:last-child td, &:last-child th": { border: 0 }}}
              >
                {/* ?. operador opcional que sirve para evitar errores si el dato es nulo o indefinido */}
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  {user?.name}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  {user?.username}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  {user?.email}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  {user?.phone}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  {user?.website}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  {
                    <Buttons
                      openModal={openModal}
                      id={user.id}
                      handleView={handleView}
                      handleEdit={handleEdit}
                      user={user}
                    />
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
