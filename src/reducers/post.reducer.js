import {
  ADD_POST,
  DELETE_POST,
  GET_POSTS,
  PUT_POST,
} from "../actions/post.action";

const initialState = [];

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POST:
      return [...state, action.payload];
    case PUT_POST:
      const newState = state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
      return newState;

    case DELETE_POST:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
}
