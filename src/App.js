import './App.css';
import React, {useState,useEffect} from "react";
import back1 from "./assets/img1.jpg";
import back2 from "./assets/img2.jpg";
import back3 from "./assets/img3.jpg";
import back4 from "./assets/img4.jpg";
import back5 from "./assets/img5.jpg";
import back6 from "./assets/img6.jpg";
import back7 from "./assets/img7.jpg";
import back8 from "./assets/img8.jpg";
import back9 from "./assets/img9.jpg";
import back10 from "./assets/img10.jpg";



function App() {
  const backgrounds = [back1,back2,back3,back4,back5,back6,back7,back8,back9,back10];
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const [randomBackground,setRandomBackground]=useState(undefined);

  useEffect(()=>{
    setRandomBackground(backgrounds[randomIndex])

  },[])


  return (
    <div style={{background: `url(${randomBackground})`}} className="App">
      <a href="https://open.spotify.com/artist/2SWCCQkbhdMgDMKHt2rKhV?si=_PbItQNHRDSSyJPfP5hdJw" target="_blank"><button type="button" class="nes-btn is-error"><span className="number-style">404</span><br/><span className="error-text-style">Error</span></button></a>
      
    </div>
  );
}

export default App;
