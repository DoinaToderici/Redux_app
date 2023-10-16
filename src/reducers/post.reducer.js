import {
  ADD_POST,
  DELETE_POST,
  GET_POSTS,
  ADD_POST_LIKE,
  PUT_POST,
} from "../actions/post.action";

const initialState = [];

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POST:
      return [action.payload, ...state];
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
    case ADD_POST_LIKE:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, likes: action.payload.likes };
        } else return item;
      });
    default:
      return state;
  }
}
