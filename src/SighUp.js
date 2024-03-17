import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SighUp = () => {
  const data = {
    name: "",
    email: "",
    password: "",
  };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(inputData);
  }, [flag]);
  const handledata = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    console.log(inputData);
    // console.log(inputData.data.name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All filed are Mandatory");
    } else {
      setFlag(true);
      setTimeout(() => {
        navigate("/Login");
      }, 2000);

      // const values = localStorage.getItem("values");
      // console.log(values);
      const values = JSON.parse(localStorage.getItem("values") || "[]");
      const raju = {
        Name: inputData.name,
        password: inputData.password,
        email: inputData.email,
      };
      values.push(raju);

      localStorage.setItem("values", JSON.stringify(values));
    }
  };
  return (
    <>
      <pre>
        {flag ? (
          <h2 className="ui-defined" style={{ color: "yellow" }}>
            Hello{inputData.name},you have Registered successfully
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

          // justifyContent: "center",
          // justifyItems: "center",
          flexDirection: "column",
          marginTop: "210px",
          backgroundColor: "#012",
          height: "auto",
          width: "250px",
          borderRadius: "8px  ",
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
          onChange={handledata}
        />
        <br />

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
          <a href="/Login" class="active">
            <i> alredy Sighup click to login</i>
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

export default SighUp;
