
import React, {useState, useEffect} from 'react'
import './board-2.css'

function ProgressBar({title, shouldBeLarge, percentage}) {
  return (
    <div className='board2-levels-container-big-box-f3-cont' style={{fontSize: shouldBeLarge ? '22px' : '15px'}}> 
      {title} 
      <div className='board2-levels-container-big-box-f3-progress-bd' style={{borderRadius: shouldBeLarge ? '13px' : '9px' }}>
       <div className='board2-levels-container-big-box-f3-progress-inner' style={{borderRadius: shouldBeLarge ? '13px' : '9px', padding: shouldBeLarge ? '9px' : '5px' }}></div>
      </div>
    </div>
  )
}

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
       <div className='board2-levels-container-big-box'>
         <div className='board2-levels-container-big-box-header'>Vacancies</div>
         <div className='board2-levels-container-big-box-f2-cont'>
           <div className='board2-levels-container-big-box-f2-text'>25</div>
         </div>
         <div>
           <ProgressBar title={'0-30 Days'} shouldBeLarge={false} percentage={'50'} />
           <ProgressBar title={'30-60 Days'}  shouldBeLarge={false} percentage={'50'} />
           <ProgressBar title={'60+ Days'}  shouldBeLarge={false} percentage={'50'} />
         </div>
         <div className='board2-levels-container-big-box-f4-cont'> 
           <div className='board2-levels-container-big-box-f4-txt'>Monthly Rent Loss: <span style={{color:'var(--colorD)', marginLeft: 10}}>23,000$</span></div>
           <button className='board2-levels-container-big-box-f4-btn'>More {'>'} </button>
         </div>
       </div>

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