import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Form from "./Home";
import { loadUsers, deleteUser } from "../Action/actions";
import Button from "@material-ui/core/Button";
import { Array2 } from "./constant";

const usebuttonStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const UserTable = () => {
  const buttonclass = usebuttonStyles();
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userData.users);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <Form />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {Array2.map((x, index) => (
                <StyledTableCell align="left" key={index}>
                  {x}
                </StyledTableCell>
              ))}
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user &&
              user.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.id}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {user.username}
                  </StyledTableCell>
                  <StyledTableCell align="left">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    <div className={buttonclass.root}>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserTable;
