import React, { useState } from "react";
import "../assets/scss/main.scss";
import images from "../assets/images";
import { BsFillCircleFill } from "react-icons/bs";
import Alert from "../components/Alert";
import ReactClipboard from "react-clipboardjs-copy";

function EmailSignature() {
  const [fullName, setFullName] = useState("Your Full Name");
  const [position, setPosition] = useState("Your Position");
  const [contact, setContact] = useState("0000000000");
  const [alertStatus, setAlertStatus] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  // const socialLinks = [
  //   {
  //     url: "https://stratpoint.com/",
  //     src: "https://i.ibb.co/PN5QcwH/logo-instagram.png",
  //   },
  //   {
  //     url: "https://www.linkedin.com/company/stratpoint",
  //     src: "https://i.ibb.co/5vW503m/logo-linkedin.png",
  //   },
  //   {
  //     url: "https://www.facebook.com/Stratpoint/",
  //     src: "https://i.ibb.co/n1LnnMs/logo-fb.png",
  //   },
  //   {
  //     url: "https://www.instagram.com/stratpoint/?hl=en",
  //     src: "https://i.ibb.co/PN5QcwH/logo-instagram.png",
  //   },
  // ];
  const clearFields = () => {
    setFullName("Your Full Name");
    setPosition("Your Position");
    setContact("0000000000");
    setAlertStatus("clear");
    setAlertVisible(true);
    setTimeout(() => {
      setAlertStatus("");
      setAlertVisible(false);
    }, 2000);
  };

  const copySignature = () => {
    setAlertStatus("success");
    setAlertVisible(true);
    setTimeout(() => {
      setAlertStatus("");
      setAlertVisible(false);
    }, 2000);
  };

  return (
    <div className="main">
      <div className="details-section">
        <div className="details-forms">
          <img
            src={images.stratLogo}
            alt={images.stratLogo.toString().replace("/static/media/", "")}
            className="logo"
          />
          <h3 className="text-primary heading">Fill in Personal details</h3>

          <div className="form">
            <form>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  maxLength="45"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                />
              </div>
              <div className="form-group">
                <label>Position</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Position"
                  value={position}
                  maxLength="45"
                  onChange={(e) => setPosition(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Contact No.</label>
                <span>+63</span>
                <input
                  type="text"
                  className="form-control contact"
                  placeholder="**********"
                  maxLength="10"
                  value={contact}
                  pattern="[+-]?\d+(?:[.,]\d+)?"
                  onChange={(e) =>
                    setContact(e.target.value.split(/\D/).join(""))
                  }
                />
              </div>
            </form>
          </div>

          <div className="button-controls">
            <button className="btn" onClick={clearFields}>
              Reset
            </button>
            <ReactClipboard
              options={{
                target: () => {
                  copySignature();
                  return document.getElementById("emailSignatureCopy");
                },
              }}
            >
              <button type="submit" className="btn btn-primary">
                Copy Signature
              </button>
            </ReactClipboard>
          </div>

          <Alert status={alertStatus} visible={alertVisible} />
        </div>
      </div>
      <div className="preview-section">
        <div className="email-container">
          <div className="top-controls">
            <BsFillCircleFill />
            <BsFillCircleFill />
            <BsFillCircleFill />
          </div>
          <div className="recepient-section">
            <p>
              To: <span>Recepient</span>
            </p>
            <p>
              From: <span>Stratizen</span>
            </p>
          </div>
          <div className="email-signature-section" id="emailSignatureCopy">
            <div className="content-name">
              <p>{fullName}</p>
              <p>{position}</p>
            </div>
            {
              // <div className="divider"></div>
            }
            <div className="content-company">
              <div className="company-address">
                <p>Stratpoint Technologies Inc.</p>
                <p>
                  Unit 702, Globe Telecom Plaza Tower 1, Pioneer cor. <br />
                  Madison Streets, Mandaluyong City Philippines
                </p>

                <p>m: +63{contact}</p>
              </div>
              <a
                href="https://stratpoint.com/mobileappdev/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://i.ibb.co/TYwR6WF/esig-short-mobiledev-promo.png"
                  alt="Stratpoint Logo"
                  className="strat-logo"
                />
              </a>

              {
                //   <div className="social-media">
                //   {socialLinks.map((socialLink, index) => (
                //     <a
                //       key={index}
                //       href={socialLink.url}
                //       target="_blank"
                //       rel="noreferrer"
                //     >
                //       <img
                //         src={socialLink.src}
                //         alt={socialLink.src
                //           .toString()
                //           .replace("/static/media/", "")}
                //       />
                //     </a>
                //   ))}
                // </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailSignature;
