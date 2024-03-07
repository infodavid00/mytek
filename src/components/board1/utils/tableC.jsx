import React, { useState, useEffect } from 'react';
import './tables.css';
import { Card2_A5 } from '../../../utils/boards/board1.jsx';
import queryFormater from '../secs/queryFormater.jsx';
import numeral from 'numeral';


const formatNumber = num => numeral(num).format("0,0")

function TableC({ closeNav, PropertyId }) {
  const [responseState, setResponseState] = useState(null);
  useEffect(() => {
   Card2_A5(queryFormater(PropertyId), setResponseState);
  }, []);

  let response = []
  const nullresponse = [
      { '#' : 0,  'ChargeID/ID': 'Wait', AccountID: 'Wait', AccountType: 'Wait', Reference: 'Wait', Comment: 'Wait', Amount: 'Wait', TransactionDate: 'Wait', 'CreateDate/UpdateDate': 'Wait' ,'CreateUserID/UpdateUserID': 'Wait', TransactionType: 'Wait', PropertyID: 'Wait', UnitID: 'Wait', AccrualDebitID: 'Wait', AccrualCreditID: 'Wait', TenantCheckID: 'Wait'},
  ];

  if (typeof responseState === 'object') {
    response = responseState;
  }  else if (responseState === '0') {
    response = [
       { '#' : 0,  'ChargeID/ID': 'N/A', AccountID: 'N/A', AccountType: 'N/A', Reference: 'N/A', Comment: 'N/A', Amount: 'N/A', TransactionDate: 'N/A', 'CreateDate/UpdateDate': 'N/A' ,'CreateUserID/UpdateUserID': 'N/A', TransactionType: 'N/A', PropertyID: 'N/A', UnitID: 'N/A',  AccrualDebitID: 'N/A', AccrualCreditID: 'N/A', TenantCheckID: 'N/A'},
    ];
  } else {
    response = [
      { '#' : 0,  'ChargeID/ID': 'Error', AccountID: 'Error', AccountType: 'Error', Reference: 'Error', Comment: 'Error', Amount: 'Error', TransactionDate: 'Error', 'CreateDate/UpdateDate': 'Error' ,'CreateUserID/UpdateUserID': 'Error', TransactionType: 'Error', PropertyID: 'Error', UnitID: 'Error',  AccrualDebitID: 'Error', AccrualCreditID: 'Error', TenantCheckID: 'Error'},
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
              <th className='table-boards-11-tablecontainer-thtd'>#</th>
              <th className='table-boards-11-tablecontainer-thtd'>ChargeID/ID</th>
              <th className='table-boards-11-tablecontainer-thtd'>AccountID</th>
              <th className='table-boards-11-tablecontainer-thtd'>AccountType</th>
              <th className='table-boards-11-tablecontainer-thtd'>Reference</th>
              <th className='table-boards-11-tablecontainer-thtd'>Comment</th>
              <th className='table-boards-11-tablecontainer-thtd'>Amount</th>
              <th className='table-boards-11-tablecontainer-thtd'>TransactionDate</th>
              <th className='table-boards-11-tablecontainer-thtd'>CreateDate/UpdateDate</th>
              <th className='table-boards-11-tablecontainer-thtd'>CreateUserID/UpdateUserID</th>
              <th className='table-boards-11-tablecontainer-thtd'>TransactionType</th>
              <th className='table-boards-11-tablecontainer-thtd'>PropertyID</th>
              <th className='table-boards-11-tablecontainer-thtd'>UnitID</th>
              <th className='table-boards-11-tablecontainer-thtd'>AccrualDebitID</th>
              <th className='table-boards-11-tablecontainer-thtd'>AccrualCreditID</th>
              <th className='table-boards-11-tablecontainer-thtd'>TenantCheckID</th>
            </tr>
          </thead>
          <tbody>
            {responseState !== null ? response.map((item, index) => (
              <tr key={index}>
                <td className='table-boards-11-tablecontainer-thtd'>{index + 1}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.ChargeID}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.AccountID}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.AccountType}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.Reference}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.Comment}</td>
                <td className='table-boards-11-tablecontainer-thtd'>${formatNumber(item.Amount)}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.TransactionDate}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.CreateDate}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.CreateUserID}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.TransactionType}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.PropertyID}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.UnitID}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.AccrualDebitID}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.AccrualCreditID}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.TenantCheckID}</td>
              </tr>
            )) : nullresponse.map((item, index) => (
              <tr key={index}>
                <td className='table-boards-11-tablecontainer-thtd'>{index + 1}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item['ChargeID/ID']}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.AccountID}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.AccountType}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.Reference}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.Comment}</td>
                <td className='table-boards-11-tablecontainer-thtd'>${formatNumber(item.Amount)}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.TransactionDate}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item['CreateDate/UpdateDate']}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item['CreateUserID/UpdateUserID']}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.TransactionType}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.PropertyID}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.UnitID}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.AccrualDebitID}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.AccrualCreditID}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.TenantCheckID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableC;
