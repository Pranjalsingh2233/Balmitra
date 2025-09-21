import React from "react";
import "./Hero.css";

export default function Hero({ img, heading, para1, para2, img2 }) {
  return (
    <>
      <div
        className="wrapper mb-5 bg-about"
        style={{
          background: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "80vh",
        }}
      >
        <img src="/logo.png" alt="student" className="fix-logo" />
      </div>
      <div className="container p-md-3">
        <h1 className="text-center">{heading}</h1>
        <div className="row p-md-5 text-center ">
          <div className="col-md-8 offset-md-2">
            <p className="p-md-3">{para1}</p>
          </div>
          <div className="col-md-12">
            <img src={img2} className="hero-img" />
          </div>
          <div className="col-md-8 offset-md-2">
            <p className="p-md-3">{para2}</p>
          </div>
        </div>
      </div>
    </>
  );
}
