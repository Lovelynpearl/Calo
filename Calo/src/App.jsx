import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card"> */}
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
          {/* count is {count} */}
        {/* </button> */}
        {/* <p> */}
          {/* Edit <code>src/App.jsx</code> and save to test HMR */}
        {/* </p> */}
      {/* </div> */}
      {/* <p className="read-the-docs"> */}
        {/* Click on the Vite and React logos to learn more */}
      {/* </p> */}
    </>
  )
}

export default App
