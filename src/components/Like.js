import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostLike } from "../actions/post.action";
import { addUserLike } from "../actions/userAction";
import { PiHandsClappingThin } from "react-icons/pi";

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
    <div className="flex mr-2">
      <PiHandsClappingThin
        onClick={() => handleAddLikes(post)}
        size={20}
        color="gray-600"
        className="mr-1 cursor-pointer transition delay-300 duration-300 ease-in-out"
      />
      <p className="font-mono text-sm text-gray-600	mb-0">{post.likes}</p>
    </div>
  );
};

export default Like;
