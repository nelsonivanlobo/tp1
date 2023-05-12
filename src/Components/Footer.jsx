import React from 'react'
import ig from "../assets/iglogo.jpg"
import face from "../assets/facelogo.png"

const Footer = () => {
  return (
    <div>
        <a href="https://www.instagram.com/"><img className='ig' src={ig} alt="" /></a>
        <a href="https://es-la.facebook.com/"><img className='face' src={face} alt="" /></a>
        <p>Derechos reservados Nelson lobo</p>
        

    </div>
  )
}

export default Footer