import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/aboutArea.css";
import zemin from "../sources/referanslar-logo/deneme/zemin-2.png";
import tavan from "../sources/referanslar-logo/deneme/tavan.png";
import img2 from "../sources/tavan.png";

export default function () {
  return (
    <div className="main-about-pro">
      <div className="zemin-sec-top">
        <div className="zemin-images">
          <img src={zemin}></img>
        </div>
        <div className="zemin-about-div">
          <div className="zemin-about">
            <h3>Neler Yapıyoruz?</h3>
            <h1>ZEMİN KAPLAMALARI</h1>
            <p>
              Otomatik kapılar, endüstriyel kapılar, panjur kepenk sistemleri,
              PVC branda kapılar, fotoselli kapılar, bahçe garaj kapıları,
              alüminyum doğrama, korkuluk, cephe sistemleri, cam balkon ve PVC
              sineklik üretimi yapan Firma Yapı Otomasyon kaliteli ürünler,
              işçilik ve müşteriyi ilk sıraya alan profesyonel bir hizmet sunar.
            </p>
            <div>
              <a href="/homojen-vinil">
                <button>HOMOJEN VİNİL</button>
              </a>
              <a href="/heterojen-vinil">
                <button>HETEROJEN VİNİL</button>
              </a>
              <a href="/spor-vinil">
                <button>SPOR VİNİL</button>
              </a>
              <a href="/kondaktif-vinil">
                <button>KONDAKTİF VİNİL</button>
              </a>
              <a href="/luks-vinil-karo">
                <button>LÜKS VİNİL KARO</button>
              </a>
              <a href="/aluminyum-supurgelik">
                <button>ALÜMİNYUM SÜPÜRGELİK</button>
              </a>
              <a href="/karo-hali">
                <button>KARO HALI</button>
              </a>
              <a href="/yukseltilmis-doseme-sistemleri">
                <button>YÜKSELTİLMİŞ DÖŞEME SİSTEMLERİ</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="zemin-sec">
        <div className="zemin-images">
          <img src={tavan}></img>
        </div>
        <div className="zemin-ab-div">
          <div className="zemin-about">
            <h3>Neler Yapıyoruz?</h3>
            <h1>ASMA TAVAN SİSTEMLERİ</h1>
            <p>
              Otomatik kapılar, endüstriyel kapılar, panjur kepenk sistemleri,
              PVC branda kapılar, fotoselli kapılar, bahçe garaj kapıları,
              alüminyum doğrama, korkuluk, cephe sistemleri, cam balkon ve PVC
              sineklik üretimi yapan Firma Yapı Otomasyon kaliteli ürünler,
              işçilik ve müşteriyi ilk sıraya alan profesyonel bir hizmet sunar.
            </p>
            <div>
              <a href="/baffle-asma-tavan">
                <button>
                  BAFFLE ASMA TAVAN
                </button>
              </a>
              <a href="/petek-asma-tavan">
                <button>
                  PETEK ASMA TAVAN
                </button>
              </a>
              <a href="/mesh-asma-tavan">
                <button>
                  MESH ASMA TAVAN
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
