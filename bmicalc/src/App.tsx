import { useState } from "react"
import { MetabolicRate } from "./Bmr"
import { Calculator } from "./Calculator"
import { Footer } from "./Footer"
import Heading from "./Heading"
import { FaSun } from "react-icons/fa";

function App() {

  const [isLight, setIsLight] = useState<boolean>(false);

  function changeColorSettings() {
    setIsLight(!isLight)
  }

  document.addEventListener("keydown", event => {
    if(event.key === "f") {
        changeColorSettings();
    }})
  
  return (
    <>
    <div className={`the-whole-thing ${isLight? "light-colors": "dark-colors"}`}>
    <button className="toggle-color-change" onClick={changeColorSettings}><FaSun size={30} color={`${isLight? "black" : "white"}`}/></button>
    <Heading lightMode={isLight}/>
    <Calculator lightMode={isLight}/>
    <Footer/>
    </div>
    </>
  )
}

export default App
