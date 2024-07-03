import { useState } from 'react'
import evertecLogo from './assets/logorgb.png'
import viteLogo from './assets/LogoGsFalso2.png'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div className='info'>
        <h2 className='h2'>1025 E Hallandale Beach Blvd Ste 15 - 897</h2>
        <h2 className='h2'>Hallandale Beach, FL 33009 , USA</h2>
        <h2 className='h2'>11 5368 7186</h2>
      </div>
        <footer className="App-footer">
        &copy; 2024 GS. All rights reserved. Designed and coded in React.js by Guadalupe Barro Gil
      </footer>
    </>
  )
}

export default App
