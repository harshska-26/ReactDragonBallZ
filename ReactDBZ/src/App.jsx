import { useEffect, useState } from 'react'
import './App.css'
import { DragonBallData } from './services/Dragonball.Service'
import { CharCard } from './components/CharCard.Component/CharCard.Component'

const App = () => {
  const [characterDet, setCharacterDet] = useState([])
  
  useEffect(() => {
    const dataFunc = async () => {
      const data = await DragonBallData();
      setCharacterDet(data)
    }
    dataFunc();
  }, [])

  // console.log(characterDet)

  return (
    <>
      <nav id="navbar">
        <img id="homeimg" src="https://web.dragonball-api.com/images-compress/android-icon-192x192.webp"/>
        <div id="rightside">
            <a href="https://web.dragonball-api.com/documentation">Docs</a>
            <a href="https://web.dragonball-api.com/about">About</a>
            <a id="supportbutton" href="https://web.dragonball-api.com/support">SUPPORT US</a>
        </div>
    </nav>

    <div id="image-container">
    <img src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp" id="bgimg"/>
    <div id="char-container">
      {characterDet.map((char) => {
        return <CharCard key={char.id} items={char}/>
      })}
      </div>
    </div>

    <h1 id="PlanetsHeading" align = "center">Planets</h1>

    <div id="planet-container"></div>
    </>
  )
}

export default App;
