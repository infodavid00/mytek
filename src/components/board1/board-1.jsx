
import React from 'react'
import './board-1.css'
import Sec1 from './secs/sec1.jsx'
import Sec2 from './secs/sec2.jsx'
import Sec3 from './secs/sec3.jsx'

function Board1Component() {
  return (
    <>
    <div id='board1-title'>Last updated : 12/20/2022 @15:02.30</div>
    <div id='board-1-component'> 
      <Sec1 />
      <Sec2 />
      <Sec3 />
    </div>
    </>
  )
}

export default Board1Component 