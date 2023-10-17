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
    <div className="text-violet">
      <h1>Extreme</h1>
      <PostForm />
      <div className="content line-through">
        <div className="post-container">
          {!isEmpty(posts) &&
            posts.map((post, index) => {
              return <Post post={post} key={index} />;
            })}
        </div>
        {!isEmpty(user) &&
          user.map((user, index) => {
            return <User user={user} key={index} />;
          })}
      </div>
    </div>
  );
};

export default App;
