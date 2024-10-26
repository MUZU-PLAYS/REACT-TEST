import React from 'react'
import NavBar from './Mycomponents/NavBar/NavBar'
import Main from './Mycomponents/main/Main'
import Programs from './Mycomponents/Languages/Programs'
import TITLE from './Mycomponents/TITLE/TITLE'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Main/>
      <div className="container">
        <TITLE/>
      <Programs/>
      </div>
     
      
    </div>
  )
}

export default App
