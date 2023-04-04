import "./Partnership.css";
import imageRound from "assets/image-round.png";
import whatWhyMobile from "assets/what-why-mobile.png";
export const Partnership = () => {
  return (
    <section id="partner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-7">
            <div className="content-cont">
              <h3>
                <span className="orange">Why Migrate to AWS with</span>
                <br />
                [AWS PARTNER]
              </h3>
              <p>
                AWS has helped thousands of organizations, including global
                enterprises, migrate their business to the cloud. These
                companies have benefited from substantial IT savings, as well as
                improvements in productivity, business agility, and operational
                resilience. Combining the experience and expertise of AWS, along
                with [AWS PARTNER SOLUTION], AWS and [AWS PARTNER] provide a
                complete and proven approach for migrating to the cloud so that
                you can achieve cloud benefits faster.
              </p>
              <a href="#partner_with_us" className="button">
                Get Started
              </a>
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
