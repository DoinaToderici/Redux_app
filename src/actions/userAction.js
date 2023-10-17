import axios from "axios";

export const GET_USERS = "GET_USERS";
export const ADD_USER_LIKE = "ADD_USER_LIKE";

export const getUsers = () => {
  return (dispatch) => {
    return axios.get(`http://localhost:3000/user`).then((res) => {
      dispatch({ type: GET_USERS, payload: res.data });
    });
  };
};

export const addUserLike = (newLikedUser) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:3000/user/${newLikedUser.id}`, newLikedUser)
      .then(function (res) {
        dispatch({ type: ADD_USER_LIKE, payload: newLikedUser });
      });
  };
};
