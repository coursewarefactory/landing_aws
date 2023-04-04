import "./WhatAndWhy.css";
import imageRound from "assets/image-round.png";
import whatWhyMobile from "assets/what-why-mobile.png";
export const WhatAndWhy = () => {
  return (
    <section id="what-why">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 offset-lg-1 order-lg-12 ">
            <div className="content-cont">
              <h3>
                <span className="orange">What and Why</span>
                <br />
                Accelerate Migration, Accelerate Your Business
              </h3>
              <p>
                [AWS PARTNER] is here to help you make responsible, data-driven
                migration decisions. We will help you replace guesswork with
                analysis by providing a data-backed blueprint to build,
                validate, and execute your AWS migration.{" "}
              </p>
              <p>
                <a href="#placeholder" className="button primary">
                  See how it works
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-5 small-text-center">
            <img
              src={imageRound}
              alt=""
              className="d-none d-lg-block"
              style={{ border: "10px solid #EFEFEF", borderRadius: "50%" }}
            />
            <img src={whatWhyMobile} alt="" className="d-lg-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
