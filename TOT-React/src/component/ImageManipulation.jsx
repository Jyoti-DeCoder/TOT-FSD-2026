import React, { useState } from 'react'
import cat from '../images/cat2.png'

function ImageManipulation() {
    const[increaseHeigth,setIncreaseHeigth] = useState(200)
    const[increaseWeigth,setIncreaseWeigth] = useState(200)
    const [red,setRed]=useState(0);
const [green,setGreen]=useState(0);
const [blue,setBlue]=useState(0);
const[rotateCat,setRotateCat]=useState(45);
function setColor() {
  setRed(Math.floor(Math.random() * 256));
  setGreen(Math.floor(Math.random() * 256));
  setBlue(Math.floor(Math.random() * 256));
}


    function increaseCatHeigth()
    {
        setIncreaseHeigth(increaseHeigth+50);
    }
    function decreaseCatHeigth()
    {
        setIncreaseHeigth(increaseHeigth-20);
    }
    function increaseCatWeigth()
    {
        setIncreaseWeigth(increaseWeigth+50);
    }
    function decreaseCatWeigth()
    {
        setIncreaseWeigth(increaseWeigth-20);
    }
    
  return (
    <div>
    <div style={{ border:'2px solid red',backgroundColor:`rgb(${red},${green},${blue})`, transform:`rotate(${rotateCat}deg)` }} height={200} width={200}>
        <img src = {cat} height={increaseHeigth} width={increaseWeigth} />
    </div>
    <div>
        <button onClick={increaseCatHeigth}>increaseHeigth</button>
        <button onClick={decreaseCatHeigth}>decreaseHeigth</button>
        <button onClick={increaseCatWeigth}>increaseWeigth</button>
        <button onClick={decreaseCatWeigth}>decreaseWeigth</button>
        <button onClick={setColor}>changeBackgroundColor</button>
        <button>RotateImage</button>
    </div>
    </div>
  )
}

export default ImageManipulation