import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai"

import "../styles/aboutArea.css";
import zemin from "../sources/referanslar-logo/deneme/zemin-2.png";
import tavan from "../sources/referanslar-logo/deneme/tavan.png";

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
            Yaşam alanlarınızı renklendirin, tasarımı zemine taşıyın. Dayanıklılık ve estetiği bir araya getiren zemin çözümlerimizle mekanlarınızı yeniden şekillendirin. Siz hayal edin, biz zemine taşıyalım. Detaylı koleksiyonumuzu keşfedin.
            </p>
            <div>
              <a href="/zemin-uygulamalari/homojen-vinil">
                <button>HOMOJEN VİNİL
                  <AiOutlineArrowRight size={15}></AiOutlineArrowRight>
                </button>
              </a>
              <a href="/zemin-uygulamalari/heterojen-vinil">
                <button>HETEROJEN VİNİL<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/spor-vinil">
                <button>SPOR VİNİL<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/kondaktif-vinil">
                <button>KONDAKTİF VİNİL<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/luks-vinil-karo">
                <button>LÜKS VİNİL KARO<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/aluminyum-supurgelik">
                <button>ALÜMİNYUM SÜPÜRGELİK<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/karo-hali">
                <button>KARO HALI<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/yukseltilmis-doseme-sistemleri">
                <button>YÜKSELTİLMİŞ DÖŞEME SİSTEMLERİ<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
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
            Mekanların Tavanındaki Estetik Dokunuş! Farklı tarz ve ihtiyaçlara uygun asma tavan çözümleriyle mekanlarınıza yeni bir boyut kazandırın. Modern tasarımlar, akustik çözümler ve daha fazlasıyla yaşam alanlarınızı özelleştirin. Tavanı sanatla buluşturan koleksiyonumuzu keşfedin.
            </p>
            <div>
              <a href="/tavan-uygulamalari/baffle-asma-tavan">
                <button>
                  BAFFLE ASMA TAVAN<AiOutlineArrowRight size={15}></AiOutlineArrowRight>
                </button>
              </a>
              <a href="/tavan-uygulamalari/petek-asma-tavan">
                <button>
                  PETEK ASMA TAVAN<AiOutlineArrowRight size={15}></AiOutlineArrowRight>
                </button>
              </a>
              <a href="/tavan-uygulamalari/mesh-asma-tavan">
                <button>
                  MESH ASMA TAVAN<AiOutlineArrowRight size={15}></AiOutlineArrowRight>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
