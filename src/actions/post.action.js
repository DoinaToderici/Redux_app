import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const PUT_POST = "ADD_POST";

export const getPosts = () => {
  return (dispatch) => {
    return axios.get(`http://localhost:3000/posts`).then((res) => {
      dispatch({ type: GET_POSTS, payload: res.data });
    });
  };
};

export const addPost = (newPostData) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3000/posts", newPostData)
      .then(function (res) {
        dispatch({ type: ADD_POST, payload: res.data });
      });
  };
};

// export const putPost = (idPostToModify, updatedPostData) => {
//   return (dispatch) => {
//     return axios
//       .put(`http://localhost:3000/posts/${idPostToModify}`, updatedPostData)
//       .then(function (res) {
//         dispatch({ type: PUT_POST, payload: res.data });
//       });
//   };
// };
