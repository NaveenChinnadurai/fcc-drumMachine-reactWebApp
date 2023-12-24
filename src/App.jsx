import './App.css'
import { useState,useEffect } from 'react'
import TurnOffOn from './compo/turnOffOn'
import audio1 from './assets/Heater-1.mp3'
function App() {
  const [powerState, setPowerState] = useState(false)
  const [style1, setStyle1] = useState({})
  const [style2, setStyle2] = useState({})
  const [displayText, setDisplayText] = useState("")
  const [bankText, setBankText] = useState("")

  const handleButtonClick = (e) => {
    audio.play
    if (powerState) {
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

  useEffect(() => {
    const audioContext = new (window.AudioContext)();
    console.log(volume)
    const gainNode = audioContext.createGain();
    gainNode.gain.value = volume / 100; // Set initial volume

    gainNode.connect(audioContext.destination);
    return () => {
      gainNode.disconnect();
      audioContext.close();
    };
  }, [volume]);

  const handleVolumeChange = (event) => {
    const newVolume = parseInt(event.target.value, 10);
    setVolume(newVolume);
  };
  const [audio]=useState(new Audio(audio1))
  return (
    <div className="app-wrapper">
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
          <input type="range" name="volume" className='vol-range' onChange={handleVolumeChange}/>
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

export default App
