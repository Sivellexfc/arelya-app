import React from "react";

import "../styles/bottomFooter.css";

export default function () {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="sec-about-us">
            <h2>Bize Ulaşın</h2>
            <p>
              The href attribute requires a valid value to be accessible.
              Provide a valid, navigable address as the href value. If you
              cannot provide a valid href,
            </p>
            <ul className="ul-aboutus">
              <li>
                <p href="#">+90 (550)348 9933</p>
              </li>
              <li>
                <p href="#">umit@arelya.com.tr</p>
              </li>
              <li>
                <p href="#">@arelyazemintavan</p>
              </li>
              <li>
                <p>
                  Konak Mah. 1. Badem Sok. Lotus Plaza No:26 B Blok 1.KAT B01
                  Nilüfer / BURSA
                </p>
              </li>
            </ul>
          </div>
          <div className="sec-links">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d319.99778126515355!2d28.980802089189986!3d40.26799461523576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1687721216835!5m2!1sen!2str"
              width="600"
              height="250"
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
