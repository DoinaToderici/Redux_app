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
    <div className="form-container mb-5">
      <h1> Ajouter un nouveau post</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex w-50 flex-col gap-2"
      >
        <input
          label="Username"
          type="text"
          placeholder="Titre du poste"
          name="title"
          value={newPost.title}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        />
        <textarea
          variant="outlined"
          placeholder="Postez vos pensées..."
          name="content"
          value={newPost.content}
          onChange={handleChange}
          className="mt-1 px-3 py-2 h-40 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        />
        <input
          type="submit"
          className="bg-lime-600 hover:bg-lime-300 text-white w-50 mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 bg"
        />
      </form>
    </div>
  );
};

export default PostForm;
