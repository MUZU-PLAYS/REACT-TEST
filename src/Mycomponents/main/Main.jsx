import React from 'react'
import './Main.css'
import dark_arrow from '..//..//assets/dark-arrow.png'
const Main = () => {
  return (
    <div className='Main container'>
      <div className="Main-text">

            <h1><span className='MUZ'>MUZU</span><span className='TEC'>TECH</span><span className='SAVV'>SAVVY</span> </h1>
            <button className="btn">
                Explore More
                <img src={dark_arrow} alt="" />
            </button>
      </div>
    </div>
  )
}

export default Main
