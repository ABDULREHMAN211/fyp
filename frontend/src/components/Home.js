import Styles from "./Home.module.css";
import React, { useEffect, useRef, useState } from "react";
import MaximizeIcon from "@mui/icons-material/Maximize";
import Carousel from "react-multi-carousel";
import Bar from "./Bar";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ellipsepers from "../images/ellipsepers.png";

import aboutimg from "../images/aboutimg.png";
import himage from "../images/himage.png";
import rectangle from "../images/rectangle.png";
import tickico from "../images/tickico.png";
import groupfist from "../images/groupfist.png";
import shinimg from "../images/shinimg.png";
import axios from "axios";
import rarrow from "../images/rarrow.png";
import newimgleft from "../images/newimgleft.png";
import ibraheem from "../images/ibraheem.jpg";
import qutab from "../images/qutab.jpg";
import groupfif from "../images/groupfif.png";
import rightsvg from "../images/rightsvg.svg";
import circleicon from "../images/circleicon.png";
import slash from "../images/slash.png";
import "slick-carousel/slick/slick-theme.css";

import { Link, useNavigate } from "react-router-dom";

import Footer from "./Footer";
import ProductView from "./ProductView";
// import { Canvas, useFrame } from 'react-three-fiber';
// import { TextureLoader } from 'three'
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

// const Image3DView = ({ imageUrl }) => {
//   const imageRef = useRef();

//   // Rotate the image in the animation loop
//   useFrame(() => {
//     if (imageRef.current) {
//       imageRef.current.rotation.x += 0.005;
//       imageRef.current.rotation.y += 0.005;
//     }
//   });

