import React from "react";

import DropdownNavbar from "../components/DropdownNavbar";
import TopFooter from "../components/TopFooter";
import Footer from "../components/Footer";

import "../styles/product.css";

import {AiOutlineArrowRight} from "react-icons/ai"

import image_1 from "../sources/karo-hali/image-025.png";
import image_2 from "../sources/karo-hali/image-026.png";
import image_3 from "../sources/karo-hali/image-027.png";
import image_4 from "../sources/karo-hali/image-028.png";
import image_5 from "../sources/karo-hali/image-095.jpg";
import image_6 from "../sources/karo-hali/image-096.jpg";

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
            <a href="/zemin-uygulamalari/homojen-vinil">
                <button className="button-pro">HOMOJEN VİNİL<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/heterojen-vinil">
                <button className="button-pro">
                  HETEROJEN VİNİL<AiOutlineArrowRight size={15}></AiOutlineArrowRight>
                </button>
              </a>
              <a href="/zemin-uygulamalari/spor-vinil">
                <button className="button-pro">SPOR VİNİL<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/kondaktif-vinil">
                <button className="button-pro">KONDAKTİF VİNİL<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/luks-vinil-karo">
                <button className="button-pro">LÜKS VİNİL KARO<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/aluminyum-supurgelik">
                <button className="button-pro">ALÜMİNYUM SÜPÜRGELİK<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/karo-hali">
                <button className="button-pro" style={{ color: "white", backgroundColor: "#1094cf" }}>KARO HALI<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/yukseltilmis-doseme-sistemleri">
                <button className="button-pro">YÜKSELTİLMİŞ DÖŞEME SİSTEMLERİ<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/tavan-uygulamalari/baffle-asma-tavan">
                <button className="button-pro">BAFFLE ASMA TAVAN<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/tavan-uygulamalari/petek-asma-tavan">
                <button className="button-pro">PETEK ASMA TAVAN<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/tavan-uygulamalari/mesh-asma-tavan">
                <button className="button-pro">MESH ASMA TAVAN<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
            </div>

            <div className="right-section">
              <div className="top-description-section">
                <div className="top-area-div">
                  <div className="top-image-div">
                    <img src={image_1}></img>
                    <img src={image_2}></img>
                    <img src={image_6}></img>
                  </div>
                  <div className="main-description">
                    <h3>KARO HALI</h3>
                    <div style={{marginBottom:"30px"}} className="divider"></div>
                    <p>
                      <strong>Karo halı nedir?</strong> Karo halı zemin kaplaması farklı boyutlarda ve şekillerde kesilmiş halı parçalarının düzenli bir desen oluşturacak şekilde birleştirildiği bir zemin kaplama sistemidir. Karo halılar genellikle yüksek yoğunluklu liflerden üretilir ve aşınmaya dayanıklı özelliklere sahiptir. 
                    </p>
                    <p>
                      Karo halı çeşidi ticari alanlarda çok tercih edilmesi ile beraber aynı zamanda devlet dairelerinde, bankalarda, kongre salonlarında, otellerde, ofis ve bürolarda, havaalanlarında ve daha bir çok alanlarda kullanılmaktadır.
                    </p>
                    <p>
                    Bu döşeme çeşidi aynı zamanda başka bir alana taşınabilme özelliği sayesinde kullanan kişiler tarafından daha düşük ekonomik maliyete sahip olması, kimyasal maddelere karşı dayanıklılığı ile beraber, ısı ve ses izolasyonu sağlaması, döşeme kolaylığı, bir çok desen ve rengin bulunması sebebiyle tercih edilmektedir.
                    </p>
                  </div>
                </div>
                <div className="bottom-seciton-div">
                  <div className="features">
                    <h3>ÖZELLİKLER</h3>
                    <div className="divider"></div>
                    <p>
                      <strong>Dayanıklılık</strong> Heterojen vinil kaplama, üst
                      tabakasının aşınmaya dayanıklı olması nedeniyle yoğun
                      trafik alanlarında uzun ömürlü bir çözüm sunar.
                    </p>
                    <p>
                      <strong>Kolay Bakım</strong> Su geçirmez ve leke tutmayan
                      bir yüzeye sahip olduğu için temizliği kolaydır. Sadece
                      düzenli süpürme ve ıslak bir bezle silme işlemi ile
                      temizlenebilir.
                    </p>
                    <p>
                      <strong>Hijyenik</strong> Antibakteriyel ve antifungal
                      özelliklere sahip olan bazı heterojen vinil kaplama
                      modelleri, hijyenik bir ortam sağlamak için uygundur.
                    </p>
                    <p>
                      <strong>Estetik Çeşitliliği</strong> Farklı renkler,
                      desenler ve dokularla sunulur, bu nedenle mekanlara
                      estetik bir görünüm katar. Ahşap, taş veya seramik gibi
                      doğal malzemelerin görünümünü taklit edebilir.
                    </p>
                    <p>
                      <strong>Su geçirmezlik</strong> Heterojen vinil kaplama,
                      suya dayanıklı özelliklere sahiptir ve nemli ortamlarda
                      veya ıslak alanlarda kullanılabilir.
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
  );
}
