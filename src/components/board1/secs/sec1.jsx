import React, { useState, useEffect, useMemo, useCallback } from 'react';
import '../board-1.css';
import './sec1.css';
import { lvl1Data } from './dropdown.jsx';
import { currentMonthName, getOneTwoAndThreeMonthBack, showDateYear, startOfMonth } from '../../../utils/dates/date.jsx';
import logo from '../../../assets/svgs/local_1 (1).svg';
import { Card3_A1A2, Card3_A3A4, Card3_A5A6 } from '../../../utils/boards/board1.jsx';
import queryFormater from './queryFormater.jsx'
 
function Level1Input({ data, PropertNameSelectedValue, setPropertNameSelectedValue, setshouldStartQuery }) {
  const determineClass = useMemo(() => {
    return (elem) => {
      if (
        (elem.Name === 'All' && PropertNameSelectedValue.includes('50')) ||
        (elem.Name !== 'All' && PropertNameSelectedValue.includes(elem.PropertyID))
      ) {
        return 'board1-sec1-level1-option board1-sec1-level1-option-active';
      } else {
        return 'board1-sec1-level1-option';
      }
    };
  }, [PropertNameSelectedValue]);

  const handlePropertNameSelectChange = useCallback(
    (elem) => {
      if (elem.Name === 'All') {
        setPropertNameSelectedValue((prevValue) =>
          prevValue.includes('50') ? [] : lvl1Data[0].lists[0].PropertyID
        );
      } else {
        setPropertNameSelectedValue((prevValue) => {
          const arr = prevValue.includes(elem.PropertyID)
            ? prevValue.filter((item) => item !== elem.PropertyID)
            : [...prevValue, elem.PropertyID];
          return arr;
        });
      }
    },
    [setPropertNameSelectedValue]
  );

  useEffect(() => {
    // console.log('PropertNameSelectedValue:', PropertNameSelectedValue);
  }, [PropertNameSelectedValue]);

  const handleQueryStart = () => {
    if (PropertNameSelectedValue.length > 0) {
    setshouldStartQuery(PropertNameSelectedValue);
    } else {
    setshouldStartQuery(false);
    }
  };


  return (
    <div>
      <div style={{marginTop:' 1.3em'}}>
        <div className='board1-sec1-level1-select-dropdown'>
          {data.lists.map((elem, index) => (
          <button
            className={determineClass(elem)}
            onClick={() => handlePropertNameSelectChange(elem)}
            key={index}
            value={elem.PropertyID}
          >
            {elem.Name}
          </button>
        ))}
      </div>
      <button id='board1-sec1-level1-select-dropdown-search-btn' onClick={handleQueryStart}>Search</button>
      </div>
      {/* dropdown */}
    </div>
  );
}

function Level2Bars({ data }) {
  return (
    <div id='board1-sec1-level2-barssec-container'>
      <div id='board1-sec1-level2-barssec-bars1'>
        <div>{data[0]}</div>
      </div>
      <div id='board1-sec1-level2-barssec-bars2'>
        <div>{data[1]}</div>
      </div>
    </div>
  );
}

function Sec1({ setcurrentPropertyId,  setshouldStartQuery }) {
  const [PropertNameSelectedValue, setPropertNameSelectedValue] = useState(
    lvl1Data[0].lists[0].PropertyID
  );
  const [BoardshouldStartQuery, BoardsetshouldStartQuery] = useState(true);

  const level2barsecDDMMYY = () => {
    const returnObject = [{}, {}, {}];
    const months = getOneTwoAndThreeMonthBack();

    returnObject[0]['raw'] = startOfMonth(months[0]);
    returnObject[0]['ser'] = [];
    returnObject[1]['raw'] = startOfMonth(months[1]);
    returnObject[1]['ser'] = [];
    returnObject[2]['raw'] = startOfMonth(months[2]);
    returnObject[2]['ser'] = [];
    returnObject[0]['ser'].push(showDateYear(new Date(returnObject[0]['raw'])));
    returnObject[1]['ser'].push(showDateYear(new Date(returnObject[1]['raw'])));
    returnObject[2]['ser'].push(showDateYear(new Date(returnObject[2]['raw'])));
    returnObject[0]['ser'].push(currentMonthName(new Date(returnObject[0]['raw'])));
    returnObject[0]['ser'] = returnObject[0]['ser'].join(' ');
    returnObject[1]['ser'].push(currentMonthName(new Date(returnObject[1]['raw'])));
    returnObject[1]['ser'] = returnObject[1]['ser'].join(' ');
    returnObject[2]['ser'].push(currentMonthName(new Date(returnObject[2]['raw'])));
    returnObject[2]['ser'] = returnObject[2]['ser'].join(' ');
    return returnObject;
  };

  const [level2_A1A2, setlevel2_A1A2] = useState({ percentage: '...', A: '...', B: '...' });
  const [level2_A3A4, setlevel2_A1A4] = useState({ percentage: '...', A: '...', B: '...' });
  const [level2_A5A6, setlevel2_A5A6] = useState({ percentage: '...', A: '...', B: '...' });


  useEffect(() => {
    setcurrentPropertyId(PropertNameSelectedValue);
  }, [PropertNameSelectedValue, setcurrentPropertyId]);


  useEffect(() => {
    setshouldStartQuery(BoardshouldStartQuery)

    if (BoardshouldStartQuery) {
    console.log('from section 1 = ' , queryFormater(PropertNameSelectedValue))
    // //   Card3_A1A2(PropertNameSelectedValue, setlevel2_A1A2, new Date(level2barsecDDMMYY()[2]['raw']));
    // //   Card3_A3A4(PropertNameSelectedValue, setlevel2_A1A4, new Date(level2barsecDDMMYY()[1]['raw']));
    // //   Card3_A5A6(PropertNameSelectedValue, setlevel2_A5A6, new Date(level2barsecDDMMYY()[0]['raw']));
     }
  }, [BoardshouldStartQuery, BoardsetshouldStartQuery]);

  return (
    <div id='board1-sec1'>
      <div id='board1-sec1-header'>
        <img src={logo} id='board1-sec1-header-img1' />
        <div id='board1-sec1-header-t1'>BUSHBURG</div>
      </div>

      <div className='board1-sec1-level1-body'>
        {lvl1Data.map((elem, index) => (
          <Level1Input
            key={index}
            data={elem}
            PropertNameSelectedValue={PropertNameSelectedValue}
            setPropertNameSelectedValue={setPropertNameSelectedValue}
            setshouldStartQuery={BoardsetshouldStartQuery}
          />
        ))}
      </div>

      <div className='board1-sec1-level1-body'>
        <div id='board1-sec1-level2-title'>Previous Three Months Progress Collected</div>
        <div id='board1-sec1-level2-barssec-body'>
          <div>
            <div>{level2_A1A2.percentage + '%'}</div>
            <Level2Bars data={[level2_A1A2.A, level2_A1A2.B]} />
            <div>{level2barsecDDMMYY()[2]['ser']}</div>
          </div>
          <div>
            <div>{level2_A3A4.percentage + '%'}</div>
            <Level2Bars data={[level2_A3A4.A, level2_A3A4.B]} />
            <div>{level2barsecDDMMYY()[1]['ser']}</div>
          </div>
          <div>
            <div>{level2_A5A6.percentage + '%'}</div>
            <Level2Bars data={[level2_A5A6.A, level2_A5A6.B]} />
            <div>{level2barsecDDMMYY()[0]['ser']}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec1;
