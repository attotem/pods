import React from 'react'
import "./Card.css";

function MainMenuCard({img,title}) {
  return (
    <div className='menu' onClick = "window.location.href='https://w3docs.com';">
        <div className='img_container'>
            <img src ={img} className='img_menu' alt=""/>
        </div>
      
        <div className='menutext'>{title}</div>
    </div>
  )
}

export default MainMenuCard
