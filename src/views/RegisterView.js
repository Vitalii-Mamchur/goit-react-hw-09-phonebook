import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import "./Views.css";
import { Button } from "@material-ui/core";

function RegisterView() {
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [state, setState] = useState(initialState);

  const handleChange = useCallback((e) => {
    const { name, value } = e.currentTarget;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register(state));
    setState({ name: "", email: "", password: "" });
  };

  const { name, email, password } = state;

  return (
    <div className="Container">
      <div className="RegisterSection">
        <h1 className="Title">Create account</h1>
        <form onSubmit={handleSubmit} className="form" autoComplete="off">
          <label className="label">
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </label>
          <label className="label">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </label>
          <label className="label">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </label>
          <Button type="submit" variant="contained" color="primary">
            SIGN UP
          </Button>
        </form>
      </div>
    </div>
  );
}

export default RegisterView;
