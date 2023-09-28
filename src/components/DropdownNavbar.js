import React from "react";
import "../styles/dropdownNavbar.css";
import logo from "../sources/logo2.svg";

export default function DropdownNavbar() {
  return (
    <div className="navbar-main-div">
      <header>
        <a href="/">
          <img class="logo" src={logo}></img>
        </a>

        <input type="checkbox" id="menu-bar"></input>
        <label for="menu-bar">Menu</label>

        <nav className="navbar">
          <ul>
            <li>
              <a href="/">ANASAYFA</a>
            </li>
            <li>
              <a href="/hakkimizda">HAKKIMIZDA</a>
            </li>
            <li>
              <a href="#">ZEMİN UYGULAMALARI</a>
              <ul>
                  <li>
                    <a href="/zemin-uygulamalari/heterojen-vinil">HETEROJEN VİNİL</a>
                  </li>
                  <li>
                    <a href="/zemin-uygulamalari/homojen-vinil">HOMOJEN VİNİL</a>
                  </li>
                  <li>
                    <a href="/zemin-uygulamalari/spor-vinil">SPOR VİNİL</a>
                  </li>
                  <li>
                    <a href="/zemin-uygulamalari/kondaktif-vinil">KONDAKTİF VİNİL</a>
                  </li>
                  <li>
                    <a href="/zemin-uygulamalari/luks-vinil-karo">LÜKS VİNİL KARO</a>
                  </li>
                  <li>
                    <a href="/zemin-uygulamalari/aluminyum-supurgelik">ALÜMİNYUM SÜPÜRGELİK</a>
                  </li>
                  <li>
                    <a href="/zemin-uygulamalari/karo-hali">KARO HALI</a>
                  </li>
                  <li>
                    <a href="/zemin-uygulamalari/yukseltilmis-doseme-sistemleri">
                      YÜKSELTİLMİŞ DÖŞEME
                    </a>
                  </li>
                
              </ul>
            </li>

            <li>
              <a href="#">TAVAN UYGULAMALARI</a>
              <ul>
                    <li>
                      <a href="/tavan-uygulamalari/baffle-asma-tavan">BAFFLE ASMA TAVAN</a>
                    </li>
                    <li>
                      <a href="/tavan-uygulamalari/petek-asma-tavan">PETEK ASMA TAVAN</a>
                    </li>
                    <li style={{ borderBottom: "1px solid rgba(0,0,0,.1)" }}>
                      <a href="/tavan-uygulamalari/mesh-asma-tavan">MESH TAVAN</a>
                    </li>
                  </ul>
            </li>

            <li>
              <a href="/iletisim">İLETİŞİM</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
