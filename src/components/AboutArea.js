import React from 'react'
import '../styles/aboutArea.css'
import img1 from '../sources/kare_image1.jpg'
import img2 from '../sources/kare_image2.jpg'
import img3 from '../sources/kare_image4.jpg'


export default function () {
  return (
    <div className='main-div'>
        <div className='about-content-sec'>
            <div>
                <h3>HAKKIMIZDA</h3>
            </div>
        </div>
        <div className='about-sec'>
            <div className='about-images'>
                <div className='about-image'><img src={img1}></img></div>
                <div className='about-image'><img src={img2}></img></div>
            </div>
            <div className='about-texts'>
                <h2>
                    FİRMA PERSPEKTİFİ
                </h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type 
                 specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was popularised in
                   the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                 and more recently with desktop publishing software like Aldus 
                 PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type 
                 specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was popularised in
                   the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                 and more recently with desktop publishing software like Aldus 
                 PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    </div>
  )
}
