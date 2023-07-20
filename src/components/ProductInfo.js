import React from "react";
import "../styles/product.css";

import image_1 from "../sources/homojen-vinil/image-001.png";
import image_2 from "../sources/homojen-vinil/image-002.png";
import image_3 from "../sources/homojen-vinil/image-003.png";
import image_4 from "../sources/homojen-vinil/image-004.png";
import image_5 from "../sources/homojen-vinil/image-090.jpg";

export default function ProductInfo({header,descriptionFirst,descriptionSecond,descriptionThird,featuresFirst,featuresSecond,featuresThird,fea}) {
  return (
    <div className="main">
      <div className="header-product">
        <div className="header-product-head">
          <h4>HOMOJEN VİNİL</h4>
          <div className="divider"></div>
        </div>
      </div>
      <div className="about-product">
        <div className="about-product-div">
          <div className="button-section">
            <button style={{color:"white",backgroundColor:"#2c75c9"}}>HOMOJEN VİNİL</button>
            <button>HETEROJEN VİNİL</button>
            <button>SPOR VİNİL</button>
            <button>KONDAKTİF VİNİL</button>
            <button>LÜKS VİNİL</button>
            <button>ALÜMİNYUM VİNİL</button>
            <button>KARO VİNİL</button>
            <button>YÜKSELTİLMİŞ DÖŞEME</button>
            <button>BAFFLE ASMA TAVAN</button>
            <button>PETEK ASMA TAVAN</button>
            <button>MESH ASMA TAVAN</button>
          </div>

          <div className="right-section">
            <div className="top-description-section">
              <div className="top-area-div">
              <div className="top-image-div">
                <img src={image_1}></img>
                <img src={image_2}></img>
              </div>
              <div className="main-description">
                <h3>HOMOJEN VİNİL</h3>
                <div className="divider"></div>
                <p>
                  <strong>Homojen vinil nedir?</strong> Homojen vinil zemin
                  kaplaması, tek katmanlı bir yapıya sahip olan ve içerisinde
                  renk pigmentleri, aşınma direncini artıran katkı maddeleri ve
                  stabilizatörler bulunan bir zemin kaplama malzemesidir.
                </p>
                <p>
                  Homojen vinil zaman karşı koyan tarzların ve çok yönlü
                  renkleriyle, kompakt homojen vinil zemin kaplamaları, yoğun ve
                  çok yoğun trafikli alanlar için sağlam ve ultra-dayanaklı
                  çözümler sağlar.
                </p>
                <p>
                  Kaliteli hammaddeler ve yenilikçi yüzey korumaları uzun ömürlü
                  performans ve görünüm, az bakım ve mükemmel yaşam dögü
                  maliyetleri sağlar. Sağlık, eğitim, satış ve sanayi gibi
                  ticari uygulamalar için idealdir.
                </p>
              </div>
              </div>
              <div className="bottom-seciton-div">
                <div className="features">
                  <h3>ÖZELLİKLER</h3>
                  <div className="divider"></div>
                  <p>
                    <strong>Dayanıklılık</strong> Homojen vinil zemin kaplaması,
                    yoğun trafik alanlarına dayanacak şekilde tasarlanmıştır.
                    Aşınmaya ve çizilmelere karşı dirençlidir.
                  </p>
                  <p>
                    <strong>Kolay Bakım</strong> Yüzeyi pürüzsüz olduğu için
                    temizliği kolaydır. Sadece düzenli süpürme ve nemli bir
                    bezle silme işlemi ile temizlenebilir.
                  </p>
                  <p>
                    <strong>Hijyenik</strong> Homojen vinil, bakteri ve mantar
                    oluşumunu engelleyen antibakteriyel özelliklere sahiptir. Bu
                    nedenle hijyenik bir zemin kaplama çözümü sunar.
                  </p>
                  <p>
                    <strong>Renk ve Desen Çeşitliliği</strong> Geniş renk ve
                    desen seçenekleri sunan homojen vinil, mekanlara estetik bir
                    görünüm katar.
                  </p>
                  <p>
                    <strong>Ses Yalıtımı Ses emici</strong> özellikleri
                    sayesinde, gürültüyü azaltır ve ortamda daha sessiz bir
                    atmosfer oluşturur.
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
  );
}
