import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="d-flex">
              <p>Austin, Tx</p>
            </div>
            <div className="d-flex">
              <a href="tel:512-202-1802">512-202-1802</a>
            </div>
            <div className="d-flex">
              <p>justinhoffman193@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <div className="footer-nav"></div>
                <div className="footer-nav"></div>
                <div className="footer-nav"></div>
              </div>
            </div>

            <div className="smicon">
              <div className="col-lg-3 col-md-3 col-sm-3 align-items-center">
                <div className="d-flex">
                  <FacebookShareButton
                    url={"https://www.facebook.com/justin.hoffman.14289/"}
                  >
                    <FacebookIcon className="mx-3" size={46}></FacebookIcon>
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={"https://www.facebook.com/justin.hoffman.14289/"}
                  >
                    <TwitterIcon className="mx-3" size={46}></TwitterIcon>
                  </TwitterShareButton>
                  <LinkedinShareButton
                    url={"https://www.facebook.com/justin.hoffman.14289/"}
                  >
                    <LinkedinIcon className="mx-3" size={46}></LinkedinIcon>
                  </LinkedinShareButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
