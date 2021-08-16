import axios from "axios";
import { GET_USERS, DELETE_USER, ADD_USER } from "./userTypes";

export const getUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});

export const userDeleted = () => ({
  type: DELETE_USER,
});

export const userAdded = () => ({
  type: ADD_USER,
});

export const loadUsers = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/users/`)
      .then(({ data }) => {
        console.log("response: ", data);
        dispatch(getUsers(data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then(({ data }) => {
        console.log("response: ", data);
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/users/`, user)
      .then((resp) => {
        console.log("response: ", resp);
        dispatch(userAdded());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};
