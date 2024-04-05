import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bcrypt from "bcryptjs-react";

const Login = () => {
  const data = { email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const navigate = useNavigate();

  const handleData = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation to check if email and password are provided
    if (!inputData.email || !inputData.password) {
      toast.error("Please provide both email and password");
      return;
    }

    const values = JSON.parse(localStorage.getItem("values")) || [];

    const matchingUser = values.find(
      (user) =>
        user.email === inputData.email &&
        bcrypt.compareSync(inputData.password, user.password)
    );

    if (matchingUser) {
      toast.success("Login successful");
      setTimeout(() => {
        navigate("/Product");
      }, 2000);
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "210px",
          backgroundColor: "#012",
          height: "auto",
          width: "250px",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <div className="header">
          <h2
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "roboto mono",
            }}
          >
            LogIn
          </h2>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={inputData.email}
            onChange={handleData}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={inputData.password}
            onChange={handleData}
          />
          <br />
          <br />
          <a href="/" className="active">
            <i>
              <u>Click to Signup</u>
            </i>
          </a>
        </div>
        <br />
        <br />
        <button
          style={{ padding: "5px", borderRadius: "50px", width: "150px" }}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Login;
