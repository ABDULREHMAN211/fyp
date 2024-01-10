import React, { useEffect, useState } from "react";
import ARScene from "./ARScene";
import p2 from "../images/p2.png";
import p1 from "../images/p1.png";
import p3 from "../images/p3.png";

import p4 from "../images/p4.png";
import p5 from "../images/p5.png";
import p6 from "../images/p6.png";
import p7 from "../images/p7.png";
import Styles from "./Home.module.css";
import p8 from "../images/p8.png";
import p9 from "../images/p9.png";
import p10 from "../images/p10.png";
import p11 from "../images/p11.png";
import p12 from "../images/p12.png";
import Bar from "./Bar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Products() {
  const [Products, setProducts] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3001/getImage")
      .then((getdata) => setProducts(getdata?.data))

      .catch((err) => console.log(err));
  }, []);
  console.log(Products);
  
  const navi = useNavigate();
  const handlesingle = (e) => {
    navi("/SingleProduct", { state: { datapass: e } });
  };
  return (
    <div>
      <Bar />
      <div className="product" id="product">
        <div className="main-txt">
          <h3>Products</h3>
        </div>
        <div className="card-content">
          {Products?.slice(1)?.map((e) => (
            <div className="row">
              <img
                src={`http://localhost:3001/Images/${e.image}`}
                alt="Picture of the author"
                className={Styles.rotating}
                style={{
                  width: "230px",
                  height: "210px",
                  marginTop: "10px",
                  marginLeft: "3px",
                }}
              />
              <div>
                <ARScene />
              </div>
              <div className="card-body">
                <h3>{e.name}</h3>
                <p>
                  By leveraging AR technology, the platform offers a unique and
                  valuable service
                </p>
                <h5>{e.price}</h5>
                <button
                  className="rounded-pill"
                  onClick={() => handlesingle(e)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
}
