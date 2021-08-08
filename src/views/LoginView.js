import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import "./Views.css";
import { Button } from "@material-ui/core";

function LoginView() {
  const dispatch = useDispatch();

  const initialState = {
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

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(authOperations.logIn(state));
      setState({ name: "", email: "", password: "" });
    },
    [dispatch, state]
  );

  const { email, password } = state;

  return (
    <div className="Container">
      <div className="LoginSection">
        <h1 className="Title">Login</h1>
        <form onSubmit={handleSubmit} className="form" autoComplete="off">
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
            LOG IN
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoginView;
