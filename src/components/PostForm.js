import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../actions/post.action";
import { getRandomNumbers } from "./Utils";
const EMPTY_DATA_FORM = {
  title: "",
  author: "",
  content: "",
  likes: "",
  id: "",
};

const PostForm = () => {
  const users = useSelector((state) => state.userReducer);
  const [newPost, setNewPost] = useState(EMPTY_DATA_FORM);
  // Lancer la fonction getPosts()
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullDataPost = {
      ...newPost,
      author: users[0].pseudo,
      likes: users[0].likes,
      id: getRandomNumbers(),
    };
    dispatch(addPost(fullDataPost));
    setNewPost(EMPTY_DATA_FORM);
  };

  return (
    <div className="form-container">
      <form>
        <input
          type="text"
          placeholder="Titre du poste"
          name="title"
          value={newPost.title}
          onChange={handleChange}
        />
        <textarea
          placeholder="Postez vos pensées..."
          name="content"
          value={newPost.content}
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="Envoyer" onClick={(e) => handleSubmit(e)} />
      </form>
    </div>
  );
};

export default PostForm;
