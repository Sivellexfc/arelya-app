import React from "react";
import "../styles/dropdownNavbar.css";
import logo from "../sources/logo2.svg"

export default function DropdownNavbar() {
  return (
    <div className="navbar-main-div">
      <header>
      <img class="logo" src={logo}>
      </img>
        

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
                <li><a href="#">ZEMİN</a>
                    <ul>
                        <li><a href="#">HETEROJEN VİNİL</a></li>
                        <li><a href="#">HOMOJEN VİNİL</a></li>
                        <li><a href="#">SPOR VİNİL</a></li>
                        <li><a href="#">KONDAKTİF VİNİL</a></li>
                        <li><a href="#">LÜKS VİNİL</a></li>
                        <li><a href="#">ALÜMİNYUM SÜPÜRGELİK</a></li>
                        <li><a href="#">KARO HALI</a></li>
                        <li><a href="#">YÜKSELTİLMİŞ DÖŞEME</a></li>
                    </ul>
                    </li>
                <li><a href="#">TAVAN</a>
                    <ul>
                        <li><a href="#">BAFFLE ASMA TAVAN</a></li>
                        <li><a href="#">PETEK ASMA TAVAN</a></li>
                        <li><a href="#">MESH TAVAN</a></li>
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
