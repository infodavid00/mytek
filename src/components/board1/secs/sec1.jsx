
import React, { useState, useEffect } from 'react'
import '../board-1.css'
import './sec1.css'

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
  const lvl1Data = [
    { 
      name: 'Property Name',
      lists: [
        { PropertyID: '1%2C50', Name: 'All' },
        { PropertyID: '1%2C1', Name: '385 Troutman Street' },
        { PropertyID: '2%2C2',  Name: '538 Johnson Ave' },
        { PropertyID: '3%2C3', Name: '1087 Flushing Avenue - The Loom' },
        { PropertyID: '4%2C4', Name: '115 Knickerbocker Avenue' },
        { PropertyID: '5%2C5', Name: '836 Bergen Street' },
        { PropertyID: '6%26', Name: '252 Norman Avenue' },
        { PropertyID: '7%2C7', Name: '858 Hancock Street' },
        { PropertyID: '8%2C8', Name: '180 Bainbridge Street' },
        { PropertyID: '9%2C9', Name: '69 Van Dyke Street' },
        { PropertyID: '10%2C10', Name: 'Bushburg Properties Inc.' },
        { PropertyID: '11%2C11', Name: '1711 Fulton Street' },
        { PropertyID: '12%2C12', Name: '94 Chauncey Street' },
        { PropertyID: '13%2C13', Name: '110 Chauncey Street' },
        { PropertyID: '14%2C14', Name: '120 Chauncey Street' },
        { PropertyID: '15%2C15', Name: '132 32nd Street' },
        { PropertyID: '17%2C17', Name: '55-27 Myrtle Avenue' },
        { PropertyID: '18%2C18', Name: '9250 W Flagler Street' },
        { PropertyID: '22%2C22', Name: '395 Broadway Inc.' },
        { PropertyID: '24%2C24', Name: '635 4th Avenue' },
        { PropertyID: '26%2C26', Name: 'Flagler' },
        { PropertyID: '27%2C27', Name: '65 Porter Avenue' },
        { PropertyID: '29%2C29', Name: '123 Linden Blvd' },
        { PropertyID: '30%2C30', Name: '1535 63rd Street' },
        { PropertyID: '32%2C32', Name: '2840 Atlantic Avenue - The Highland' },
        { PropertyID: '33%2C33', Name: 'Archer Equities LLC' },
        { PropertyID: '34%2C34', Name: 'Jersey City' },
        { PropertyID: '36%2C36', Name: '282-300 Meserole Street' },
        { PropertyID: '46%2C46', Name: '55 Orchard Street' },
        { PropertyID: '48%2C48', Name: '117 Grattan Street' },
        { PropertyID: '49%2C49', Name: '500 Mamaroneck Avenue' }
     ]
    },
    {
      name: 'Balance Bracket',
      lists: ['All']
    },
    {
      name: 'Legal',
      lists: ['All']
    },
    {
      name: 'Dept. Rep.',
      lists: ['All']
    },
  ]
  
  const [PropertNameSelectedValue, setPropertNameSelectedValue ] = useState(lvl1Data[0].lists[0].PropertyID)
 
  setcurrentPropertyId(PropertNameSelectedValue)
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