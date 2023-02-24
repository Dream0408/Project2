import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "../Inventory-page/productlist.scss";
import { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from "../../../firebase.config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getStorage, ref } from "firebase/storage";


export default function ProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);


  const empCollectionRef = collection(db, "products");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "products", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      setRows([]);
      getUsers();
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Typography
        className="Text"
        gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: "20px" }}
      >
        {/* Products List */}
      </Typography>
      <Divider />

      <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rows}
              sx={{ width: 300 }}
              onChange={(e, v) => filterData(v)}
              getOptionLabel={(rows) => rows.Product || ""}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Search Products" />
              )}
            />
            <Typography 
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button  className="button_add" variant="contained" endIcon={<AddCircleIcon />}>
              Add
            </Button>
          </Stack>
          <Box height={10} />

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table"  fontFamily={"Nunito"}>
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ minWidth: "100px" }} >
                Image
              </TableCell>

              <TableCell align="left" style={{ minWidth: "100px" }}>
                Product
              </TableCell>

              <TableCell align="left" style={{ minWidth: "100px" }}>
                Category
              </TableCell>

              <TableCell align="left" style={{ minWidth: "100px" }}>
                Size
              </TableCell>

              <TableCell align="left" style={{ minWidth: "100px" }}>
                Price
              </TableCell>

              <TableCell align="left" style={{ minWidth: "100px" }}>
                Date
              </TableCell>

              <TableCell  align="left" style={{ minWidth: "100px" }}>
                Stock status
              </TableCell>

              <TableCell align="left" style={{ minWidth: "100px" }}>
                Stock
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell key={row.id} align="left">
                    <img className="img-resize" src={row.imgUrl} alt=""></img>
                    </TableCell>
                    <TableCell key={row.id} align="left">
                      {row.Product}
                    </TableCell>
                    <TableCell key={row.id} align="left">
                      {row.Category}
                    </TableCell>
                    <TableCell key={row.id} align="left">
                      {row.Size}
                    </TableCell>
                    <TableCell key={row.id} align="left">
                      {row.Price}
                    </TableCell>
                    <TableCell key={row.id} align="left">
                      {row.Date}
                    </TableCell>
                    <TableCell key={row.id} align="left">
                      {row.Stockstatus}
                    </TableCell>
                    <TableCell key={row.id} align="left">
                      {row.Stock}
                    </TableCell>
                    <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                              // onClick={() => editUser(row.id)}
                            />
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteUser(row.id);
                              }}
                            />
                          </Stack>
                        </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
