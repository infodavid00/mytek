
import React, { useState, useEffect } from 'react'
import '../board-1.css'
import './sec1.css'
import { lvl1Data } from './dropdown.jsx';

function Level1Input({ data, PropertNameSelectedValue, setPropertNameSelectedValue }) {
  const handlePropertNameSelectChange = (event) => {
    const newValue = event.target.value;
    setPropertNameSelectedValue(newValue);
  };
  return (
    <div>
      <div>{data.name}</div>
      <select 
        id={data.name} 
        name={data.name} 
        value={PropertNameSelectedValue}
        onChange={handlePropertNameSelectChange} 
        className='board1-sec1-level1-select'>
        {data.lists.map((elem, index) => (
          <option className='board1-sec1-level1-option' key={index} value={elem.PropertyID}>{elem.Name}</option>
        ))}
      </select>
    </div>
  )
}

function Level2Bars({data}) {
  return (
     <div id='board1-sec1-level2-barssec-container'>
       <div id='board1-sec1-level2-barssec-bars1'>
         <div>{data[0]}M</div>
       </div>
       <div id='board1-sec1-level2-barssec-bars2'>
         <div>{data[1]}M</div>
       </div>
     </div>
  )
}

function Sec1({setcurrentPropertyId}) {
  const [PropertNameSelectedValue, setPropertNameSelectedValue ] = useState(lvl1Data[0].lists[0].PropertyID)
 
  useEffect(() => {
    setcurrentPropertyId(PropertNameSelectedValue);
  }, [PropertNameSelectedValue, setcurrentPropertyId]);

  return (
    <div id='board1-sec1'>
      <div className='board1-sec1-level1-body'>
        {lvl1Data.map((elem, index) => (
          <Level1Input data={elem} key={index} PropertNameSelectedValue={PropertNameSelectedValue} setPropertNameSelectedValue={setPropertNameSelectedValue} />
        ))}
      </div>

      <div className='board1-sec1-level1-body'>
        <div id='board1-sec1-level2-title'>Previous Three Months Progress Gauge</div>
        <div id='board1-sec1-level2-barssec-body'>
           <div>
             <div>91.84%</div>
             <Level2Bars data={['55.0', '54.6']} />
             <div>2024 Feb</div>
           </div>
           <div>
             <div>90.50%</div>
             <Level2Bars data={['55.0', '54.5']} />
             <div>2024 Jan</div>
           </div>
           <div>
             <div>82.54%</div>
             <Level2Bars data={['54.9', '54.1']} />
             <div>2023 Dec</div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Sec1