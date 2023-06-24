import React from 'react'
import "../styles/topFooter.css"

export default function() {
  return (
    <div className="top-footer">
            <ul className='left-ul'>
                <li><a className='contacts first-li' href="tel:+902244436383">+90 (224) 443 63 83</a></li>
                <li><a className='contacts' href="tel:+902244436383">+90 (533) 153 39 03</a></li>
            </ul>
            <ul className='right-ul'>
            <li><a className='contacts first-li' href="https://www.instagram.com/arelyazemintavan/" target="_blank">@arelyazemintavan</a></li>
            </ul>
    </div>
  )
}
