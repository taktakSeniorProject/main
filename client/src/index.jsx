import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import SingUp from './components/SingUp/SingUp.jsx'
import Login from './components/Login/Login.jsx'
const App = () => {

  return (
    <div>

      <SingUp/>
      <Login/>
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
