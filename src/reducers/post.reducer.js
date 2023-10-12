import { ADD_POST, GET_POSTS, PUT_POST } from "../actions/post.action";

const initialState = [];

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POST:
      return [...state, action.payload];
    case PUT_POST:
      return [...state, action.payload];

    default:
      return state;
  }
}
