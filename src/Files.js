import React, { useEffect, useState } from "react";
import axios from "axios";

const Task = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lName, setLName] = useState("");

  const hendaleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const hendalePassWord = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  // ,email, passWord
  const hendaleApi = (e) => {
    e.preventDefault();
    console.log("email password : ", email, password);
    axios
      .post("https://dummyjson.com/auth/login", { username: email, password })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setEmail("");
    setPassword("");
  };

  const fetchUser = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcxMjE2NzAxMCwiZXhwIjoxNzEyMTcwNjEwfQ.DWO0i0w02vwwlvWVTRt15a-gK8A9NUbOUEl27is20qk";
      const getData = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      });
      console.log("getData : ", getData.data);
      setName(getData.data.firstName);
      setLName(getData.data.lastName);
      return getData;
    } catch (error) {
      console.log("error : ", error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <form>
        <h1>Login Form</h1>
        <label>Email:</label>{" "}
        <input
          placeholder="email"
          value={email}
          onChange={hendaleEmail}
        ></input>
        <br />
        <label>PassWord:</label>{" "}
        <input
          placeholder="password"
          value={password}
          onChange={hendalePassWord}
        ></input>
        <br />
        <button onClick={hendaleApi}>Submit</button>
      </form>
      <br />
    </div>
  );
};

export default Task;
