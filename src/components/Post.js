import React, { useState, useRef } from "react";
import Like from "./Like";
import { isEmpty } from "./Utils";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, putPost } from "../actions/post.action";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

const Post = ({ post }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [postToEditContent, setPostTopostToEditContent] = useState({});
  const user = useSelector((state) => state.userReducer);
  const textareaRef = useRef(null);
  const dispatch = useDispatch();

  const handleEdit = (post) => {
    setEditToggle(!editToggle);
    setPostTopostToEditContent(post);
  };

  const handleChange = () => {
    setPostTopostToEditContent({
      ...postToEditContent,
      content: textareaRef.current.value,
    });
  };

  const handleValidate = (e) => {
    e.preventDefault();
    dispatch(putPost(postToEditContent.id, postToEditContent));
    setEditToggle(!editToggle);
  };

  const handleDelete = (idPostToDelete) => {
    dispatch(deletePost(idPostToDelete));
  };

  return (
    <div className="post border-2 border-rose-600 rounded-md p-4 mb-4 shadow-lg">
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />
      <h2 className="mt-4">{post.title}</h2>
      <div className="w-full my-3">
        {editToggle ? (
          <form onSubmit={(e) => handleValidate(e)}>
            <textarea
              variant="outlined"
              autoFocus={true}
              value={postToEditContent.content}
              name="toModifContent"
              ref={textareaRef}
              onChange={handleChange}
              className="mt-1 px-3 py-2 h-40 bg-white border shadow-sm border-lime-300 placeholder-slate-400 focus:outline-none focus:border-lime-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            ></textarea>
            <input
              type="submit"
              value="Valider modification"
              className="bg-lime-600 hover:bg-lime-300 text-white w-30 mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 bg"
            />
          </form>
        ) : (
          <p>{post.content}</p>
        )}
      </div>

      <div className="flex gap-1 justify-between">
        {!isEmpty(user) && user[0].pseudo === post.author && (
          <div className="flex justify-items-center">
            {" "}
            <MdModeEdit
              onClick={() => {
                handleEdit(post);
              }}
              className="mr-1 cursor-pointer"
            />
            <RiDeleteBin5Line
              onClick={() => handleDelete(post.id)}
              className="cursor-pointer"
            />
          </div>
        )}

        <div className="flex">
          {" "}
          <Like post={post} />
          <p className="font-sans text-sm text-gray-500	my-0 italic text-right ">
            Creé par{" "}
            <span className="text-gray-600 underline font-bold capitalize">
              {post.author}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
