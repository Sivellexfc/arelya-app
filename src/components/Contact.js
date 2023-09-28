import React from "react";
import map from "../sources/icons/map.svg";
import clock from "../sources/icons/clock.svg";
import phone from "../sources/icons/phone.svg";

import "../styles/contactComponent.css";

export default function Contact() {
  return (
    <div className="main-con-div">
      <div className="sub-main">
        <div className="element">
          <div className="img-icon-main-div">
            <div className="img-element-div">
              <img src={map}></img>
            </div>
          </div>
          <div className="p-div">
            <p>Konak Mah. 1. Badem Sok. Lotus Plaza No:26 B Blok 1.KAT</p>
            <p>Nilüfer / BURSA</p>
          </div>
        </div>

        <div className="element">
        <div className="img-icon-main-div">
            <div className="img-element-div">
              <img src={phone}></img>
            </div>
          </div>
          <div className="p-div">
            <p>E-posta:
                <br>
                </br>
              <a href="mailto:umit@arelya.com.tr">
                umit@arelya.com.tr
              </a>
            </p>
            <p>
              Tel / Phone: <br></br>{" "}
              <a href="tel:+902244436383">+90 (224) 443 63 83 </a>
            </p>
            <p>
              Gsm: <br></br> <a href="tel:+905331533903">+90 (533) 153 39 03</a>
            </p>
          </div>
        </div>

        <div className="element">
        <div className="img-icon-main-div">
            <div className="img-element-div">
              <img src={clock}></img>
            </div>
          </div>
          <div className="p-div">
            <p>Pazartesi-Cuma : 09:00 - 17:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