//   return (
//     <mesh ref={imageRef}>
//       <planeBufferGeometry attach="geometry" args={[5, 5]} />
//       <meshBasicMaterial attach="material" map={new TextureLoader().load(imageUrl)} />
//     </mesh>
//   );
// };
function Home() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: false,
    arrows: true,
    centerPadding: "15px",
    slidesToShow: 3,
    arrows: true,
    speed: 500,
    arrows: true,
    // initialSlide: CurrentIndex,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const resplast = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomButtonGroup = ({ next, previous }) => {
    return (
      <>
        <button
          className=" carousel-control-prev rounded-pill rounded-start"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          style={{
            width: "60px",
            height: "40px",
            backgroundColor: "white",
            top: "calc(48% - 30px)",
            opacity: "1",
            marginLeft: "28px",
          }}
          onClick={() => previous()}
        >
          <span
            className="fa fa-arrow-left text-black"
            style={{ transform: "scale(1.6,1.1)" }}
          />
        </button>
        <button
          className={`${Styles.lastslidbtnresp} carousel-control-next rounded-pill rounded-end`}
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          type="button"
          onClick={() => next()}
        >
          <span
            className="fa fa-arrow-right text-black"
            aria-hidden="true"
            style={{ transform: "scale(1.6,1.1)" }}
          />
        </button>
      </>
    );
  };
  const resp = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomDot = ({ onMove, index, onClick, active }) => {
    return (
      <li onClick={() => onClick()} className=" text-muted fw-bold display-5">
        <MaximizeIcon />
      </li>
    );
  };
  const [product, setproduct] = useState();
  const [sale, setsale] = useState();
  const [feature, setfeature] = useState();
  const [testimon, settestimon] = useState();
  const [faq, setfaq] = useState();
  const [data, setdata] = useState();

  console.log(data);
  const handleMouseEnter = (i) => {
    console.log(i);
    setdata(feature?.data[i]);
  };
  useEffect(() => {
    axios.get(`http://localhost:3001/list`).then((dataa) => {
      setproduct(dataa);
    });
    axios.get(`http://localhost:3001/Bundle`).then((dataa) => {
      setsale(dataa);
    });
    axios.get(`http://localhost:3001/features`).then((dataa) => {
      setfeature(dataa);
    });
    axios.get(`http://localhost:3001/clinetres`).then((dataa) => {
      settestimon(dataa);
    });
    axios.get(`http://localhost:3001/faqs`).then((dataa) => {
      setfaq(dataa);
    });
    setdata(feature?.data[0]);
  }, [data]);
  // const [avail, setavail] = useState();
  // const [CurrentIndex, setCurrentIndex] = useState(0);
  // const handlename = (v, i) => {
  //   const data = plans?.find((e) => {
  //     return v === e.name;
  //   });
  //   setavail(data);
  //   setCurrentIndex(i);
  // };
  // const sliderRef = useRef(null);
  // const goToSlide = (slideIndex) => {
  //   // Check if the slider ref exists and the slideIndex is valid
  //   if (sliderRef.current && slideIndex >= 0) {
  //     sliderRef.current.slickGoTo(slideIndex);
  //   }
  // }
  const imageUrl =
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const navi = useNavigate();
  const handlesingle = (e) => {
    navi("/SingleProduct", { state: { datapass: e } });
  };

  const [avail, setavail] = useState();
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const handlename = (v, i) => {
    const data = product?.data?.find((e) => {
      return v === e.name;
    });
    setavail(data);
    setCurrentIndex(i);
  };
  const sliderRef = useRef(null);
  const goToSlide = (slideIndex) => {
    // Check if the slider ref exists and the slideIndex is valid
    if (sliderRef.current && slideIndex >= 0) {
      sliderRef.current.slickGoTo(slideIndex);
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Bar />
      {/* <ProductView/> */}
      {/* <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Image3DView imageUrl={imageUrl} />
      </Canvas> */}
      {/* <canvas class='canvas' data-modeluid='jkjfd' data-action='create-hotspot' aria-label="3D view of Coffee Cup" width='835' height='467' tabIndex='0' ><img src={tickico} alt="Picture of the author"/></canvas> */}

      <div
        className={`${Styles.firstspace} container col-lg-5 col-sm-12 m-auto`}
      >
        <p
          className={`${Styles.firstags}  rounded text-white fw-bold col-3 m-auto text-center my-2 mt-3`}
        >
          {/* {d.tag.charAt(0).toUpperCase() + d.tag.slice(1)} */}
          Providing
        </p>

        <p className={`${Styles.teeFont} fw-bold m-0 col-11 m-auto`}>
          <strong>
            {/* {d.short_description.toUpperCase()} */}
            PREMIUM & IN-DEMAND
          </strong>
        </p>
        <h2 className={`${Styles.teiseFontt} col-9 m-auto`}>
          {/* {d.long_description.slice(0, 26).replace(/\"/g, "")} */}
          High Quality Furniture.
        </h2>
        <p className={`${Styles.boost} my-3 text-secondary col-9 m-auto`}>
          {/* {d.long_description.slice(30, 71).replace(/\"/g, "")} */}
          Boost-up your life with high quality AR furniture
        </p>

        <div className={`${Styles.btngrop} d-flex col-9 m-auto`}>
          <button
            className={`${Styles.firstbuttons} ${Styles.newbtndesign} btn m-1 text-white shadow  text-center p-0`}
          >
            Tremendous
          </button>
          <button
            className={`${Styles.firstbuttons} ${Styles.newbtnsec} btn m-1 border-2 fw-bold text-center p-0 m-0`}
          >
            Collections
          </button>
        </div>
      </div>

      {/* Plans Started */}
      <div>
        <div className="my-3 container-fluid">
          <img
            src={himage}
            alt="Picture of the author"
            className="d-lg-block d-none"
          />
        </div>
        <div className="my-5 text-center ">
          <h4 className={`${Styles.subsc} fw-bold`}>
            <span style={{ color: "#ee561d" }}>Multiple</span> Items Package
          </h4>
          <div className="my-2">
            <h6 className={`${Styles.subsb} fw-bold mb-4`}>
              {/* {e.description.charAt(0).toUpperCase() + e.description.slice(1)} */}
              That fit's for you
            </h6>
            <p
              className={`${Styles.sublbs} col-lg-5 col-sm-5  m-auto`}
              style={{ color: "#737373" }}
            >
              {/* {e.long_description.replace(
                /<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo; |\\r\\n|&laquo;|"|&gt;/g,
                " "
              )} */}
              Transform your space into a sanctuary of style with our curated
              collection of exquisite furniture pieces.
            </p>
          </div>
          <div className="container col-lg-9 col-sm-12">
            <ul
              className={`${Styles.hlist} list-unstyled m-auto d-flex  justify-content-around py-4 my-5 col-lg-8 col-sm-8 px-3`}
            >
              {/* {plans.map((e, index) => ( */}
              {product?.data?.map((e, index) => (
                <li
                  type="button"
                  className={`${
                    index === CurrentIndex
                      ? Styles.grplistimg
                      : Styles.grplistimgho
                  } ${
                    index === 0
                      ? "py-1 fw-bold position-relative"
                      : index === 3
                      ? "py-1 fw-bold position-relative"
                      : index === 4
                      ? "py-1 fw-bold position-relative"
                      : "py-1 position-relative"
                  }`}
                  onClick={() => {
                    handlename(e.name, index);
                    goToSlide(index);
                  }}
                  // key={index}
                  // className={`${
                  //   index === CurrentIndex
                  //     ? Styles.grplistimg
                  //     : Styles.grplistimgho
                  // } ${
                  //   index === 0
                  //     ? "py-1 fw-bold position-relative"
                  //     : index === 3
                  //     ? "py-1 fw-bold position-relative"
                  //     : index === 4
                  //     ? "py-1 fw-bold position-relative"
                  //     : "py-1 position-relative"
                  // }`}
                  // onClick={() => {
                  //   handlename(e.name, index);
                  //   goToSlide(index);
                  // }}
                >
                  {/* {e.tag ? (
                    <>
                      {e.name}
                      <p
                        className={`${Styles.hlisthead} position-absolute top-0 start-50 mx-2  px-2  text-center text-white rounded  rounded-1  translate-middle-y fw-bold`}
                      >
                        {e.tag}
                      </p>
                    </>
                  ) : (
                    e.name
                  )} */}
                  {e?.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Slider
            {...settings}
            ref={sliderRef}
            className={`${Styles.corousel}`}
          >
            {/* {plans.map((pl, index) => ( */}
            {/* // new changes
              // #ee1d52 */}
            {product?.data?.map((e, index) => (
              <div
                // key={index}
                className={Styles.slideitem}
              >
                <div
                  key={index}
                  className={`${
                    CurrentIndex == index
                      ? `${Styles.firstcrosel} shadow`
                      : Styles.corosel
                  } rounded mx-3 position-relative overflow-hidden my-5`}
                >
                  {/* {pl.tag && (
                    <div
                      style={{
                        width: "114px",
                        left: "332px",
                        lineHeight: "30px",
                        letterSpacing: "1px",
                        transform: "rotate(45deg)",
                        top: "6px",
                      }}
                      className={`${Styles.fcf} text-white position-absolute  end-0`}
                    >
                      {pl.tag}
                    </div>
                  )} */}
                  <br />
                  <h4 className="my-3 fw-bold">{e?.name}</h4>
                  <h5
                    className=" text-white fw-bold position-relative  border-end-0 border-start-0 border-primary py-3"
                    style={{ backgroundColor: "#ee1d52" }}
                  >
                    {e?.price}
                    <span
                      className="position-absolute top-0 start-50 mx-4 my-1 translate-middle-x"
                      style={{ fontSize: "14px" }}
                    >
                      &nbsp; Rs
                    </span>
                  </h5>
                  <div className="my-3 ">
                    <div className="text-start col-8  m-auto">
                      {/* {pl.description.split("\n").map((str) => { */}

                      <>
                        <p className={`${Styles.crouselitem} my-3`}>
                          <i
                            className="fa fa-heart text-white border rounded-pill"
                            aria-hidden="true"
                            style={{
                              padding: "10px",
                              background:
                                "transparent linear-gradient(327deg, #EE1D52 0%, #EE561D 100%) 0% 0% no-repeat padding-box ",
                            }}
                          />
                          &nbsp; &nbsp; {e?.first}
                        </p>
                        {/* // )
                        //   );
                        // } */}

                        {/* // if (str.includes("Comments")) {
                        //   return 
                          // ( */}
                        <span className={`${Styles.crouselitem} my-3`}>
                          <p>
                            <i
                              className="fa fa-comment text-white border rounded-pill"
                              aria-hidden="true"
                              style={{
                                padding: "10px",
                                background:
                                  "transparent linear-gradient(327deg, #EE1D52 0%, #EE561D 100%) 0% 0% no-repeat padding-box ",
                              }}
                            />
                            &nbsp; &nbsp; {e?.second}
                          </p>
                        </span>
                        {/* // );
                        // }

                        // if (str.includes("Comment Like")) {
                        //   return ( */}
                        <span className={`${Styles.crouselitem} my-3`}>
                          <p>
                            <i
                              className="fa fa-comment text-white border rounded-pill"
                              aria-hidden="true"
                              style={{
                                padding: "10px",
                                background:
                                  "transparent linear-gradient(327deg, #EE1D52 0%, #EE561D 100%) 0% 0% no-repeat padding-box ",
                              }}
                            />
                            &nbsp; &nbsp;{e?.third}
                          </p>
                        </span>
                        {/* //   );
                        // }

                        // if (str.includes("Start Time")) {
                        //   return ( */}
                        <p className={`${Styles.crouselitem} my-3`}>
                          <i
                            className="fa fa-clock-o text-white border rounded-pill"
                            style={{
                              padding: "10px",
                              paddingInline: "11px",
                              background:
                                "transparent linear-gradient(327deg, #EE1D52 0%, #EE561D 100%) 0% 0% no-repeat padding-box ",
                            }}
                          />
                          &nbsp; &nbsp;{e?.fourth}
                        </p>
                        {/* //   );
                        // } */}

                        {/* // if (str.includes("Delivery")) {
                        //   return ( */}
                        <p className={`${Styles.crouselitem} my-3`}>
                          <i
                            className="fa fa-calendar text-white  border rounded-pill"
                            style={{
                              padding: "10px",
                              paddingInline: "11px",
                              background:
                                "transparent linear-gradient(327deg, #EE1D52 0%, #EE561D 100%) 0% 0% no-repeat padding-box ",
                            }}
                          />
                          &nbsp; &nbsp; {e?.fifth}
                        </p>
                      </>
                      {/* //   );
                        // }
                      // })} */}
                    </div>
                    {/* {console.log("Plans data", plans)} */}
                    <hr className="w-50 m-auto" />

                    <button
                      onClick={() => handlesingle(e)}
                      className={`${Styles.planbtn} btn text-white my-4 px-4 rounded rounded-pill`}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* 
        Verified Package */}

      <div
        className={`${Styles.diamondresp} my-5 d-flex container col-lg-9 col-sm-12 justify-content-center`}
      >
        <hr className="col-4 border-2" />
        <img src={rectangle} alt="Picture of the author" className="mx-5" />
        <hr className="col-4 border-2" />
      </div>

      <div className="container col-lg-9 col-sm-12 mt-5">
        <div className="row">
          {/* {veripage.widgets.map((item, index) => { */}
          {/* // if (index === 0) {
            //   return ( */}
          <div className={`${Styles.onebytsec} col-lg-6 col-sm-6 mt-5`}>
            <div>
              <span
                className={`${Styles.fcf} fw-bold  rounded rounded-2 p-2 px-3 text-white`}
              >
                {/* {item.tag} */}
                One By Two
              </span>
              <br />
              <h4 className={`${Styles.fcs} my-2  mt-3 fw-bold`}>
                {/* {item.title} */}
                Introducing
              </h4>
              <h4
                className={`${Styles.fcs} my-2  fw-bold`}
                style={{ color: "#ee561d" }}
              >
                {/* {item.short_description.split(" ").slice(0, 4).join(" ")} */}
                High Quality & Affordable
              </h4>
              <h4 className={`${Styles.fcs} my-2  fw-bold`}>
                {/* {item.short_description.split(" ").slice(4).join(" ")} */}
                Furniture
              </h4>
            </div>

            <p className={`${Styles.fct} my-2 mx-1`}>
              {/* {item.long_description.replace(/(\\r\\n|\")/gm, "")} */}
              Curated and best collection of exquisite furniture pieces can be
              use in homes.
            </p>

            <div className={`${Styles.fct}  mt-5`}>
              <div
                className={`${Styles.listrespn} d-flex flex-wrap justify-content-between`}
              >
                {/* {item.description.split("\n").map((str, i) => ( */}
                <p className="mb-2  d-flex">
                  <img
                    className="m-1 me-2"
                    src={tickico}
                    alt="Picture of the author"
                    style={{ width: "15px", height: "15px" }}
                  />
                  Smart Living Solutions
                </p>
                <p className="mb-2 d-flex">
                  <img
                    className="m-1 me-2"
                    src={tickico}
                    alt="Picture of the author"
                    style={{ width: "15px", height: "15px" }}
                  />
                  Wholesome Wellness
                </p>
                <p className="mb-2 d-flex">
                  <img
                    className="m-1 me-2"
                    src={tickico}
                    alt="Picture of the author"
                    style={{ width: "15px", height: "15px" }}
                  />
                  Glamorous Living
                </p>
                <p className="mb-2 d-flex">
                  <img
                    className="m-1 me-2"
                    src={tickico}
                    alt="Picture of the author"
                    style={{ width: "15px", height: "15px" }}
                  />
                  Sustainable products
                </p>
                {/* // ))} */}
              </div>
            </div>
            <br />
            {/* <div className={`${Styles.btngrop} d-flex gap-2`}>
              <button
                className={`${Styles.followbtn} ${Styles.newbtndesign} btn bg-primary text-white m-1 border-2 fw-bold text-center p-0 m-0`}
              >
                Buy Verified followers
              </button>
              <button
                className={`${Styles.followbtn} ${Styles.newbtnsec}  btn m-1  fw-bold text-center p-0`}
              >
                Buy Female Followers
              </button>
            </div> */}
          </div>
          {/* //   );
            // }
            // if (index === 1) { */}
          {/* //   return ( */}
          <div className={`${Styles.colimgrespo} col-lg-6 col-sm-6`}>
            <img
              src={groupfist}
              alt="Picture of the author"
              className={`${Styles.imgrespo} ms-5`}
            />
          </div>
          {/* //   );
            // }

            // if (index === 2) {
            //   return ( */}
          <div className={`${Styles.gendersec} col-lg-6 col-sm-6 my-5 m-auto`}>
            <br />
            <br />
            <>
              <div className="">
                <span
                  className={`${Styles.fcf} fw-bold  rounded rounded-2 p-2 px-3 text-white`}
                  style={{
                    background: "linear-gradient(to right,#FF4600, #FF00B2)",
                  }}
                >
                  {/* {item.tag} */}
                  Levish Life
                </span>

                <h4 className={`${Styles.fcs} my-2  mt-3 fw-bold`}>
                  {/* {item.title.split(" ").slice(0, 2).join(" ")} */}
                  With
                </h4>
                <h4 className={`${Styles.fcs} fw-bold`}>
                  {/* {item.title.split(" ").slice(2).join(" ")} */}
                  Durable Products
                </h4>
              </div>

              <p className={`${Styles.sublbs} my-3 me-5`}>
                {/* {item.description} */}
                Where to Start When Designing Your Dream Kitchen and life long
                comfortness. Bespoke beauty with our custom creations that
                redefine the concept of personalized luxury.It an artistry in
                wood. From contemporary chic to the timeless allure of classic
                designs, our collection is a testament to the passion and
                dedication poured into every creation. Meticulously handmade
                with an eye for detail, our furniture is more than an addition
                to your home
              </p>
            </>
          </div>
          {/* //   );
            // }

            // if (index === 3) { */}
          {/* //   return ( */}
          {sale?.data?.map((e) => (
            <div className={`${Styles.first} col-lg-6 col-sm-6 m-auto my-4`}>
              <div className="shadow text-center rounded-3 border-2 ms-5">
                <h4 className={`${Styles.nsbc} my-3 fw-bold m-5 text-start`}>
                  <br />
                  {e?.name}
                </h4>
                <p className={`${Styles.sublbs} tex-start text-start mx-5`}>
                  {/* {item.short_description} */}
                  Indulge in bespoke beauty with our custom creations that
                  redefine the concept of personalized luxury. Tailored to
                  perfection, each piece is a manifestation of your unique
                  style.
                </p>
                <h5 className="text-white newbackcolor border border-1 fw-bold position-relative  border-end-0 border-start-0 py-4">
                  {e?.price}
                  <span
                    className="position-absolute top-0 start-50 mx-4 my-1 translate-middle-x pt-2"
                    style={{ fontSize: "14px" }}
                  >
                    &nbsp; Rs
                  </span>
                </h5>
                <div className="my-3 ">
                  <div
                    className={`${Styles.nsbbc} text-start col-8  ms-5  text-start`}
                    style={{ color: "#737373" }}
                  >
                    {/* {item.description.split("\n").map((str, i) => { */}
                    {/* // if (str.includes("Likes")) { */}
                    {/* //   return ( */}
                    <p className={`${Styles.crouselitem} my-3`}>
                      <i
                        className="fa fa-heart text-white bg-primary border rounded-pill"
                        aria-hidden="true"
                        style={{
                          padding: "10px",
                          background:
                            "transparent linear-gradient(327deg, #EE1D52 0%, #EE561D 100%) 0% 0% no-repeat padding-box ",
                        }}
                      />
                      &nbsp; &nbsp; &nbsp;{e?.first}
                    </p>
                    {/* //   );
                          // }

                          // if (str.includes("Comments")) {
                          //   return ( */}
                    <p className={`${Styles.crouselitem} my-3`}>
                      <i
                        className="fa fa-comment text-white bg-primary border rounded-pill"
                        aria-hidden="true"
                        style={{
                          padding: "10px",
                          background:
                            "transparent linear-gradient(327deg, #EE1D52 0%, #EE561D 100%) 0% 0% no-repeat padding-box ",
                        }}
                      />
                      &nbsp; &nbsp; &nbsp;{e?.second}
                    </p>
                    {/* //   );
                          // }
                          // if (str.includes("Followers")) {
                          //   return ( */}
                    <p className={`${Styles.crouselitem} my-3`}>
                      <i
                        className="	fa fa-comment text-white bg-primary border rounded-pill position-relative"
                        aria-hidden="true"
                        style={{
                          padding: "10px",
                          background:
                            "transparent linear-gradient(327deg, #EE1D52 0%, #EE561D 100%) 0% 0% no-repeat padding-box ",
                        }}
                      >
                        <i className="position-absolute fa fa-heart top-0 text-danger" />
                      </i>
                      &nbsp; &nbsp; &nbsp;{e?.third}
                    </p>
                    {/* //   );
                          // }
                          // if (str.includes("Comment Likes")) {
                          //   return ( */}
                    <p className={`${Styles.crouselitem} my-3`}>
                      <i
                        className="	fa fa-comment text-white bg-primary border rounded-pill position-relative"
                        aria-hidden="true"
                        style={{
                          padding: "10px",
                          background:
                            "transparent linear-gradient(327deg, #EE1D52 0%, #EE561D 100%) 0% 0% no-repeat padding-box ",
                        }}
                      >
                        <i className="position-absolute fa fa-heart top-0 text-danger" />
                      </i>
                      &nbsp; &nbsp; &nbsp;{e?.fourth}
                    </p>
                    {/* //   );
                          // }
                          // if (str.includes("Start Time")) {
                          //   return ( */}
                    <p className={`${Styles.crouselitem} my-3`}>
                      <i
                        className="fa fa-comments text-white bg-primary border rounded-pill"
                        style={{
                          padding: "10px",
                          background:
                            "transparent linear-gradient(327deg, #EE1D52 0%, #EE561D 100%) 0% 0% no-repeat padding-box ",
                        }}
                      />
                      &nbsp; &nbsp; {e?.fifth}
                    </p>
                    {/* //   );
                          // } */}

                    {/* // if (str.includes("Delivery")) {
                          //   return ( */}
                    
                    {/* //   );
                          // }
                        // })} */}
                  </div>
                  <hr className="w-75 m-auto" />
                  <button
                    className={` ${Styles.btngrop} newbackcolor btn text-white my-4 px-4 rounded rounded-pill`}
                    style={{ height: "50px", width: "176px" }}
                    onClick={() => handlesingle(e)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* );
            }

            // if (index === 4) {
            //   return ( */}
          <div className="col-lg-6 col-sm-6 m-auto d-none">
            <img
              src={aboutimg}
              alt="Picture of the author"
              className={Styles.second}
            />
          </div>
          {/* //   );
            // }
            // if (index === 5) { */}
          {/* //   return ( */}
          <div className="col-lg-5 col-sm-6 me-5 mt-5 d-none">
            <div>
              <span
                className={`${Styles.fcf} fw-bold  rounded rounded-2 p-2 px-3 text-white`}
                style={{
                  background: "linear-gradient(to right,#FF4600, #FF00B2)",
                }}
              >
                {/* {item.tag} */}
                kjk
              </span>
              <h4 className={`${Styles.fcs} fw-bold mt-3`}>
                {/* {item.title.split(" ").slice(0, 2).join(" ")} */}
                kjk
              </h4>
              <h4
                className={` ${Styles.fcs} fw-bold`}
                style={{ color: "#ee5a22" }}
              >
                {/* {item.title
                        .replace(".", ". ")
                        .split(" ")
                        .slice(2, 4)
                        .join(" ")} */}
                lkhj
              </h4>
              <h6 className={`${Styles.nsbcc} fw-bold`}>
                {/* {item.title
                        .replace(".", ". ")
                        .split(" ")
                        .slice(4)
                        .join(" ")} */}
                hjkmnj
              </h6>
            </div>

            <p
              className={`${Styles.sublbs} my-3  w-100`}
              style={{ color: "#737373" }}
            >
              {/* {item.short_description} */}
              kkjk
            </p>
            <ul
              className={`${Styles.fcfo} list-unstyled`}
              style={{ color: "#737373" }}
            >
              {/* {item.description.split("\n").map((e) => ( */}
              <li className="my-2 mb-2">
                <img
                  className="m-1"
                  src={aboutimg}
                  alt="Picture of the author"
                />
                jjklklklkl
              </li>
              <li className="my-2 mb-2">
                <img
                  className="m-1"
                  src={aboutimg}
                  alt="Picture of the author"
                />
                jjklklklkl
              </li>
              <li className="my-2 mb-2">
                <img
                  className="m-1"
                  src={aboutimg}
                  alt="Picture of the author"
                />
                jjklklklkl
              </li>
              <li className="my-2 mb-2">
                <img
                  className="m-1"
                  src={aboutimg}
                  alt="Picture of the author"
                />
                jjklklklkl
              </li>
              {/* ))} */}
            </ul>
            <div className={`${Styles.btngrop} ${Styles.verifybtncen} my-3`}>
              <button
                className="btn  btn-primary  shadow my-3  shadow"
                style={{
                  width: "296px",
                  height: "50px",
                  borderRadius: "50px",
                }}
              >
                Verified Random Comments
              </button>
              <br />
              <button
                className="btn bg-light my-1 border border-black border-2 fw-bold"
                style={{
                  width: "296px",
                  height: "50px",
                  borderRadius: "50px",
                  backgroundColor: "#2996be",
                }}
              >
                Verified Auto Comments
              </button>
            </div>
          </div>
          {/* //     );
          //   }
          // })} */}
        </div>
      </div>

      {/* Our Core Features */}

      <div style={{ background: "#fef8fa" }}>
        <div className="text-center">
          <p className={Styles.coregrp}>
            <h4 className={`${Styles.subsbbolder} pt-3 fw-bold me-5`}>
              Our
              <span>Core Features</span>
            </h4>
            <span
              className={`${Styles.subsb} fw-bold`}
              style={{
                paddingRight: "30px",
                textTransform: "capitalize",
              }}
            >
              That makes us different
            </span>
          </p>
        </div>

        <div className="container col-lg-9 col-sm-12">
          <div className="row">
            <div
              className={`${Styles.btnlists}  col-lg-5 col-sm-6 my-5`}
              style={{ color: "#2D2D2D" }}
            >
              {/* {features.widgets.map((e, i) => {
                return ( */}

              {feature?.data?.map((e, i) => (
                <button
                  className={`${Styles.third} ${Styles.btns} btn border border-secondary border-2 fw-bold my-2`}
                  // onMouseEnter={() => handleMouseEnter(i)}
                  onMouseEnter={() => handleMouseEnter(i)}
                >
                  {e?.feaure}
                </button>
              ))}
              {/* );
              })} */}
            </div>

            <div
              className={`${Styles.verticalbar} vr col-lg-2 d-none d-lg-block m-auto my-3`}
            ></div>

            <div
              className={`${Styles.txtgrp} col-lg-4 col-sm-6 m-auto mt-5 ms-3`}
            >
              <div className="">
                <div className="d-flex mb-3">
                  <img
                    style={{ width: "67px", height: "67px" }}
                    className=""
                    src={circleicon}
                    alt="Picture of the author"
                  />

                  <span
                    className={`${Styles.subscbolder}  fw-bold mx-3 ms-4`}
                    // subscbolder
                  >
                    {data?.feaure}
                  </span>
                </div>
                <p className={`${Styles.parab}  ${Styles.fourth}`}>
                  {/* {data?.long_description?.replace(
                    /<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo; |\\r\\n|&laquo;|"|&gt;/g,
                    " "
                  )} */}
                  {data?.featuredesc}
                </p>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>

      {/* Testimonial */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-3 newbackcolor text-center">
            <i
              className="fa fa-instagram text-white mx-2  my-4 "
              aria-hidden="true"
              style={{ fontSize: "23px" }}
            ></i>
          </div>

          <div className="text-center col-3">
            <i
              className="fa fa-linkedin text-primary m-2 my-4 newcolor "
              aria-hidden="true"
              style={{ fontSize: "23px" }}
            ></i>
          </div>
          <div
            className="vr text-center "
            style={{
              padding: "1px",
              height: "67px",
              marginLeft: "-5px",
            }}
          ></div>

          <div className="col-3 text-center">
            <i
              className="fa fa-twitter text-primary m-2 my-4 newcolor "
              aria-hidden="true"
              style={{ fontSize: "23px" }}
            ></i>
          </div>
          <div
            className="vr text-center"
            style={{
              padding: "1px",
              height: "67px",
              marginLeft: "-5px",
            }}
          ></div>

          <div className="col-2 text-center">
            <i
              className="fa fa-facebook text-primary mx-2 my-4 newcolor "
              aria-hidden="true"
              style={{ fontSize: "23px" }}
            ></i>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5 ">
        <div className="row gap-5">
          <div className="col-lg-2 col-sm-6 d-lg-block d-none">
            <img
              src={newimgleft}
              style={{ marginTop: "100px", width: "330px", height: "359px" }}
              alt="Picture of the author"
            />
          </div>
          <div
            className={`${Styles.resptesti} col-lg-6 col-sm-6 m-auto ms-5 ps-5`}
          >
            <div className="text-center">
              {/* {testimonials.widgets.map((e) => ( */}
              <p>
                <span
                  className={`${Styles.fcfsc}`}
                  style={{
                    paddingRight: "155px",
                    color: "#ee5a22",
                    fontWeight: "bold",
                  }}
                >
                  <br />
                  Client Reviews
                </span>

                <h1 className={`${Styles.nsbpc} fw-bold mt-4`}>Testimonials</h1>
                <span className={`${Styles.subscboldd} fw-bold`}>
                  Hear from our customers
                </span>
              </p>
              {/* ))} */}

              <Carousel
                responsive={resp}
                additionalTransfrom={0}
                autoPlaySpeed={3000}
                centerMode={false}
                dotListclassName=""
                draggable
                focusOnSelect={false}
                infinite
                itemclassName=""
                keyBoardControl
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                showDots
                sliderclassName=""
                slidesToSlide={1}
                swipeable
                arrows={false}
                autoPlay={true}
                customDot={<CustomDot />}
                className={`${Styles.testimonslider} py-5`}
              >
                {/* {plans?.map((e) => ( */}
                {console.log(testimon)}
                {testimon?.data?.map((e, index) => (
                  <>
                    <div className={`${Styles.testimon} py-3 `}>
                      <div
                        style={{
                          marginInlineStart: "230px",
                          marginBottom: "50px",
                        }}
                      >
                        <img
                          className="rounded-pill mx-1 mb-3 "
                          // src="/Ellipse 82.png"
                          // width={120}
                          // height={120}
                          src={
                            index == 0
                              ? ellipsepers
                              : index == 1
                              ? qutab
                              : index == 2
                              ? ibraheem
                              : ellipsepers
                          }
                          alt="Picture of the author"
                          style={{ height: "120px", width: "120px" }}
                        />
                      </div>

                      <br />
                      <div
                        className="rounded-pill  my-2 m-auto"
                        style={{
                          paddingInline: "21px",
                          backgroundColor: "#D3D3D3",
                          height: "50px",
                          width: "190px",
                        }}
                      >
                        <div className="d-flex">
                          <img
                            className="m-2"
                            src={groupfif}
                            style={{ width: "35px", height: "35px" }}
                            alt="Picture of the author"
                          />
                          <div>
                            <span className={`${Styles.sui} fw-bold`}>
                              {e?.cname}
                            </span>
                            <br />
                            <p
                              style={{ color: "#737373" }}
                              className={Styles.suii}
                            >
                              Verified
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className={`${Styles.fcfolorem} mt-2`}>{e?.resp}</p>
                  </>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className={`${Styles.homebackimg} `}>
        <div
          className={`${Styles.fcfolorem}  container col-lg-9 col-sm-12 m-auto d-flex`}
        >
          <div className="col-lg-3 col-sm-3 m-auto text-center">
            <div className="my-5 text-white">
              <h1 className="fw-bold my-3 mb-4">12000</h1>
              <h4 className="fw-bold">Services Sold</h4>
            </div>
          </div>
          <div className="col-lg-1 d-none d-lg-block">
            <img
              className="my-5"
              src={slash}
              alt="Picture of the author"
              style={{ width: "55px", height: "110px" }}
            />
          </div>
          <div className="col-lg-3 col-sm-3 m-auto text-center">
            <div className="my-5 text-white">
              <h1 className="fw-bold my-3 mb-4">378</h1>
              <h4 className="fw-bold">Satisfied Clients</h4>
            </div>
          </div>

          <div className="col-lg-1 d-none d-lg-block">
            <img className="my-5" src={slash} alt="Picture of the author" />
          </div>
          <div className="col-lg-3 col-sm-3 m-auto text-center">
            <div className="my-5 text-white">
              <h1 className="fw-bold my-3 mb-4">100%</h1>
              <h4 className="fw-bold">Positive Reviews</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={`  ${Styles.homebackimgs}`}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      {/* Faqs */}

      <div className={`${Styles.faqstar} my-5`}>
        <div className="justify-content-center d-flex">
          {/* {faqs.widgets.map((e, i) => ( */}
          <p>
            <span className={`${Styles.twpx} fw-bold text-primary px-5`}>
              FAQ
            </span>

            <h4 className={`${Styles.nsbhc} fw-bold px-5 text-capitalize`}>
              {/* {e.short_description.split(" ").slice(0, 2).join(" ")}{" "} */}
              Still Have
              <span>Questions</span>?
            </h4>
            <span
              className={`${Styles.nsbkbc} ${Styles.fifth} fw-bold m-0  ms-4`}
            >
              {/* {e.description.replace(" no", "n'")}&nbsp; */}
              Don't worry we are here for your assistance.
            </span>
          </p>
          {/* ))} */}

          <img src={shinimg} className="mx-3" width="55px" height="95px" />
        </div>
        <div
          className={`${Styles.nsbbc} ${Styles.faqin} fw-bold col-lg-9 col-sm-12 my-5 mx-auto`}
          style={{ fontSize: "13px" }}
        >
          <div className="container my-2">
            <div className={`${Styles.faqsett}`}>
              {/* {faq.map((e, i) => {
                return ( */}
              {faq?.data?.map((e) => (
                <div
                  style={{
                    margin: "0 0 1rem",
                    display: "inline-block",
                    width: "100%",
                  }}
                  // key={i}
                  // onClick={() => faqset(i)}
                >
                  <div
                    className={`${Styles.faqactive} fw-bold`}
                    style={{
                      borderLeft: "3px solid #ee5a22 ",
                    }}
                  >
                    <p className="ps-3 m-0">{e?.cname}</p>
                  </div>

                  {/* {faqshow == i && ( */}
                  <div
                    className={`${Styles.btngrop} mx-2  ps-3`}
                    style={{ color: "#949494" }}
                  >
                    <small className="m-0">
                      {/* {e.description.replace(
                            /<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo; |\\r\\n|&laquo;|"|&gt;/g,
                            " "
                          )} */}
                      {e?.resp}
                    </small>
                  </div>
                  {/* )} */}

                  <hr className={`${Styles.faqborderactive} m-2 border-2`} />
                </div>
              ))}
              {/* );
              })} */}
            </div>
          </div>
        </div>
      </div>

      {/* Blogs */}

      <div
        className={`${Styles.blogs} my-5`}
        style={{ backgroundColor: "#f2f2f2" }}
      >
        {/* {blogs.map((e) => ( */}
        <div className={`${Styles.newgrp} text-center pt-5 d-none`}>
          <h4 className={`${Styles.notofe} fw-bold  my-1`}>
            <span
              className={`${Styles.twpx} ${Styles.spanblog} d-none fw-bold  text-primary text-center`}
            >
              News
            </span>
            <br />
            {/* {e.title.split(" ").slice(0, 1).join(" ")}{" "} */}
            xdfgyujhb
            <span>
              {/* {e.title.split(" ").slice(1).join(" ")} */}
              iuyhgfc
            </span>
          </h4>
          <p
            className={`${Styles.sublbs} ${Styles.sixth} col-4 m-auto mt-4`}
            style={{ color: "#737373" }}
          >
            {/* {e.short_description} */}
            iuhygfc
          </p>
        </div>
        {/* ))} */}

        {/* New Existing slider */}

        <Carousel
          responsive={resplast}
          additionalTransfrom={0}
          autoPlaySpeed={3000}
          centerMode={false}
          dotListclassName=""
          draggable
          focusOnSelect={false}
          infinite
          itemclassName=""
          keyBoardControl
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          sliderclassName=""
          slidesToSlide={1}
          swipeable
          // autoPlay={true}
          arrows={false}
          customButtonGroup={<CustomButtonGroup />}
          className={`${Styles.lastcarosel} py-5 mt-5 container d-none col-lg-9 col-sm-12`}
        >
          {/* {blogsec.map((e) => { */}
          {/* // const isoDatetime = e.created_at;
            // const date = new Date(isoDatetime);

            // const formatte_dDate = date
            //   .toISOString()
            //   .slice(0, 19)
            //   .replace("T", " ");

            // // Given formatted date
            // const formattedDate = formatte_dDate;

            // // Get the current date and time
            // const currentDate = new Date();

            // // Parse the formatted date
            // const formattedDateParts = formattedDate.split(/[- :]/);
            // const formattedDateObject = new Date(
            //   formattedDateParts[0], // Year
            //   formattedDateParts[1] - 1, // Month (0-based)
            //   formattedDateParts[2], // Date
            //   formattedDateParts[3], // Hours
            //   formattedDateParts[4], // Minutes
            //   formattedDateParts[5] // Seconds
            // );

            // // Calculate the time difference in milliseconds
            // const timeDifference = currentDate - formattedDateObject;

            // // Calculate the difference in days, hours, minutes, and seconds
            // const daysDifference = Math.floor(
            //   timeDifference / (1000 * 60 * 60 * 24)
            // );
            // const hoursDifference = Math.floor(
            //   (timeDifference / (1000 * 60 * 60)) % 24
            // );
            // const minutesDifference = Math.floor(
            //   (timeDifference / (1000 * 60)) % 60
            // );
            // const secondsDifference = Math.floor((timeDifference / 1000) % 60);
            // let res;
            // daysDifference > 0
            //   ? (res = `${daysDifference} days ago`)
            //   : hoursDifference > 0
            //   ? (res = `${hoursDifference} hours ago`)
            //   : (res = `${minutesDifference} minutes ago`);
            // console.log(res);

            // let result = `${daysDifference} days, ${hoursDifference} hours, ${minutesDifference} minutes, ${secondsDifference} seconds`;

            // Display the difference

            //console.log(daysDifference);

            return ( */}
          <div className={`${Styles.lastslid} py-2 px-3 `}>
            <Link href={`/blog`} className="text-decoration-none">
              <div className="card bg-dark text-white rounded-4">
                <img
                  src={aboutimg}
                  sizes="100vw"
                  className="rounded-4"
                  style={{ width: "100%", height: "auto" }}
                />
                <div
                  className="card-img-overlay h-100 d-flex flex-column justify-content-end"
                  style={{ padding: "0" }}
                >
                  <div
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                    className="rounded-bottom-4"
                  >
                    <p className={`${Styles.hlistimp} text-white mx-3 my-3`}>
                      ghjyg
                    </p>
                    <hr className="col-11  m-auto opacity-100" />
                    <div
                      className={`${Styles.fcts} justify-content-between mx-3 my-1`}
                    >
                      <p className="float-start">dfghjk</p>
                      <p className="float-end">dfghj</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className={`${Styles.lastslid} py-2 px-3 `}>
            <Link href={`/blog`} className="text-decoration-none">
              <div className="card bg-dark text-white rounded-4">
                <img
                  src={aboutimg}
                  sizes="100vw"
                  className="rounded-4"
                  style={{ width: "100%", height: "auto" }}
                />
                <div
                  className="card-img-overlay h-100 d-flex flex-column justify-content-end"
                  style={{ padding: "0" }}
                >
                  <div
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                    className="rounded-bottom-4"
                  >
                    <p className={`${Styles.hlistimp} text-white mx-3 my-3`}>
                      ghjyg
                    </p>
                    <hr className="col-11  m-auto opacity-100" />
                    <div
                      className={`${Styles.fcts} justify-content-between mx-3 my-1`}
                    >
                      <p className="float-start">dfghjk</p>
                      <p className="float-end">dfghj</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className={`${Styles.lastslid} py-2 px-3 `}>
            <Link href={`/blog`} className="text-decoration-none">
              <div className="card bg-dark text-white rounded-4">
                <img
                  src={aboutimg}
                  sizes="100vw"
                  className="rounded-4"
                  style={{ width: "100%", height: "auto" }}
                />
                <div
                  className="card-img-overlay h-100 d-flex flex-column justify-content-end"
                  style={{ padding: "0" }}
                >
                  <div
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                    className="rounded-bottom-4"
                  >
                    <p className={`${Styles.hlistimp} text-white mx-3 my-3`}>
                      ghjyg
                    </p>
                    <hr className="col-11  m-auto opacity-100" />
                    <div
                      className={`${Styles.fcts} justify-content-between mx-3 my-1`}
                    >
                      <p className="float-start">dfghjk</p>
                      <p className="float-end">dfghj</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* );
          })} */}
        </Carousel>

        <div className="text-center mt-4 d-none">
          <div
            className={`${Styles.btngrop} btn newbackcolor text-white rounded-pill shadow text-black`}
            style={{ width: "182px", height: "44px" }}
          >
            Imported Products
          </div>
        </div>

        <br />
        <div
          className="divider"
          style={{
            background: "linear-gradient(to right,#fa1e60, #ed4e15)",
            marginTop: "55px",
            padding: "3px",
          }}
        ></div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
