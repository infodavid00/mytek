
import React,{useState} from 'react'
import '../board-1.css'
import './sec2.css'
import Tables from '../utils/tables'

function Level1Card({arr}) {
  const color = arr[0] === 'Charged' ? 'white' : 'orange' 
  const bgClass = arr[0] === 'Charged' ? 'board1-sec2-level1card b1-s2-l1c-charged' : 
   'board1-sec2-level1card' 
  return (
     <div className={bgClass}>
       <div className='board1-sec2-level1card-title'>Total Amount {arr[0]}</div>
       <div className='board1-sec2-level1card-text'>For Month of {arr[1]}</div>
       <div className='board1-sec2-level1card-value' style={{color}}>${arr[2]}</div>
     </div>
  )
}

function Level2Progress({percentage}) {
  const width  = `${percentage.split('.')[0]}%`
  return (
    <div id='board1-sec2-level2-progress-cont'>
      <div id='board1-sec2-level2-progress-progress-body'>
         <div id='board1-sec2-level2-progress-progress-inner' style={{width}}></div>
      </div>
      <span>{percentage}%</span>
    </div>
  )
}

function Level3Cards({data,color,closeTable}) {
  const borderTop = `10px solid ${color}`
  return (
    <div className='board1-sec2-level13-body-children-body' style={{borderTop, color}}>
      <div className='board1-sec2-level13-body-children-text1'>{data[0]}</div>
      <div className='board1-sec2-level13-body-children-text2'>{data[1]} Tenants</div>
      <div> 
        <div>Total Balance:</div>
        <div className='board1-sec2-level13-body-children-text2'>${data[2]}</div>
      </div>
      <div>
        <div>Average Balance:</div>
        <div className='board1-sec2-level13-body-children-text2'>${data[3]}</div>
      </div>
      <button className='board1-sec2-level13-body-children-btn' onClick={closeTable}>Show Me</button>
    </div>
  )
}

function Sec2() {
  const [showTable, setShowTable] = useState(false)
  
  return (
    <div id='board1-sec2'>
      <div id='board1-sec2-level1-body'>
        <Level1Card arr={['Charged', 'Febuary', '5,343,333.22']} />
        <Level1Card arr={['Collected', 'Febuary', '5,343,333.22']} />
      </div>
      {/* level1 */}

      <div style={{marginTop : '1em'}}>
        <div className='board1-sec2-level2-children'>Current Month Residential Gauge <Level2Progress percentage={'69.17'} /> </div>
        <div className='board1-sec2-level2-children'>Current Month Commercial Gauge <Level2Progress percentage={'65.32'} /> </div>
      </div>
      {/* level2 */}

      <div id='board1-sec2-level13-body'>
        <div id='board1-sec2-level1-body'>
           <div className='board1-sec2-level3-header-child-cont'> 
              <div id='board1-sec2-level3-header-child1-top'>Tenant Breakdown</div>
              <div>Contacted This Week : <span style={{color:'orange'}}>0</span></div>
              <div>Attention : <span style={{color:'tomato'}}>222</span></div>
           </div>
           <div className='board1-sec2-level3-header-child-cont'>
              <div id='board1-sec2-level3-header-child2-top'>Total Tenant Balances</div>        
              <div id='board1-sec2-level3-header-child1-bottom'>511</div>
           </div>
        </div>

        <div id='board1-sec2-level13-body-body'>
          <Level3Cards data={['<$1,000', '151', '48,625.4', '322.02']} color={'green'} closeTable={()=> setShowTable(true)} />       
          <Level3Cards data={['$1,000-$10,000', '266', '772,097.73', '2,902.62']} color={'orange'} closeTable={()=> setShowTable(true)} />           
          <Level3Cards data={['>$10,000', '94', '4,255.769.7', '44,955.28']} color={'grey'} closeTable={()=> setShowTable(true)} />       
        </div>
      </div>
      {/* level3 */}
      
      {showTable && <Tables closeNav={()=>setShowTable(false)} />}
    </div>
  )
}

export default Sec2