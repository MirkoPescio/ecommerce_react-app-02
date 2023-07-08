import React from 'react'
import './css/newsletter.css'
import { Send } from '@mui/icons-material'


const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h2 className='newsletter__title'>Boletín informativo</h2>
      <p className='newsletter__description'>Obtenga actualizaciones oportunas de sus productos favoritos</p>
      <div className='newsletter__inputContainer'>
        <input className='newsletter__inputContainer__input' type='text' placeholder='Ingrese su e-mail' />
        <button className='newsletter__inputContainer__button'>
            <Send />
        </button>
      </div>
    </div>
  )
}

export default Newsletter
