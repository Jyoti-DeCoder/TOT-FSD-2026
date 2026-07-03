import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Gallery from './component/Gallery'
import MyCounter from './component/MyCounter'
import ImageManipulation from './component/ImageManipulation'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Login'
function App() {
  const [count, setCount] = useState(0)
let a = 100;
  return (
    <div>
      <h2  style = {{color:'red'}}>Welcome to MERN Stack Development</h2>
          {/* <h1 style={{backgroundColor: 'pink',color:'blue'}}>value of a = {a}</h1> */}
          {/* <Gallery /> */}
          {/* <MyCounter /> */}
          {/* <ImageManipulation /> */}
          <Login />
          </div>
  )
}

export default App
