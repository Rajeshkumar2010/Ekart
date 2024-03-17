import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";

const Login = () => {
  const data = { email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [localData] = useState([]);
  // const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const Data = localStorage.getItem("myValue");
  //   const value1 = JSON.parse(Data);
  //   setlocalData(value1);

  //   // console.log(inputData);
  //   // console.log(value);
  // }, []);
  // console.log(inputData.Email);
  // console.log(localData.Email);
  const handledata = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    console.log(inputData);

    // console.log(inputData.data.name);
  };

  function check() {
    // return inputData.map((r) => {
    // });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const SighUpUser = localStorage.getItem("values");
    // setlocalData(SighUpUser);
    const parsValue = JSON.parse(SighUpUser);
    console.log("inputData", inputData);
    console.log("parsValue", parsValue);
    if (
      inputData.email === parsValue.email &&
      inputData.password === parsValue.password
    ) {
      console.log(" Matched");
      alert("Login Successfuly");
      // setFlag(true);
      setTimeout(() => {
        navigate("/Product");
      }, 2000);
    } else {
      console.log(SighUpUser);
      console.log(parsValue.email);
      console.log("not-matched");
      alert("Data-Not Matched");
      setInputData(data);
    }
  };
  return (
    <>
      {/* <pre>     
        {flag ? (
          <h2 className="ui-defined" style={{ color: "yellow" }}>
            Hello{inputData.name},you have Registered successfully
          </h2>
        ) : (
          ""
        )}
      </pre> */}
      <form
        onSubmit={handleSubmit}
        className="container"
        style={{
          display: "flex",

          // justifyContent: "center",
          // justifyItems: "center",
          flexDirection: "column",
          marginTop: "210px",
          backgroundColor: "#012",
          height: "auto",
          width: "250px",
          padding: "10px",
          borderRadius: "8px ",
        }}
      >
        <div className="header">
          <h2
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "roboto mono  ",
            }}
          >
            LogIn
          </h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="@Email"
            name="email"
            value={inputData.email}
            onChange={handledata}
          />
          <br />
          <br />

          <input
            type="passWord"
            placeholder="PassWord"
            name="password"
            value={inputData.password}
            onChange={handledata}
          />
          <br />
          <br />
          <a href="/" class="active">
            <i>
              {" "}
              <u>Click to Sighup</u>
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
    </>
  );
};

export default Login;
