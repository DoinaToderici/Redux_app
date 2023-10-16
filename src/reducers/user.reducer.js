import { ADD_USER_LIKE, GET_USERS } from "../actions/userAction";

const initialState = [];

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case ADD_USER_LIKE:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, likes: action.payload.likes };
        } else return item;
      });

    default:
      return state;
  }
}
