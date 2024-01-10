import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../images/logo.jpg";
import Styles from "../Styles/Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <br />
      <div className="container col-lg-9  col-sm-12">
        <div className="row my-2">
          <div className="col-lg-4 col-sm-4 me-5">
            <img
              src={logo}
              alt="logo"
              style={{ borderRadius: "5px", width: "120px", margin: "auto" }}
            />
            <p className={`${Styles.fbtngrop} text-secondary my-4 w-100`}>
              The outstanding customer service I received deserves special
              mention. From my initial inquiry to the delivery of my order, your
              team has been responsive, helpful, and a pleasure to work with.
              It's clear that customer satisfaction is a top priority for your
              company.
            </p>
          </div>
          <div className="col-lg-2 col-sm-2">
            <ul className="list-unstyled list-group">
              <li className={`${Styles.fheadings} fw-bold my-2`}>
                
                Useful Stuff
              </li>
              <li className={`${Styles.fbtngrop} my-2 text-secondary`}>Home</li>
              <Link to='/'>
              <li className={`${Styles.fbtngrop} my-2 text-secondary`}>
              
                Products
              </li></Link>
              <li className={`${Styles.fbtngrop} my-2 text-secondary`}>
                Contact
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-2">
            <ul className="list-unstyled list-group">
              <li className={`${Styles.fheadings} fw-bold my-2`}>
                Specialities
              </li>
              <li className={`${Styles.fbtngrop} my-2 text-secondary`}>
                Affordable Luxury
              </li>
              <li className={`${Styles.fbtngrop} my-2 text-secondary`}>
                Chic Minimalism
              </li>
              <li className={`${Styles.fbtngrop} my-2 text-secondary`}>
                Rustic Charm
              </li>
              <li className={`${Styles.fbtngrop} my-2 text-secondary`}>
                Glamorous Living
              </li>
            </ul>
          </div>

          <div className={`${Styles.frepn} col-lg-3 col-sm-2`}>
            <ul className="list-unstyled list-group mx-5">
              <li className={`${Styles.fheadings} fw-bold my-2 d-flex`}>
                Apply for coupon
              </li>
              <li className={`${Styles.fbtngrop} my-2 text-secondary`}>
                <div class="input-group mb-3" style={{ width: "230px" }}>
                  <input
                    type="text"
                    className={`${Styles.formcontrol} form-control w-75 rounded-start-5 bg-black px-3`}
                    placeholder="Enter Your Email"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn btn-outline-secondary w-25 bg-primary text-white rounded-end-5"
                    type="button"
                    id="button-addon2"
                  >
                    Send
                  </button>
                </div>
              </li>
              <li className={`${Styles.fbtngrop} my-2 mt-2 fw-bold d-flex`}>
                Follow us on:
              </li>
              <li className={`${Styles.fbtngrop} my-2 text-secondary`}>
                <div className="d-flex">
                  <div className="m-1 mx-2">
                    <i
                      class="fa fa-instagram text-primary fa-2x mx-2"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="m-1 mx-2">
                    <i
                      class="fa fa-linkedin text-primary fa-2x mx-2"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="m-1 mx-2">
                    <i
                      class="fa fa-twitter text-primary fa-2x mx-2"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="m-1 mx-2">
                    <i
                      class="fa fa-facebook text-primary fa-2x mx-2"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* new */}
      <div className={`${Styles.footerback} mt-5`}>
        <div className="container py-1">
          <div className={`${Styles.fblack} row mx-5`}>
            <div className="col-lg-6 col-sm-6">
              <span className="text-white" style={{ fontSize: "13px" }}>
                &#169; 2021 Real Ig Growth. All Rights Reserved.
              </span>
            </div>
            <div className={`${Styles.lastrep} col-lg-6 col-sm-6 row`}>
              <div className="col-lg-4 col-sm-4">
                <span className={`${Styles.decffntsize} text-white float-end`}>
                  Refund Policy
                </span>
              </div>
              <div className="col-lg-4 col-sm-4">
                <span className={`${Styles.decffntsize} text-white float-end`}>
                  Privacy Policy
                </span>
              </div>
              <div className="col-lg-4 col-sm-4">
                <span className={`${Styles.decffntsize} text-white float-end`}>
                  Terms Of Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
