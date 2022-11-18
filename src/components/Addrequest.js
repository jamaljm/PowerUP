import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./addrequest.css";
import { Add, Close } from "@material-ui/icons";
import {AiFillCaretDown, AiFillCloseCircle, AiOutlineClose} from 'react-icons/ai'

const Addrequest = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("true");

  const token = window.localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [login, setLogin] = useState("");
  const [state, setState] = useState({
    title: "",
    desc: "",
    numberOfServing: "",
    isNonVeg: "true",
    expiry: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [isActive, setIsActive] = useState(false);
  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://bon-appetit-server.alapanoski.repl.co/api/post",
        state,
        config
      )
      .then((res) => {
        if (res.data.message) {
          console.log(res.data.message);

          setLogin(res.data.message);
        }

        console.log(res);
        navigate("/home");
        // handle success
      })
      .catch((err) => {
        console.log(err);

        // handle error
      });
  };

  return (
    <div className="container-input">
      <div className="inner-container" onClick={() => setIsActive(!isActive)}>
        <h1>Add Request</h1>
        {isActive ? (
          <AiOutlineClose size={40} />
        ) : (
          <AiFillCaretDown size={40} />
        )}
      </div>

      {isActive && (
        <div>
          <form className="accordion-content" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={state.title}
              onChange={handleChange}
              placeholder="Enter title"
              required
            />
            <input
              type="text"
              value={state.desc}
              onChange={handleChange}
              name="desc"
              placeholder="Enter your email"
              required
            />
            <input
              type="text"
              name="numberOfServing"
              placeholder="Enter Quantity"
              value={state.numberOfServing}
              onChange={handleChange}
              required
            />
            <label for="dog-names">Veg or Non-Veg</label>
            <select
              name="isNonVeg"
              id="dog-names"
              onChange={handleChange}
              value={state.isNonVeg}
            >
              <option name="isNonVeg" value="true">
                Non-Veg
              </option>
              <option name="isNonVeg" value="false">
                Veg
              </option>
            </select>

            <input
              type="date"
              name="expiry"
              value={state.expiry}
              onChange={handleChange}
              placeholder="Enter expiry"
              required
            />
            <input
              type="text"
              value={state.city}
              onChange={handleChange}
              name="city"
              placeholder="Enter your city"
              required
            />
            <input
              type="text"
              value={state.state}
              onChange={handleChange}
              name="state"
              placeholder="Enter your state"
              required
            />
            <input
              type="text"
              name="contactInfo"
              placeholder="Enter your Phone Number"
              value={state.contactInfo}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
            {login}
          </form>
        </div>
      )}
    </div>
  );
};

export default Addrequest;
