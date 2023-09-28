import React from "react";
import Footer from "../components/Footer";
import TopFooter from "../components/TopFooter";
import DropdownNavbar from "../components/DropdownNavbar";

import wallpaper from "../sources/about-us/wallpaper.png";
import aspen from "../sources/about-us/aspen-logo.png";
import prosista from "../sources/about-us/prosista-logo.jpeg";
import tarket from "../sources/about-us/tarket-logo.png";

import "../styles/aboutUsPage.css";
import Contact from "../components/Contact";

export default function AboutUs() {
  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TopFooter></TopFooter>
      <DropdownNavbar></DropdownNavbar>
      <div>
        <img style={{width:"100%"}} src={wallpaper}></img>
      </div>

      <div className="about-pers-main">
        <div className="about-head">
          <h3>HAKKIMIZDA</h3>
          <div className="divider"></div>
        </div>
        <div>
          <p>
            Çağdaş teknolojiye hakim, kurumsallaşmış ve sürekli kendini
            iyileştiren yapımız ile <strong>"Sürekli ve Güvenilirlik"</strong>{" "}
            özelliğine sahip kaliteyi yaratarak markalaşmak ve sektöründe lider
            firma olmak. Seçkin çalışanlarımız ve güçlü teknik kadromuz ile
            yenilikçi, dinamik, verimli, güvenilir bir takım ruhu anlayışında
            kalite, zamandalık ve müşteri memnuniyeti ilkelerinden taviz
            vermeden dünya standartlarını hedefleyerek müşterilerine rekabetçi,
            güvenilir, kaliteli pratik çözüm ve hizmet sunmak.
          </p>
          <p>
            Müşteri memnuniyetini arttırmaya yönelik, müşterilerin mevcut ve
            gelecekteki beklentilerini karşılayacak biçimde, tüm çalışanların
            aktif görev aldığı bir takım ruhu ile teknolojik gelişmelere göre
            kendini yenileyen ve iyileştiren bir yapıda; inşaat sektöründe
            faaliyet göstermek.
          </p>
        </div>
        <div className="collabs">
            <img className="ab-img" src={tarket}></img>
            <img className="ab-img" src={aspen}></img>
            <img style={{height:"40px"}} className="ab-img" src={prosista}></img>
        </div>
      </div>
      
      <Footer></Footer>

      
    </div>
  );
}
