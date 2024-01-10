import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ProductAdd() {
  const [Pname, setPname] = useState();
  const [Pprice, setPprice] = useState();
  const [file, setFile] = useState();
  const handlesubmit = (e) => {
    const formData = new FormData();
    formData.append("Name", Pname);
    formData.append("Price", Pprice);
    formData.append("file", file);
    axios
      .post("http://localhost:3001/upload", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  
  const [Products, setProducts] = useState()
  useEffect(() => {
    axios
    .get("http://localhost:3001/getImage")
    .then((getdata) => setProducts(getdata?.data))
    .catch((err) => console.log(err));
  }, []);
  console.log(Products)
  return (
    <div>
      <div className="d-flex justify-content-center pt-4">
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
                onClick={handlesubmit}
              >
                Sign in
              </button>
            </div>
            <div className="text-center">
              <p>
                Register? <a href="/Register">Register</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {Products?.map((e)=>(
        <div>jfkd<img src={`http://localhost:3001/Images/${e.image}`}/><h3>{e.name}</h3></div>
      ))}
      
    </div>
  );
}
