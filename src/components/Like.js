import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostLike } from "../actions/post.action";
import { addUserLike } from "../actions/userAction";

const Like = ({ post }) => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleAddLikes = (post) => {
    const newLikedPost = {
      ...post,
      likes: post.likes + 1,
    };

    const newLikeUser = {
      ...user[0],
      likes: user[0].likes + 1,
    };
    dispatch(addPostLike(newLikedPost));
    dispatch(addUserLike(newLikeUser));
  };

  return (
    <div>
      <img
        src="./icons/clap.png"
        className="clap"
        alt="clap"
        onClick={() => handleAddLikes(post)}
      />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
