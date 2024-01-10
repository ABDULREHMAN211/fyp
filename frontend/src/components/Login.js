import React, { useEffect, useState } from "react";
import logo from "../images/logo.jpg";
import Bar from "./Bar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [dataadded, setdatadded] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    toast("Wow so easy!");
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          setdatadded(true);
        }
      })
      .catch((err) => console.log(err));
  };

  // Add product data

  const [Pname, setPname] = useState();
  const [Pprice, setPprice] = useState();
  const [file, setFile] = useState();
  const handledata = (e) => {
    const formData = new FormData();
    formData.append("Name", Pname);
    formData.append("Price", Pprice);
    formData.append("file", file);
    axios
      .post("http://localhost:3001/upload", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const [Products, setProducts] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3001/getImage")
      .then((getdata) => setProducts(getdata?.data))

      .catch((err) => console.log(err));
  }, []);
  console.log(Products);
  return (
    <div>
      <Bar />

      {dataadded ? (
        <div>
          <div className="col-3 m-auto pt-3">
           <h3>Welcome Admin!</h3>
           <h3>Please Add Product</h3>
            </div>
          <div className="d-flex justify-content-center ">

            <div className="col-md-6 col-sm-6">
              <div className="p-2 mt-5">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product Name"
                    value={Pname}
                    onChange={(e) => setPname(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product Price"
                    value={Pprice}
                    onChange={(e) => setPprice(e.target.value)}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Product Image"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-block mb-4 text-white btn-danger"
                    onClick={handledata}
                  >
                    Add Product
                  </button>
                </div>
                
              </div>
            </div>
          </div>
          {Products?.map((e) => (
            <div className="d-none">
              jfkd
              <img src={`http://localhost:3001/Images/${e.image}`} />
              <h3>{e.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div className="row">
          
          <div className="d-flex justify-content-center pt-4">
            <div className="col-md-6 col-sm-6">
              <form className="p-2" onSubmit={handlesubmit}>
                <div className="d-flex justify-content-center pt-4 pb-4">
                  <img src={logo} style={{width:'80px'}} />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
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
                    className="btn btn-block mb-4 text-white btn-danger"
                  >
                    Sign in
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      )}
      <hr/>
      <Footer />
    </div>
  );
}
