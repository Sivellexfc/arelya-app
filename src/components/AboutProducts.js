import React from "react";
import "../styles/aboutArea.css";
import img1 from "../sources/zemin.png";
import img2 from "../sources/tavan.png";

export default function () {
  return (
    <div className="main-about-pro">
      <div className="zemin-sec-top">
        <div className="zemin-images">
          <img src={img1}></img>
        </div>
        <div className="zemin-about-div">
        <div className="zemin-about">
          <h3>Neler Yapıyoruz?</h3>
          <h1>ZEMİN KAPLAMALARI</h1>
          <p>
            Otomatik kapılar, endüstriyel kapılar, panjur kepenk sistemleri, PVC
            branda kapılar, fotoselli kapılar, bahçe garaj kapıları, alüminyum
            doğrama, korkuluk, cephe sistemleri, cam balkon ve PVC sineklik
            üretimi yapan Firma Yapı Otomasyon kaliteli ürünler, işçilik ve
            müşteriyi ilk sıraya alan profesyonel bir hizmet sunar.
          </p>
          <div>
            <button>HOMOJEN VİNİL</button>
            <button>HETEROJEN VİNİL</button>
            <button>SPOR VİNİL</button>
            <button>KONDAKTİF VİNİL</button>
            <button>LÜKS VİNİL</button>
            <button>ALÜMİNYUM VİNİL</button>
            <button>KARO VİNİL</button>
            <button>YÜKSELTİLMİŞ DÖŞEME</button>
          </div>
        </div>
        </div>
      </div>
      <div className="zemin-sec">
        <div className="zemin-images">
          <img src={img2}></img>
        </div>
        <div className="zemin-ab-div">
        <div className="zemin-about">
          <h3>Neler Yapıyoruz?</h3>
          <h1>ASMA TAVAN SİSTEMLERİ</h1>
          <p>
            Otomatik kapılar, endüstriyel kapılar, panjur kepenk sistemleri, PVC
            branda kapılar, fotoselli kapılar, bahçe garaj kapıları, alüminyum
            doğrama, korkuluk, cephe sistemleri, cam balkon ve PVC sineklik
            üretimi yapan Firma Yapı Otomasyon kaliteli ürünler, işçilik ve
            müşteriyi ilk sıraya alan profesyonel bir hizmet sunar.
          </p>
          <div>
            <button>HOMOJEN VİNİL</button>
            <button>HETEROJEN VİNİL</button>
            <button>SPOR VİNİL</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
