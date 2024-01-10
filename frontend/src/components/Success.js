import React from "react";
import Styles from '../Styles/Success.module.css'
import Bar from "./Bar";
import { Link } from "react-router-dom";
import ordersuccess from '../images/ordersuccess.png'
import succesec from '../images/succesec.png'
import orderlast from '../images/orderlast.png'
export default function OrderSuccess() {
  return (
    <div className={Styles.overflowremove}>
      <Bar />
      <div className={` py-4 ${Styles.Orderscsback}`} style={{backgroundImage:`url(${orderlast})`}}>
        <br />
        <div
          className={`${Styles.bckwhiteresp} m-auto bg-white shadow rounded-3 m-auto row gap-1`}
        >
          <div className="col-lg-6 col-sm-6 my-5 ms-4">
          <img src={ordersuccess} alt="" />
          </div>
          <div className={`${Styles.allrespo} col-lg-5 col-sm-6 my-5`}>
            <div className={`${Styles.sechead} d-flex mt-4`}>
              <h4 className={`${Styles.firsthead} mt-4 fw-bold`}>
                Congratulations
              </h4>
              <img src={succesec} alt=""/>
            </div>
            <h6 className={`${Styles.sechead} fw-bold mt-1`}>
              Your order is confirmed
            </h6>

            <p className={`${Styles.thhead} w-75 mt-4 mb-5`}>
              You will be receiving a confirmation email with your order
              details.
            </p>
            <br />
            <Link
             to="/"
              className={`${Styles.lstbtn} btn bg-primary rounded-pill text-white mt-4 pt-2`}
            >
              Explore More Products
            </Link>
          </div>
        </div>

        <br />
      </div>
      <br />
    </div>
  );
}