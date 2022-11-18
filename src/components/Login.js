import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./signin.css";

function Login() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",

    password: "",
  });

  const [type, setType] = useState("volunteer");
  const [login, setLogin] = useState("");
  const [token, setToken] = useState("");
  const [loginorg, setLoginorg] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    console.log(type, state);
    axios
      .post(
        "https://bon-appetit-server.alapanoski.repl.co/api/auth/" +
          type +
          "/login",
        state
      )
      .then((res) => {
        if (res.data.message) {
          setToken(res.data.token);
          console.log(res.data.token);
          window.localStorage.setItem("token", res.data.token);
          window.localStorage.setItem("auth", "true");
          window.localStorage.setItem("name", res.data.user.name);

          navigate("/home");
          setLogin(res.data.message);
          window.location.reload();
        }

        console.log(res);
        // handle success
      })
      .catch((err) => {
        setLogin("Invalid Credentials");
        console.log(err);

        // handle error
      });
  };

  const handleType = (e) => {
    setType(e.target.value);
  };
  //create a drop down with 2 options

  return (
    <div className="signupcontainer">
      <div className="signupcard">
        <form className="signupform" onSubmit={handleSubmit1}>
          <h5 className="signupheading">Login </h5>
          <div className="asdf">
            <input
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              value={state.username}
              onChange={handleChange}
              className=""
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              className=""
              required
            />
          </div>

          <button type="submit" className="">
            Login
          </button>
          <div className="alreadyaccou">
            New here?{" "}
            <Link to="/" className="">
              Signup
            </Link>
          </div>
          <div>
            <h1>{login}</h1>
          </div>
        </form>
      </div>

      <div>
        <h1>{loginorg}</h1>
      </div>
    </div>
  );
}

export default Login;
