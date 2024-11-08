import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [hesabu, jihesabu] =useState(0)
  function handleClick(){
     jihesabu((hesabu)=> hesabu+1)
  }

  return (
    <>
      <h1>Wewe ni mbwa</h1>
      <h2>{hesabu}</h2>
      <button onClick={handleClick}> kuku</button>
    </>
  )
}

export default App
