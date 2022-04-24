import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./Home.css";
import { useDispatch } from "react-redux";
import { addUser, loadUsers } from "../Action/actions";
import { InputField } from "./InputField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

const useButtonStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "17ch",
    },
  },
}));

const Form = () => {
  const dispatch = useDispatch();
  const buttonclasses = useButtonStyles();
  const classes = useStyles();

  const [state, setState] = useState({
    name: "",
    username: "",
    email: "",
  });

  const handleSubmit = (e) => {
    //e.preventDefault();
    dispatch(addUser(state));
    dispatch(loadUsers());
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const { name, username, email } = state;
  return (
    <div className="container">
      <div className="h1Text">
        <h1>Add user</h1>
      </div>
      <div className="row">
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <InputField
              value={name}
              label="Name"
              text="name"
              event={handleInputChange}
            />
            <InputField
              value={username}
              label="Username"
              text="username"
              event={handleInputChange}
            />
            <InputField
              value={email}
              label="Email"
              text="email"
              event={handleInputChange}
            />
          </div>
          <div className={buttonclasses.root}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
