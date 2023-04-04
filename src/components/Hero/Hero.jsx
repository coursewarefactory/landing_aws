import "./Hero.css";
import logoPartner from "assets/logo-partner.png";
import heroMan from "assets/hero-man.png";
import { Form } from "components/Form/Form";
export const Hero = () => {
  return (
    <section style={{ paddingTop: 0 }} className="hero">
      <div className="container hero-container">
        <div className="row">
          <div className="col-lg-7">
            <div className="hero-logo">
              <img src={logoPartner} alt="[AWS PARTNER]" />
            </div>
            <div className="hero-content">
              <h1>
                <span className="orange">MIGRATE TO AWS WITH</span>
                <br />
                [AWS PARTNER]
              </h1>
              <p className="midnight">
                Migrate to the cloud, modernize your IT infrastructure, and
                drive more innovation in less time with [AWS PARTNER] and Amazon
                Web Services (AWS). With our support, you can move to the cloud
                quickly, lower migration costs, and jumpstart digital
                transformation.
              </p>
            </div>
            <div className="mobile-hero">
              <img src={heroMan} alt="hero man" />
            </div>
          </div>
          <div className="col-lg-5" style={{ position: "relative" }}>
            <div className="hr d-lg-none"></div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};
