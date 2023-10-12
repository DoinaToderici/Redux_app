import { GET_USERS } from "../actions/userAction";

const initialState = [];

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.payload;

    default:
      return state;
  }
}
