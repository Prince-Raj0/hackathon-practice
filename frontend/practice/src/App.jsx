import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <h1>this is practice</h1>
    </>
  )
}

export default App
