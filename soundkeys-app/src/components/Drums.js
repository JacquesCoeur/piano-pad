
import { useEffect } from 'react'

function Drums(props) {
  const play = () => {
    new Audio(props.sound).play();
  };
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() === props.letter.toLowerCase()) {
        play()
      }
    })

  })
  return (
    <div className='drum'>
      <div className='key' onClick={play}>{props.letter}</div>
    </div>
  )
}

export default Drums;