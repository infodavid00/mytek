
import React, {useState, useEffect} from 'react'
import './board-2.css'


function Board2Component() {
  // const [currentPropertyId, setcurrentPropertyId] = useState(lvl1Data[0].lists[0].PropertyID)
  // const [shouldStartQuery, setshouldStartQuery] = useState(true)
  return (
    <>
     <div id='board-2-component'> 

     {/* header */}
     <div id='board2-header-container'>
       <div id='board2-header-bushburg'>BUSHBURG</div>
       <div id='board2-header-heading-cont'>
          <div id='board2-header-heading'>LEASING</div>
          <div id='board2-header-updated'>last updated 03/09/2024 at 8:37PM</div>
       </div>
       <div id='board2-header-btn-cont'>
          <button id='board2-header-btn-cont-property'>Property</button>
          <button id='board2-header-btn-cont-property-drpdwn'> c </button>
       </div>
     </div>
     {/* header */}


     {/* level1 */}
     <div className='board2-levels-container'>
       <div className='board2-levels-container-big-box'></div>
       <div className='board2-levels-container-big-box'></div>
       <div className='board2-levels-container-big-box'></div>
     </div>
     {/* levlel1 */}



     {/* level2 */}
     <div className='board2-levels-container'>
       <div className='board2-levels-container-big-box'></div>
       <div className='board2-levels-container-big-box'></div>
       <div className='board2-levels-container-big-box'></div>
     </div>
     {/* levlel2 */}



     {/* level3 */}
     <div className='board2-levels-container'>
       <div className='board2-levels-container-big-box'></div>
       <div className='board2-levels-container-big-box'></div>
       <div className='board2-levels-container-big-box'></div>
     </div>
     {/* levlel3 */}

     </div>
    </>
  )
}

export default Board2Component 