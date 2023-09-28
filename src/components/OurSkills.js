import React from "react";
import "../styles/ourskills.css";
import logo1 from "../sources/our-skills/memnuniyet-mavi.svg";
import logo2 from "../sources/our-skills/uzmanlik-mavi.svg";
import logo3 from "../sources/our-skills/inovasyon-mavi.svg";


export default function () {
  return (
    <div>
      <div >
        <div className="header">
          <h3>Bizi neden seçmelisiniz?</h3>
          <h1>ÇALIŞMA POLİTİKALARIMIZ</h1>
          <div className="divider"></div>
        </div>
        <div className="skill-sec">
          <div className="skill">
            <div>
                <img src={logo3} style={{width:'80px'}}></img>
            </div>
            <div className="div-desc-sec">
            <h4>Yüksek Kalite ve İnovasyon</h4>
            <p className="skill-p">
              Yenilikçi çözümlerle yüksek kaliteli zemin ve asma tavan
              sistemleri sunuyoruz. Müşterilerimizin beklentilerini aşmak için
              sürekli olarak kendimizi geliştiriyoruz.
            </p>
            </div>
          </div>
          <div className="skill">
          <div>
                <img src={logo1} style={{width:'80px'}}></img>
            </div>
            <div className="div-desc-sec">
            <h4>Müşteri Memnuniyetine Odaklılık</h4>
            <p >
              Müşterilerimizin ihtiyaçlarına odaklanarak en iyi deneyimi
              sunuyoruz. İşbirliği ve iletişimle müşterilerimizle yakın
              ilişkiler kuruyoruz ve onların memnuniyetini sağlıyoruz.
            </p>
            </div>
          </div>
          <div className="skill">
          <div>
                <img src={logo2} style={{width:'80px'}}></img>
            </div>
            <div className="div-desc-sec">
            <h4>Uzmanlık ve Deneyim</h4>
            <p className="skill-p">
              Zemin ve asma tavan sistemleri alanındak köklü çözüm
              ortaklarımızla beraber çalışıyoruz. Deneyimimizi müşterilerimizin
              lehine kullanarak en iyi çözümleri sunuyoruz.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
