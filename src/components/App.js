import React,{useState} from 'react'
import '../styles/App.css';
import img from '../image.jpeg'
const App = () => {
const [height, setHeight] = useState(320);
const [width, setWidth] = useState(320);
  return (
    <div id="main">
      <img src={img} id="resizable-img" style={{width:`${width}px`,height:`${height}px`}}></img>
    <br/>
      <input type="range" max="800" min="100" value={height} onChange={(e) => setHeight(e.target.value)} id="height-slider"></input>Height
      <br/>
      <input type="range" max="800" min="100" value={width} onChange={(e) => setWidth(e.target.value)} id="width-slider"></input>Width

    </div>
  )
}


export default App;
