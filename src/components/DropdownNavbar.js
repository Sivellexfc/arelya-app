import React from "react";
import "../styles/dropdownNavbar.css";
import logo from "../sources/logo2.svg"

export default function DropdownNavbar() {
  return (
    <div className="navbar-main-div">
      <header>
      <a href="/">
      <img class="logo" src={logo}>
      </img>
      </a>
        

        <input type="checkbox" id="menu-bar"></input>
        <label for="menu-bar">Menu</label>

        <nav className="navbar">
          <ul>
            <li>
              <a href="/">ANASAYFA</a>
            </li>
            <li>
              <a href="#">HAKKIMIZDA</a>
            </li>
            <li>
              <a href="#">HİZMETLER</a>
              <ul>
                <li><a href="#">ZEMİN</a>
                    <ul>
                        <li><a href="/heterojen-vinil">HETEROJEN VİNİL</a></li>
                        <li><a href="/homojen-vinil">HOMOJEN VİNİL</a></li>
                        <li><a href="/spor-vinil">SPOR VİNİL</a></li>
                        <li><a href="/kondaktif-vinil">KONDAKTİF VİNİL</a></li>
                        <li><a href="/luks-vinil-karo">LÜKS VİNİL KARO</a></li>
                        <li><a href="/aluminyum-supurgelik">ALÜMİNYUM SÜPÜRGELİK</a></li>
                        <li><a href="/karo-hali">KARO HALI</a></li>
                        <li><a href="/yukseltilmis-doseme-sistemleri">YÜKSELTİLMİŞ DÖŞEME</a></li>
                    </ul>
                    </li>
                <li><a href="#">TAVAN</a>
                    <ul>
                        <li><a href="/baffle-asma-tavan">BAFFLE ASMA TAVAN</a></li>
                        <li><a href="/petek-asma-tavan">PETEK ASMA TAVAN</a></li>
                        <li><a href="/mesh-asma-tavan">MESH TAVAN</a></li>
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
