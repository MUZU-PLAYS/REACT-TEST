import React from 'react'
import la_1 from '..//..//assets/PYTHON2.png'
import la_2 from '..//..//assets/REACT.png'
import la_3 from '..//..//assets/CSHARP.png'
import './Programs.css'
const Programs = () => {
  return (
    <div className='Programs'>
        <div className="lad1">
            <img src={la_1} alt="problem" />
            <div className='caption'>
              <p> LEARN PYTHON </p>
            </div>
            </div>      
        <div className="lad2">
            <img src={la_2} alt="problem" />
            <div className='caption'>
              <p> LEARN REACT</p>
            </div>
            </div>      
        <div className="lad3">
            <img src={la_3} alt="problem" />
            <div className='caption'>
              <p> LEARN C-SHARP </p>
            </div>
            </div>      
    </div>
  )
}


export default Programs
