import { useEffect, useState } from 'react'

function Frhodes(props) {
    const [playing, setPlaying] = useState(false);

    const play = () => {
        new Audio(props.sound).play();
        setPlaying(true);
        setTimeout(() => {
            setPlaying(false);},150)

    };
    const pause = () => {
        new Audio(props.sound).pause();
    }

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.key.toLowerCase() === props.letter.toLowerCase()) {
                play()
            }
        })
    }, [])
  return (
    <div className={`piano${playing ? "playing" : ""}`} onClick={play}>
        <div className='key'>{props.letter}</div>
    </div>
  )
}

export default Frhodes;