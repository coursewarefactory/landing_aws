import "./Benefits.css";
import icon1 from "assets/icon-1.png";
import icon2 from "assets/icon-2.png";
import icon3 from "assets/icon-3.png";
import icon4 from "assets/icon-4.png";
import icon5 from "assets/icon-5.png";
import icon6 from "assets/icon-6.png";
export const Benefits = () => {
  return (
    <section id="benefits" className="icons">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="h3 text-center">
              <span className="orange">AWS MIGRATION</span>
              <br />
              BENEFITS
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-4">
            <div className="row icon align-items-center no-gutters">
              <div className="col-12 text-center">
                <img src={icon1} alt="" />
              </div>
              <div className="col-12 text-center">
                <span>Lower costs</span>
                <br />
                with a data-driven migration assessment
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-4">
            <div className="row icon align-items-center no-gutters">
              <div className="col-12 text-center">
                <img src={icon2} alt="" />
              </div>
              <div className="col-12 text-center">
                <span>Be more agile</span>
                <br />
                in the cloud
              </div>
            </div>
          </div>

          <div className="col-md-8 col-lg-4">
            <div className="row icon align-items-center no-gutters">
              <div className="col-12 text-center">
                <img src={icon3} alt="" />
              </div>
              <div className="col-12 text-center">
                <span>Improve security and resilience </span>
                <br />
                with security best practices
              </div>
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-md-8 col-lg-4">
            <div className="row icon align-items-center no-gutters">
              <div className="col-12 text-center">
                <img src={icon4} alt="" />
              </div>
              <div className="col-12 text-center">
                <span>Leave legacy hardware behind</span>
                <br />
                and modernize IT infrastructure
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-4">
            <div className="row icon align-items-center no-gutters">
              <div className="col-12 text-center">
                <img src={icon5} alt="" />
              </div>
              <div className="col-12 text-center">
                <span>Consolidate data centers</span>
                <br />
                and improve operational efficiency
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-4">
            <div className="row icon align-items-center no-gutters">
              <div className="col-12 text-center">
                <img src={icon6} alt="" />
              </div>
              <div className="col-12 text-center">
                <span>Accelerate digital transformation</span>
                <br />
                with flexible, future-ready infrastructure
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <a href="#partner_with_us" className="button">
              Start now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
