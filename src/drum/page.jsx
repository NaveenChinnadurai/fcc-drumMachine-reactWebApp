import './style.css'
import { useState } from 'react'
import TurnOffOn from './compo/turnOffOn'
import {keys} from './script.js'

function Drum() {
  const [powerState, setPowerState] = useState(false)
  const [style1, setStyle1] = useState({})
  const [style2, setStyle2] = useState({})
  const [displayText, setDisplayText] = useState("")
  const [bankText, setBankText] = useState("")
  var audio=new Audio()
  const handleButtonClick = (e) => {
    if (powerState) {
      for (let i = 0; i < keys.length; i++) {
        if(e.target.value===keys[i].name){
          audio.src=keys[i].audioUrl
          break
        }
      }
      audio.play()
      setDisplayText(e.target.value)
    }
  }
  const handleBankBtnClick = () => {
    if (powerState) {
      if (bankText === "Heater Kit") {
        setBankText("Smooth Piano Kit")
        setDisplayText("Smooth Piano Kit")
        setStyle2({
          left: 5,
        })
      } else {
        setBankText("Heater Kit")
        setDisplayText("Heater Kit")
        setStyle2({
          right: 5,
        })
      }
    }
  }
  const handlePowerBtnClick = () => {
    setDisplayText("")
    setPowerState(!powerState)
    if (!powerState) {
      setStyle1({
        right: 5,
      })
    } else {
      setStyle1({
        left: 5,
      })
    }
  }
  const [volume, setVolume] = useState(80);

  const handleVolumeChange = (event) => {
    if (powerState) {
      const newVolume = parseInt(event.target.value, 10);
      setVolume(newVolume);
      setDisplayText("Volume " + volume)
    }
  };
  return (
    <div className="drum-wrapper">
      <div className="music-container">
        <div className="button-wrapper">
          <div className="button-div">
            <button value="Chord 1" onClick={handleButtonClick}>Q</button>
            <button value="Chord 2" onClick={handleButtonClick}>W</button>
            <button value="Chord 3" onClick={handleButtonClick}>E</button>
          </div>
          <div className="button-div">
            <button value="Shaker" onClick={handleButtonClick}>A</button>
            <button value="Open HH" onClick={handleButtonClick}>S</button>
            <button value="Closed HH" onClick={handleButtonClick}>D</button>
          </div>
          <div className="button-div">
            <button value="Punchy Kick" onClick={handleButtonClick}>Z</button>
            <button value="Side Stick" onClick={handleButtonClick}>X</button>
            <button value="Snare" onClick={handleButtonClick}>C</button>
          </div>
        </div>
        <div className="musicControl-wrapper">
          <TurnOffOn
            title='Power'
            handleClick={handlePowerBtnClick}
            style={style1}
          />
          <div className='musicname-container'>{displayText}</div>
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className='audio'/>
          <input type="range" name="volume" min={0} max={101} className='vol-range' onChange={handleVolumeChange} />
          <TurnOffOn
            title='Bank'
            handleClick={handleBankBtnClick}
            style={style2}
          />
        </div>
      </div>
    </div>
  )
}

export default Drum