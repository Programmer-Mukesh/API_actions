import { GET_USERS, DELETE_USER, ADD_USER } from "../Action/userTypes";

const initialState = {
  loading: true,
  users: [],
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case ADD_USER:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
