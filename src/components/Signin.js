import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./signin.css";

function SignupPage() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
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
          "/signup",
        state
      )
      .then((res) => {
        if (res.data.message) {
          setToken(res.data.token);
          console.log(res.data.token);
          window.localStorage.setItem("token", res.data.token);
          window.localStorage.setItem("auth", "true");
          window.localStorage.setItem("name", state.name);

          navigate("/home");
          setLogin(res.data.message);
          window.location.reload();
        }

        console.log(res);
        // handle success
      })
      .catch((err) => {
        console.log(err);
        setLogin("User already Exists", err.message);

        // handle error
      });
  };

  const handleType = (e) => {
    setType(e.target.value);
  };
  //create a drop down with 2 options

  return (
    <div className="signupcontainer">
      <div className="Aboutcard">
          <video autoPlay loop muted className="videobg">
            <source src="https://cdn.dribbble.com/userupload/2802099/file/original-a1aac6f8d058c10693402742f905b09e.mp4" type='video/mp4' />
        </video>
      </div>
      <div className="signupcard">
        <form className="signupform" onSubmit={handleSubmit1}>
          <div className="featuredItem2-top-top1 ">
            <img src="https://i.imgur.com/28Hhzdx.png"></img>
            <p color="#000"><span color="#000">PowerUP</span></p>
          </div>
          <br></br>
          <h5 className="signupheading">Sign up </h5>
          <div className="asdf">
            <label className=""></label>
            <input
              type="name"
              name="name"
              placeholder="John Doe"
              value={state.name}
              onChange={handleChange}
              className=""
              required
            />
            <input
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              value={state.username}
              onChange={handleChange}
              className=""
              required
            />
           

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              className=""
              required
            />

            <button type="submit" className="">
              Signup
            </button>
            <div className="alreadyaccou">
              Already have account?{" "}
              <Link to="/login" className="">
                Login
              </Link>
            </div>

            <p className="text-black">{login}</p>
          </div>
        </form>
      </div>

      <div>
        <p>{loginorg}</p>
      </div>
    </div>
  );
}

export default SignupPage;
