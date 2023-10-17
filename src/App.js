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
    <div className="container py-4">
      <PostForm />
      <div className="grid md:grid-cols-4 grid-cols-1  gap-4">
        <div className="post-container md:col-span-3 ">
          {!isEmpty(posts) &&
            posts.map((post, index) => {
              return <Post post={post} key={index} />;
            })}
        </div>
        <div className="user-container mt-2 md:mt-0">
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
