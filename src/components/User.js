import React from "react";

const User = ({ user }) => {
  return (
    <div className="user-container text-center border-rose-600 rounded-md py-4 px-3 shadow-lg">
      <img
        src="./img/bill-gates.png"
        alt="bill gates"
        className="rounded-full mx-auto mb-2"
      />
      <h3 className="mb-1">{user.pseudo}</h3>
      <p className="mb-1">
        Age : <span className="font-bold">{user.age} ans</span>
      </p>
      <p className="mb-1">
        Like{user.likes > 1 && "s"} :{" "}
        <span className="font-bold">{user.likes}</span>
      </p>
    </div>
  );
};

export default User;
