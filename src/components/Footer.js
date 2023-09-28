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
                <GrMail 
                color="rgb(156, 156, 156)" size={30} style={{ paddingRight: "5px" }}></GrMail>
                <p href="#" style={{ paddingBottom: "0", fontWeight: "600" }}>
                  umit@arelya.com.tr
                </p>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <AiFillInstagram
                color="rgb(156, 156, 156)"
                  size={30}
                  style={{ paddingRight: "5px" }}
                ></AiFillInstagram>
                <p href="#" style={{ paddingBottom: "0", fontWeight: "600" }}>
                  @arelyazemintavan
                </p>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <AiFillPhone
                color="rgb(156, 156, 156)"
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
            className="iframe-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190.43134981174794!2d28.986706638064796!3d40.21125181104511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca15538583e87f%3A0x7481877e4a514789!2sLotus%20Office%20Bursa!5e0!3m2!1sen!2str!4v1689935642309!5m2!1sen!2str"
              width="600"
              height="200"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </footer>
      <div className="bottom-copyrights-area">
        <p>Copyright © 2023 Arelya. Tüm hakları saklıdır.</p>
        <p>Bu web sitesinin içeriği, metinleri, görselleri ve tasarımı Arelya'ya aittir ve yasalarla korunmaktadır. İzinsiz kullanımı yasaktır.</p>
      </div>
    </div>
  );
}
