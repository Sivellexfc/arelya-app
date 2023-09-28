import React from "react";
import "../styles/topFooter.css";

import {AiFillPhone,AiFillInstagram} from "react-icons/ai"

export default function () {
  return (
    <div className="top-footer">
      <ul className="left-ul">
        <li>
          
          <a className="contacts first-li" href="tel:+902244436383"><AiFillPhone color="#9c9c9c" style={{marginRight:"5px"}} size={20}></AiFillPhone>
            (224) 443 63 83
          </a>
        </li>
        <li>
          <a className="contacts" href="tel:+902244436383"><AiFillPhone color="#9c9c9c" style={{marginRight:"5px"}} size={20}></AiFillPhone>
            90 (533) 153 39 03
          </a>
        </li>
      </ul>
      <ul className="right-ul">
        <li>
          <a
            className="contacts first-li"
            href="https://www.instagram.com/arelyazemintavan/"
            target="_blank"
          >
            <AiFillInstagram color="#9c9c9c" size={25} style={{marginRight:"5px"}}></AiFillInstagram>
            @arelyazemintavan
          </a>
        </li>
      </ul>
    </div>
  );
}
