import React from "react";

const UseAuth = () => {
  // localStorage.setItem("token");
  const user = localStorage.getItem("");
  console.log(user);
  if (user) {
    return true;
  } else {
    return false;
  }
};

export default UseAuth;
