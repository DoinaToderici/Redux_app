import React, { useEffect } from "react";
import PostForm from "./components/PostForm";
import User from "./components/User";
import Post from "./components/Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actions/post.action";
import { isEmpty } from "./components/Utils";
import { getUsers } from "./actions/userAction";

const App = () => {
  // Lancer la fonction getPosts()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, []);

  // Recuperer les datas
  const posts = useSelector((state) => state.postReducer);
  const user = useSelector((state) => state.userReducer);
  return (
    <div className="container">
      <PostForm />
      <div className=" grid grid-cols-4 gap-4">
        <div className="post-container col-span-3">
          {!isEmpty(posts) &&
            posts.map((post, index) => {
              return <Post post={post} key={index} />;
            })}
        </div>
        <div className="user-container">
          {!isEmpty(user) &&
            user.map((user, index) => {
              return <User user={user} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
