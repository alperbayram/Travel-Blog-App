import React from "react";
const Pn = "./img/social/pinterest.png";
const tw = "./img/social/twitter.png";
const fb = "./img/social/facebook.png";
const Be = "./img/social/behance.png";
const yo = "./img/social/youtube.png";

function Footer() {
  return (
    <div className="">
      <footer className="text-center lg:text-left bg-footer-color  text-white">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10">
            <div className="">
              <h6
                className="
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
              >
                Contact the Publisher
              </h6>
              <p>alperbayram</p>
            </div>
            <div className="">
              <h6 className="font-semibold mb-4 flex justify-center md:justify-start">
                Explorate
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-gray-200">
                  About
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-200">
                  Partners
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-200">
                  Job Opportunities
                </a>
              </p>
              <p>
                <a href="#!" className="text-gray-200">
                  Advertise
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="font-semibold mb-4 flex justify-center md:justify-start">
                Headquarter
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-gray-200">
                  191 Middleville Road, <br />
                  NY 1001, Sydney Australia
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="font-semibold mb-4 flex justify-center md:justify-start">
                Contact
              </h6>
              <div className="flex justify-center md:justify-start">
                <a href="#!" className="mr-6 text-gray-200">
                <span className="mr-2">
                  {" "}
                  <img src={fb} alt="avatar" className="w-5 h-5" />
                </span>
                </a>
                <a href="#!" className="mr-6 text-gray-200">
                <span className="mr-2">
                  {" "}
                  <img src={tw} alt="avatar" className="w-5 h-5" />
                </span>
                </a>
                <a href="#!" className="mr-6 text-gray-200">
                <span className="mr-2">
                  {" "}
                  <img src={yo} alt="avatar" className="w-5 h-5" />
                </span>
                </a>
                <a href="#!" className="mr-6 text-gray-200">
                <span className="mr-2">
                  {" "}
                  <img src={Pn} alt="avatar" className="w-5 h-5" />
                </span>
                </a>
                <a href="#!" className="text-gray-200">
                <span className="mr-2">
                  {" "}
                  <img src={Be} alt="avatar" className="w-5 h-5" />
                </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-start text-white p-6 bg-background-color2">
          <span>2022 | alperbayram</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
