import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [logindata, setLogindata] = useState({ username: "", pass: "" });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogindata({ ...logindata, [name]: value });
  };
  const onHandleSubmit = () => {
    console.log(logindata);
  };
  return (
    <div className="main__login">
      <form className="login__form">
        <TextField
          className="input_field"
          name="username"
          id="outlined-basic"
          label="username"
          variant="outlined"
          onChange={onChangeHandler}
        />
        <TextField
          className="input_field"
          name="pass"
          id="outlined-basic_1"
          label="password"
          variant="outlined"
          type="password"
          onChange={onChangeHandler}
        />
        <Button variant="contained" onClick={onHandleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
