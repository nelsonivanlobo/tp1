import React from 'react'
import fotoperfil from "../assets/nelson.jpg"

const Header = () => {
    return (
    <div className='div_header'>
            <h1>NELSON LOBO</h1>
            <img src={fotoperfil} className='foto_perfil' alt="" />

    </div>
  )
}

export default Header