import React from 'react'

import DropdownNavbar from "../components/DropdownNavbar";
import TopFooter from "../components/TopFooter";
import Footer from "../components/Footer";

import "../styles/product.css";

import image_1 from "../sources/kondaktif-vinil/image-013.png";
import image_2 from "../sources/kondaktif-vinil/image-014.png";
import image_3 from "../sources/kondaktif-vinil/image-015.png";
import image_4 from "../sources/kondaktif-vinil/image-016.png";
import image_5 from "../sources/kondaktif-vinil/image-093.png";

export default function () {
  return (
    <div>
      <TopFooter></TopFooter>
      <DropdownNavbar></DropdownNavbar>
      <div className="main">
        <div className="header-product">
          <div className="header-product-head">
            <h4>ZEMİN ÇÖZÜMLERİMİZ</h4>
            <div className="divider"></div>
          </div>
        </div>
        <div className="about-product">
          <div className="about-product-div">
            <div className="button-section">
            <a href="/homojen-vinil">
                <button className="button-pro">HOMOJEN VİNİL</button>
              </a>
              <a href="/heterojen-vinil">
                <button className="button-pro">
                  HETEROJEN VİNİL
                </button>
              </a>
              <a href="/spor-vinil">
                <button className="button-pro">SPOR VİNİL</button>
              </a>
              <a href="/kondaktif-vinil">
                <button className="button-pro" style={{ color: "white", backgroundColor: "#2c75c9" }}>KONDAKTİF VİNİL</button>
              </a>
              <a href="/luks-vinil-karo">
                <button className="button-pro">LÜKS VİNİL KARO</button>
              </a>
              <a href="/aluminyum-supurgelik">
                <button className="button-pro">ALÜMİNYUM SÜPÜRGELİK</button>
              </a>
              <a href="/karo-hali">
                <button className="button-pro">KARO HALI</button>
              </a>
              <a href="/yukseltilmis-doseme-sistemleri">
                <button className="button-pro">YÜKSELTİLMİŞ DÖŞEME SİSTEMLERİ</button>
              </a>
              <a href="/baffle-asma-tavan">
                <button className="button-pro">BAFFLE ASMA TAVAN</button>
              </a>
              <a href="/petek-asma-tavan">
                <button className="button-pro">PETEK ASMA TAVAN</button>
              </a>
              <a href="/mesh-asma-tavan">
                <button className="button-pro">MESH ASMA TAVAN</button>
              </a>
            </div>

            <div className="right-section">
              <div className="top-description-section">
                <div className="top-area-div">
                  <div className="top-image-div">
                    <img src={image_1}></img>
                    <img src={image_2}></img>
                  </div>
                  <div className="main-description">
                    <h3>KONDAKTİF VİNİL</h3>
                    <div className="divider"></div>
                    <p>
                      <strong>Kondaktif vinil nedir?</strong> Kondaktif vinil mükemmel aşınma dayanımı (Aşında grubu T) ve temizleme özellikleri için PUR ile güçlendirilmiş homojen, iletken, esnek zemin kaplamasıdır.
                    </p>
                    <p>
                      Gelişmiş iletkenlik özellikleri, sürekli ürünün içinden geçen siyah karbon tanecikleri ve saf karbon tabanı ile sağlanır.
                    </p>
                    <p>
                      Rulolar, standart zemin kaplama yapıştırıcısı ile döşenir. Karolar ve bakır şeritler her zaman iletken yapıştırıcı gerektirir.
                    </p>
                    <p>
                      Elektronik ve petrokimya endüstri, ameliyathaneler, bilgisayar odaları, steril odalar ve benzer alanlar kondaktif vinil'in uygulama alanlarıdır.
                    </p>
                  </div>
                </div>
                <div className="bottom-seciton-div">
                  <div className="features">
                    <h3>ÖZELLİKLER</h3>
                    <div className="divider"></div>
                    <p>
                      <strong>Elektrostatik Kontrol</strong> Kondaktif vinil kaplama, elektrostatik yüklerin doğru bir şekilde kontrol edilmesini sağlar. Bu özellik, elektronik cihazların, hassas ekipmanların ve elektrikli bileşenlerin güvenli bir şekilde kullanılmasını sağlar.
                    </p>
                    <p>
                      <strong>ESD Koruması</strong> Elektrostatik boşalmaya (ESD) karşı koruma sağlar. Bu sayede elektronik cihazların hasar görmesini ve veri kaybını önler.
                    </p>
                    <p>
                      <strong>Hijyenik</strong> Kondaktif vinil kaplamalar, kolay temizlenebilir ve hijyenik özelliklere sahiptir. Bu özellik, sağlık kurumları, laboratuvarlar ve elektronik üretim tesisleri gibi alanlarda önemli bir avantajdır.
                    </p>
                    <p>
                      <strong>Dayanıklılık</strong> Kondaktif vinil kaplamalar, dayanıklı yapılarıyla uzun ömürlü bir kullanım sağlar. Aşınmalara, çizilmelere ve kimyasal etkilere karşı dirençlidir.
                    </p>
                  </div>
                  <div className="bottom-images">
                    <img src={image_3}></img>
                    <img src={image_4}></img>
                    <img src={image_5}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
