import React from "react";
import "../components/landingpage.css";
import landingImg from "../assests/images/landingImg.jpg";
import icon1 from "../assests/images/Picture1.png";
import icon2 from "../assests/images/Picture2.png";
import icon3 from "../assests/images/Picture3.png";
import { Link } from "react-router-dom";
import logo from "../assests/images/2.png";

function LandingPage() {
  return (
    <>
      <div className="main-landing-section">
        <div className="navbar-section">
          <img src={logo} className="logo" />
        </div>

        <div className="section1-inner-div">
          <div className="leftbar-main-div">
            <h1 className="rightbar-title">
              Take the first step in your Web3 Journey!
            </h1>
            <p className="rightbar-pera">
              Complete this 12-step guide to start your Web3 journey!
            </p>
          </div>
          <div className="rightbar-main-div">
            <img src={landingImg} className="landing-image" />{" "}
          </div>
        </div>

        <section id="section2-landingpage">
          <h1 className="main-text-section2 font-face-alata">
            Our aim is{" "}
            <span className="text-color1">frictionless user integration </span>
            into the web3 environment
          </h1>
        </section>
        <section id="section3-landingpage">
          <h1 className=" font-face-alata section3-main-content">So far...</h1>

          <section className="section4-landing-page">
            <div className="box1">
              <img src={icon1} className="icon-img" />

              <p className="content">Lack of user- friendly interfaces</p>
            </div>
            <div className="box1">
              <img src={icon2} className="icon-img" />

              <p className="content">Developer centric/ Jargon heavy</p>
            </div>
            <div className="box1">
              <img src={icon3} className="icon-img1 icon-img" />

              <p className="content">Lack of trust & security</p>
            </div>
          </section>
        </section>
        <section id="section5-landingpage">
          <h1 className=" font-face-alata section3-main-content">Instead...</h1>
          <p className="landing-section4-content">
            {" "}
            We provide a <span className="text-color1">
              step-by-step guide
            </span>{" "}
            to a completely new Web3 user.
          </p>
          <div className="section5-content-box">
            <div className="text-box1 text-box2">Easy to follow steps</div>
            <div className=" text-box1 text-box3">
              Well-defined flow of learning
            </div>
          </div>
        </section>
        <section id="section6-landingpage">
          <p className="section6-content">
            Here is your <span className="text-color1">12-step guide</span> to
            starting the Web3 journey!
          </p>

          <button className="section6-button">
            <Link to="/navbar">Let's go!</Link>
          </button>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
