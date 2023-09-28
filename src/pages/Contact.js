import React from "react";
import DropdownNavbar from "../components/DropdownNavbar";
import TopFooter from "../components/TopFooter";
import Contact from "../components/Contact";

export default function () {
  return (
    <div style={{backgroundColor:"white",minHeight:"100vh",display:"flex",flexDirection:"column"}}>
        <TopFooter></TopFooter>
        <DropdownNavbar></DropdownNavbar>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523.4508832350232!2d28.98549513891742!3d40.21124804119023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca15538583e87f%3A0x7481877e4a514789!2sLotus%20Office%20Bursa!5e0!3m2!1sen!2str!4v1689937331847!5m2!1sen!2str"
          width="100%"
          height="350px"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Contact></Contact>
      <div style={{ marginTop: "auto",padding: "20px", backgroundColor:"#fafafa" }} className="bottom-copyrights-area">
      <p>Copyright © 2023 Arelya. Tüm hakları saklıdır.</p>
        <p>Bu web sitesinin içeriği, metinleri, görselleri ve tasarımı Arelya'ya aittir ve yasalarla korunmaktadır. İzinsiz kullanımı yasaktır.</p>
      
      </div>
    </div>
  );
}
