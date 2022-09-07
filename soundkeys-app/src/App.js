import './App.css';
import { useState } from "react"
import kick from "./sounds/kick.wav"
import snare from "./sounds/snare.wav"
import Drums from './components/Drums'
import Frhodes from './components/Frhodes'




function App() {
  const [sounds, setSounds] = useState([
    {
      name: "kick",
      sound: kick,
      key: "1"
    },
    {
      name: "snare",
      sound: snare,
      key: "2"
    }
  ])

  const [piano, setPiano] = useState([
    //First octave
    {
      name: "C4",
      sound: require("./frhodessounds/C4.wav"),
      key: "Q"
    },
    {
      name: "Eb4",
      sound: require("./frhodessounds/Eb4.wav"),
      key: "W"
    },
    {
      name: "F4",
      sound: require("./frhodessounds/F4.wav"),
      key: "E"
    },
    {
      name: "Gb4",
      sound: require("./frhodessounds/Gb4.wav"),
      key: "R"
    },
    {
      name: "G4",
      sound: require("./frhodessounds/G4.wav"),
      key: "T"
    },
    {
      name: "Bb4",
      sound: require("./frhodessounds/Bb4.wav"),
      key: "Y"
    },
    {
      name: "C5",
      sound: require("./frhodessounds/C5.wav"),
      key: "U"
    },
    {
      name: "C3",
      sound: require("./frhodessounds/C3.wav"),
      key: "A"
    },
    {
      name: "Eb3",
      sound: require("./frhodessounds/Eb3.wav"),
      key: "S"
    },
    {
      name: "F3",
      sound: require("./frhodessounds/F3.wav"),
      key: "D"
    },
    {
      name: "Gb3",
      sound: require("./frhodessounds/Gb3.wav"),
      key: "F"
    },
    {
      name: "G3",
      sound: require("./frhodessounds/G3.wav"),
      key: "G"
    },
    {
      name: "Bb3",
      sound: require("./frhodessounds/Bb3.wav"),
      key: "H"
    },
    {
      name: "C4",
      sound: require("./frhodessounds/C4.wav"),
      key: "J"
    },
    {
      name: "C2",
      sound: require("./frhodessounds/C2.wav"),
      key: "Z"
    },
    {
      name: "Eb2",
      sound: require("./frhodessounds/Eb2.wav"),
      key: "X"
    },
    {
      name: "F2",
      sound: require("./frhodessounds/F.wav"),
      key: "C"
    },
    {
      name: "Gb2",
      sound: require("./frhodessounds/Gb2.wav"),
      key: "V"
    },
    {
      name: "G2",
      sound: require("./frhodessounds/G2.wav"),
      key: "B"
    },
    {
      name: "Bb2",
      sound: require("./frhodessounds/Bb2.wav"),
      key: "N"
    },
    {
      name: "C3",
      sound: require("./frhodessounds/C3.wav"),
      key: "M"
    },

  ])
  return (
    <div className='container'>
      {piano.map((piano, i) => (
      <Frhodes key={i} letter={piano.key} sound={piano.sound}/>))}      

    </div>
  );
}

export default App;
