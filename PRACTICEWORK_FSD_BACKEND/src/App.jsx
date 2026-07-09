import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home' 
import Registration from './component/Registration'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
     <Routes>
      <Route path = '/' element = {<Home/>}></Route>
      <Route path = '/login' element = {<Login/>}></Route>
      <Route path = '/register' element = {<Registration/>}></Route>
      <Route path = '/dashboard' element = {<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter> 
  )
}

export default App
