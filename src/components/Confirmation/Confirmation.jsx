import "./Confirmation.css";
// import logoPartner from "assets/logo-partner.png";
import heroConfMobile from "assets/hero-conf-mobile.png";
export const Confirmation = () => {
  return (
    <section style={{ paddingTop: 0 }} id="conf">
      <div className="container hero-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-logo">
              <h1>
                <span className="white">Evg</span>
                <span className="orange">Soft</span>
              </h1>
            </div>
            <div className="hero-content row">
              <div className="col">
                <h1>
                  <span className="orange">THANK YOU</span>
                  <br />
                  FOR PARTNERING WITH US
                </h1>
                <p className="midnight">
                  Thank you for your interest in becoming an Evgsoft partner! We
                  are eager to learn more about your business, your aspirations,
                  and how we can help you take your cloud business to the next
                  level. A member of our team will reach out to you as soon as
                  possible. In the meantime, if you have any questions, don't
                  hesitate to email info@evg-soft.com.{"EvgSoft "}
                </p>
                <p>
                  <a href="#placeholder" className="button">
                    Call to action
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 hero-conf"></div>
          <div className="col hero-conf-mobile">
            <img src={heroConfMobile} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
