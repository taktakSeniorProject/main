import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import SingUp from './components/SingUp/SingUp.jsx'
const App = () => {

  return (
    <div>

      <SingUp/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
