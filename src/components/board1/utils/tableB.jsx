import React, { useState, useEffect } from 'react';
import './tables.css';
import { Card4_A5 } from '../../../utils/boards/board1';


function Tables({ closeNav, PropertyId }) {
  const [responseState, setResponseState] = useState(null);

  useEffect(() => {
    Card4_A5(PropertyId, setResponseState);
  }, []);

  let response = []
  const nullresponse = [
      { '#' : 0,  Name: 'Wait', OpenBalance: 'Wait', Comment: 'Wait' },
    ];

  if (typeof responseState === 'object') {
    response = responseState;
  }  else if (responseState === '0') {
    response = [
      { '#' : 0,  Name: 'N/A', OpenBalance: 'N/A', Comment: 'N/A' },
    ];
  } else {
    response = [
      { '#' : 0,  Name: 'Error', OpenBalance: 'Error', Comment: 'Error' },
    ];
  }

  return (
    <div id='show-table-boards-11'>
      <div id='show-table-boards-11-header'>
        <button onClick={() => closeNav()}>Close</button>
      </div>
      <div id='table-boards-11-tablecontainer-before'>
        <table id='table-boards-11-tablecontainer'>
          <thead>
            <tr>
              <th className='table-boards-11-tablecontainer-thtd'>#</th>
              <th className='table-boards-11-tablecontainer-thtd'>Name</th>
              <th className='table-boards-11-tablecontainer-thtd'>OpenBalance</th>
              <th className='table-boards-11-tablecontainer-thtd'>Comment</th>
            </tr>
          </thead>
          <tbody>
            {responseState !== null ? response.map((item, index) => (
              <tr key={index}>
                <td className='table-boards-11-tablecontainer-thtd'>{index + 1}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.Name}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.OpenBalance}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.Comment}</td>
              </tr>
            )) : nullresponse.map((item, index) => (
              <tr key={index}>
                <td className='table-boards-11-tablecontainer-thtd'>{index + 1}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.Name}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.OpenBalance}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.Comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tables;
