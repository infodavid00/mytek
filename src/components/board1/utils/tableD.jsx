import React, { useState, useEffect } from 'react';
import './tables.css';
import { Card2_A6 } from '../../../utils/boards/board1.jsx';
import queryFormater from '../secs/queryFormater.jsx';
import numeral from 'numeral';


const formatNumber = num => numeral(num).format("0,0")

function TableD({ closeNav, PropertyId }) {
  const [responseState, setResponseState] = useState(null);
  useEffect(() => {
   Card2_A6(queryFormater(PropertyId), setResponseState);
  }, []);

  let response = []
  const nullresponse = [
      { '#' : 0,  'ChargeID/ID': 'Wait', AccountID: 'Wait', AccountType: 'Wait', Comment: 'Wait', Amount: 'Wait', TransactionDate: 'Wait', 'CreateDate/UpdateDate': 'Wait' ,'CreateUserID/UpdateUserID': 'Wait', TransactionType: 'Wait', PropertyID: 'Wait', ChargeTypeID: 'Wait',  AccrualDebitID: 'Wait', AccrualCreditID: 'Wait'},
  ];
  if (typeof responseState === 'object') {
    response = responseState;
  }  else if (responseState === '0') {
    response = [
       { '#' : 0,  'ChargeID/ID': 'N/A', AccountID: 'N/A', AccountType: 'N/A', Comment: 'N/A', Amount: 'N/A', TransactionDate: 'N/A', 'CreateDate/UpdateDate': 'N/A' ,'CreateUserID/UpdateUserID': 'N/A', TransactionType: 'N/A', PropertyID: 'N/A', ChargeTypeID: 'N/A',  AccrualDebitID: 'N/A', AccrualCreditID: 'N/A'},
    ];
  } else {
    response = [
      { '#' : 0,  'ChargeID/ID': 'Error', AccountID: 'Error', AccountType: 'Error', Comment: 'Error', Amount: 'Error', TransactionDate: 'Error', 'CreateDate/UpdateDate': 'Error' ,'CreateUserID/UpdateUserID': 'Error', TransactionType: 'Error', PropertyID: 'Error', ChargeTypeID: 'Error',  AccrualDebitID: 'Error', AccrualCreditID: 'Error'},
    ];
  }

  return (
    <div id='show-table-boards-11'>
      <div id='show-table-boards-11-header'>
        <button onClick={() => closeNav()}>Close</button>
      </div>
      <div id='table-boards-11-tablecontainer-before-long'>
        <table className='tab_01' id='table-boards-11-tablecontainer'>
          <thead>
            <tr>
              <th className='table-boards-11-Dontainer-thtd'>#</th>
              <th className='table-boards-11-Dontainer-thtd'>ChargeID/ID</th>
              <th className='table-boards-11-Dontainer-thtd'>AccountID</th>
              <th className='table-boards-11-Dontainer-thtd'>AccountType</th>
              <th className='table-boards-11-Dontainer-thtd'>Comment</th>
              <th className='table-boards-11-Dontainer-thtd'>Amount</th>
              <th className='table-boards-11-Dontainer-thtd'>TransactionDate</th>
              <th className='table-boards-11-Dontainer-thtd'>CreateDate/UpdateDate</th>
              <th className='table-boards-11-Dontainer-thtd'>CreateUserID/UpdateUserID</th>
              <th className='table-boards-11-Dontainer-thtd'>TransactionType</th>
              <th className='table-boards-11-Dontainer-thtd'>PropertyID</th>
              <th className='table-boards-11-Dontainer-thtd'>ChargeTypeID</th>
              <th className='table-boards-11-Dontainer-thtd'>AccrualDebitID</th>
              <th className='table-boards-11-Dontainer-thtd'>AccrualCreditID</th>
            </tr>
          </thead>
          <tbody>
            {responseState !== null ? response.map((item, index) => (
              <tr key={index}>
                <td className='table-boards-11-Dontainer-thtd'>{index + 1}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.ChargeID}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.AccountID}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.AccountType}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.Comment}</td>
                <td className='table-boards-11-Dontainer-thtd'>${formatNumber(item.Amount)}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.TransactionDate}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.CreateDate}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.CreateUserID}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.TransactionType}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.PropertyID}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.ChargeTypeID}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.AccrualDebitID}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.AccrualCreditID}</td>
              </tr>
            )) : nullresponse.map((item, index) => (
              <tr key={index}>
                <td className='table-boards-11-Dontainer-thtd'>{index + 1}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item['ChargeID/ID']}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.AccountID}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.AccountType}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.Comment}</td>
                <td className='table-boards-11-Dontainer-thtd'>${formatNumber(item.Amount)}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.TransactionDate}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item['CreateDate/UpdateDate']}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item['CreateUserID/UpdateUserID']}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.TransactionType}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.PropertyID}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.ChargeTypeID}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.AccrualDebitID}</td>
                <td className='table-boards-11-Dontainer-thtd'>{item.AccrualCreditID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableD;
