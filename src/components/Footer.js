import React from "react";

import "../styles/bottomFooter.css";
import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

export default function () {
  return (
    <div>
      <footer>
        <div className="container">

          <div className="sec-about-us">
            <h2>Bize Ulaşın</h2>
            <div className="divider" style={{ paddingBottom: "20px" }}></div>
            <ul className="ul-aboutus">
              <li>
                <p>
                  Konak Mah. 1. Badem Sok. Lotus Plaza No:26 B Blok 1.KAT B01
                  Nilüfer / BURSA
                </p>
              </li>

              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "1++0px",
                }}
              >
                <GrMail size={30} style={{ paddingRight: "5px" }}></GrMail>
                <p href="#" style={{ paddingBottom: "0", fontWeight: "600" }}>
                  umit@arelya.com.tr
                </p>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <AiFillInstagram
                  size={30}
                  style={{ paddingRight: "5px" }}
                ></AiFillInstagram>
                <p href="#" style={{ paddingBottom: "0", fontWeight: "600" }}>
                  @arelyazemintavan
                </p>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <AiFillPhone
                  size={30}
                  style={{ paddingRight: "5px" }}
                ></AiFillPhone>
                <p href="#" style={{ paddingBottom: "0", fontWeight: "600" }}>
                  +90 (550) 348 9933
                </p>
              </li>
            </ul>
          </div>

          <div className="sec-links">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d319.99778126515355!2d28.980802089189986!3d40.26799461523576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1687721216835!5m2!1sen!2str"
              width="600"
              height="200"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </footer>
      <div className="bottom-copyrights-area">
        <p>Copyrights text</p>
      </div>
    </div>
  );
}
