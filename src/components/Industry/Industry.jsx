import "./Industry.css";
import nonProfit from "assets/industry-nonprofit.jpg";
import industrySmb from "assets/industry-smb.jpg";
import industryEnterprise from "assets/industry-enterprise.jpg";
import industryGovernment from "assets/industry-government.jpg";
import industryEducation from "assets/industry-education.jpg";
import healthCare from "assets/industry-healthcare.jpg";

export const Industry = () => {
  return (
    <section id="industry" className="icons">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="h3 text-center">
              <span className="orange">HOW IT APPLIES TO</span>
              <br />
              YOUR INDUSTRY
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="industry">
              <div
                className="industry-img"
                style={{
                  background: `url(${industrySmb}) no-repeat`,
                }}
              >
                <h4 className="text-center">
                  SMB
                  <br />
                  <span>
                    Move at the speed of your customers, manage costs, and boost
                    productivity with AWS's suite of SMB solutions.
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="industry">
              <div
                className="industry-img"
                style={{
                  background: `url(${industryEnterprise}) no-repeat`,
                }}
              >
                <h4 className="text-center">
                  Enterprise
                  <br />
                  <span>
                    Drive transformation at scale with flexible, pay-per-use
                    cloud solutions designed to meet today's most demanding
                    workloads and applications.
                  </span>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="industry">
              <div
                className="industry-img"
                style={{
                  background: `url(${industryGovernment}) no-repeat`,
                }}
              >
                <h4 className="text-center">
                  Government
                  <br />
                  <span>
                    Leverage the cloud to gain the agility, financial
                    flexibility, security, and resilience needed to support the
                    modern citizen.
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-md-6 col-lg-4">
            <div className="industry">
              <div
                className="industry-img"
                style={{
                  background: `url(${industryEducation}) no-repeat`,
                }}
              >
                <h4 className="text-center">
                  Education
                  <br />
                  <span>
                    Build the foundation for tomorrow's educational system with
                    AWS's secure, remote-capable, future-ready cloud solutions.
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="industry">
              <div
                className="industry-img"
                style={{
                  background: `url(${healthCare}) no-repeat`,
                }}
              >
                <h4 className="text-center">
                  Healthcare
                  <br />
                  <span>
                    Increase the pace of innovation, unlock the value of health
                    data, and build robust, secure healthcare solutions in the
                    cloud.
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="industry">
              <div
                className="industry-img"
                style={{
                  background: `url(${nonProfit}) no-repeat`,
                }}
              >
                <h4 className="text-center">
                  Non-Profit
                  <br />
                  <span>
                    [AWS PARTNER] and AWS are ready to help nonprofits of all
                    sizes overcome barriers to technology adoption, while
                    enhancing their scale, performance, and capabilities.
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <a href="#placeholder" className="button">
              Find out more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
