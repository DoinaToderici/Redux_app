import React, { useState, useRef } from "react";
import Like from "./Like";
import { isEmpty } from "./Utils";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, putPost } from "../actions/post.action";

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
    <div className="post">
      {!isEmpty(user) && user.pseudo === post.author && (
        <div className="edit-delete">
          <img
            src="./icons/edit.svg"
            alt="edit"
            onClick={() => {
              handleEdit(post);
            }}
          />
          <img
            src="./icons/delete.svg"
            alt="delete"
            onClick={() => handleDelete(post.id)}
          />
        </div>
      )}

      <h2>{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />

      {editToggle ? (
        <form onSubmit={(e) => handleValidate(e)}>
          <textarea
            autoFocus={true}
            value={postToEditContent.content}
            name="toModifContent"
            ref={textareaRef}
            onChange={handleChange}
          ></textarea>
          <input type="submit" value="Valider modification" />
        </form>
      ) : (
        <p>{post.content}</p>
      )}

      <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>
    </div>
  );
};

export default Post;
