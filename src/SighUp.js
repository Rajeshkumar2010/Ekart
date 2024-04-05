import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import { userValidation } from "./Validation";
import bcrypt from "bcryptjs-react";
import "react-toastify/dist/ReactToastify.css";
// import { compareSync } from "bcryptjs-react";

const SignUp = () => {
  const data = {
    name: "",
    email: "",
    password: "",
  };
  const Epsd = {
    password: "",
  };

  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  const [encyrpt, setEncrypt] = useState(Epsd);

  const navigate = useNavigate();

  const handleData = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    // Check email validation
    // if (name === "email") {
    //   validateEmail(value);
    // }
  };

  // const validateEmail = (email) => {
  //   // Regular expression for email validation
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!regex.test(email)) {
  //     toast.error("Invalid email format");
  //     return false;
  //   }
  //   return true;
  // };
  // const handleHashPassword = async () => {

  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateEmail = (email) => {
      // Regular expression for email validation
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(email)) {
        toast.error("Invalid email format");
        return false;
      }
      return true;
    };

    // Check username length
    if (inputData.name.length < 3 || inputData.name.length > 14) {
      toast.error("Username must be between 3 and 14 characters");
      return;
    }

    // Check password length
    if (inputData.password.length < 3 || inputData.password.length > 6) {
      toast.error("Password must be between 3 and 6 characters");
      return;
    }

    // Check if any field is empty
    if (!inputData.name || !inputData.email || !inputData.password) {
      toast.error("All fields are mandatory");
      return;
    }

    // Check if email already exists in local storage
    const values = JSON.parse(localStorage.getItem("values") || "[]");
    const existingUser = values.find((user) => user.email === inputData.email);
    if (existingUser) {
      toast.error("Email already exists");
      return;
    }

    //secure password
    // handleHashPassword();
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(inputData.password, salt);
    console.log(hash);

    // Add user to local storage
    values.push({
      name: inputData.name,
      password: hash,
      email: inputData.email,
    });

    localStorage.setItem("values", JSON.stringify(values));

    // Navigate to login page
    toast.success("Registration successful!");
    setTimeout(() => {
      navigate("/Login");
    }, 2000);
  };

  return (
    <>
      <pre>
        {flag ? (
          <h2 className="ui-defined" style={{ color: "black" }}>
            Hello {inputData.name}, you have registered successfully
          </h2>
        ) : (
          ""
        )}
      </pre>
      <form
        onSubmit={handleSubmit}
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "100px",
          backgroundColor: "#012",
          height: "auto",
          width: "250px",
          borderRadius: "8px",
        }}
      >
        <div className="box">
          <h2 style={{ color: "white", fontFamily: "roboto mono" }}>
            Registration
          </h2>
        </div>
        <input
          style={{ width: "190px" }}
          type="text"
          placeholder="UserName"
          name="name"
          value={inputData.name}
          onChange={handleData}
        />
        <br />
        <div>
          <input
            type="email"
            placeholder="@Email"
            name="email"
            value={inputData.email}
            onChange={handleData}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="PassWord"
            name="password"
            value={inputData.password}
            onChange={handleData}
          />
          <br />
          <br />
          <a href="/Login" className="active">
            <i>Already Signed up? Click to login</i>
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

export default SignUp;
