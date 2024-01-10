import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import Styles from "../Styles/Singleproduct.module.css";
import Footer from "./Footer";

import slideon from "../images/slideon.png";
import slidetw from "../images/slidetw.png";
import slideth from "../images/slideth.png";
import slidefo from "../images/slidefo.png";
import rectangless from "../images/rectangless.PNG";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51JBe6yJVCq2psGq9GPhzJpyVett3Qc8nDqESNSsX8sbINZgWSnZ4XTvc40TlvL8g2Spi4gF6R2ABaGrzNpRLrE0u00Kvq2rfJL"
);

export default function SingleProduct() {
  
  const loction = useLocation();
  const abc = loction?.state?.datapass;

  console.log(abc);
  // Handle Checkout
  const router = useNavigate();
  const handleClick = async () => {
    const stripe = await stripePromise;

    // Call your server to create a Checkout Session
    const response = await fetch(
      "http://localhost:3001/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(abc),
      }
    );

    const session = await response.json();

    // Redirect to Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };
 
  return (
    <div>
      <div className={`${Styles.Blognavback} shadow`}>
        <Bar />
      </div>
      {/* <img src={p1} alt="" /> */}
      <div className="mx-4">
        <div className={`${Styles.Blogback} col-lg-10 col-sm-12 m-auto`}>
          <div className="col-lg-9 col-sm-12 m-auto">
            {abc?.image && (
              <div className="d-flex">
                <div className="w-100">
                  <img
                    src={`http://localhost:3001/Images/${abc.image}`}
                    alt=""
                    style={{
                      width: "500px",
                      height: "400px",
                      marginLeft: "180px",
                    }}
                  />
                </div>
              </div>
            )}
            <div className="mx-2 ms-3">
              <p className={`${Styles.sblgf} mt-3 m-0`}>{abc?.name}</p>

              <div className={`d-flex justify-content-between mt-2`}>
                {/* <h3 className="">{abc.product}</h3> */}
                <h3 className="">{abc?.price} Rs</h3>
              </div>
              <div className="mt-4 gap-1">
                <div className="pb-3">
                  <h3 className={`${Styles.singleblgh} fw-bold m-0`}>
                    Why do we use it?
                  </h3>
                  <p className={Styles.singlepara}>
                    Welcome to a world of sophistication and comfort. It is
                    designed to transform your living space into a haven of
                    style and relaxation. Welcome to a world of sophistication
                    and comfort. It is designed to transform your living space
                    into a haven of style and relaxation.
                  </p>
                </div>
                <div className="pb-3">
                  <h3 className={`${Styles.singleblgh} fw-bold m-0`}>
                    Style and design
                  </h3>
                  <p className={Styles.singlepara}>
                    it boasts a modern silhouette with clean lines, available in
                    a range of chic colors to seamlessly integrate into your
                    contemporary or classic décor. it boasts a modern silhouette
                    with clean lines, available in a range of chic colors to
                    seamlessly integrate into your contemporary or classic
                    décor.
                  </p>
                </div>
                <div className="">
                  <div className="mx-auto text-center py-4">
                    <button
                      className="btn btn-primary rounded-pill px-4 my-auto "
                      onClick={handleClick}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-start bg-white">
        <div
          class="divider"
          style={{
            background: "linear-gradient(to right,#597CAE, #F48FC4)",
            margin: "0px",
            padding: "3px",
          }}
        ></div>
        <Footer />
      </div>
    </div>
  );
}
