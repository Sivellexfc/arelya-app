import React from "react";
import "../styles/dropdownNavbar.css";

export default function DropdownNavbar() {
  return (
    <div className="navbar-main-div">
      <header>
        <a href="#" className="logo">
          ARELYA
        </a>
        

        <input type="checkbox" id="menu-bar"></input>
        <label for="menu-bar">Menu</label>

        <nav className="navbar">
          <ul>
            <li>
              <a href="#">ANASAYFA</a>
            </li>
            <li>
              <a href="#">HAKKIMIZDA</a>
            </li>
            <li>
              <a href="#">HİZMETLER</a>
              <ul>
                <li><a href="#">ZEMİN KAPLAMA</a></li>
                <li><a href="#">TAVAN KAPLAMA</a>
                    <ul>
                        <li><a href="#">ASMA TAVAN</a></li>
                        <li><a href="#">ALÇI TAVAN</a></li>
                    </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">PROJELERİMİZ</a>
            </li>
            <li>
              <a href="#">İLETİŞİM</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
