import React, { useState } from "react";
import flogo from "../images/flogo.png";
import Bar from "./Bar";
import axios from "axios";
import Footer from "./Footer";
import {useNavigate} from 'react-router-dom'

export default function Register() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {console.log(result)
      navigate('/Login')})
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Bar />
      <div className="row">
        <div className="d-flex justify-content-center pt-4">
          <div className="col-md-6 col-sm-6">
            <form className="p-2" onSubmit={handleSubmit}>
              <div className="d-flex justify-content-center pt-4 pb-4">
                <img src={flogo} alt="logo" width="180" />
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>

              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-block mb-3 text-white btn-danger"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
