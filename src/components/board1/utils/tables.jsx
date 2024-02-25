

import React from 'react'
import './tables.css'

function Tables({closeNav}) {
  return (
   <div id='show-table-boards-11'>
     <div id='show-table-boards-11-header'><button onClick={()=> closeNav()}>Close</button></div>
     <table id='table-boards-11-tablecontainer'>
       <thead>
          <tr>
          <th className='table-boards-11-tablecontainer-thtd'>Category</th>
          <th className='table-boards-11-tablecontainer-thtd'>Count</th>
          <th className='table-boards-11-tablecontainer-thtd'>Charged</th>
          <th className='table-boards-11-tablecontainer-thtd'>Collected</th>
          <th className='table-boards-11-tablecontainer-thtd'>Ratio</th>
        </tr>
        </thead>
       <tbody>
       <tr>
         <td className='table-boards-11-tablecontainer-thtd'>Rental</td>
         <td className='table-boards-11-tablecontainer-thtd'>1817</td>
         <td className='table-boards-11-tablecontainer-thtd'>$4,627,832</td>
         <td className='table-boards-11-tablecontainer-thtd'>$3,223,397</td>
         <td className='table-boards-11-tablecontainer-thtd'>69.87%</td>
       </tr>
       <tr>
         <td className='table-boards-11-tablecontainer-thtd'>Reimbursement</td>
         <td className='table-boards-11-tablecontainer-thtd'>94</td>
         <td className='table-boards-11-tablecontainer-thtd'>$512,407</td>
         <td className='table-boards-11-tablecontainer-thtd'>$189,751</td>
         <td className='table-boards-11-tablecontainer-thtd'>37.03%</td>
       </tr>
       <tr>
         <td className='table-boards-11-tablecontainer-thtd'>Other</td>
         <td className='table-boards-11-tablecontainer-thtd'>34</td>
         <td className='table-boards-11-tablecontainer-thtd'>$60,223</td>
         <td className='table-boards-11-tablecontainer-thtd'>$58,912</td>
         <td className='table-boards-11-tablecontainer-thtd'>97.82%</td>
       </tr>
       <tr>
         <td className='table-boards-11-tablecontainer-thtd'>Tenant Direct</td>
         <td className='table-boards-11-tablecontainer-thtd'>2</td>
         <td className='table-boards-11-tablecontainer-thtd'>$15,500</td>
         <td className='table-boards-11-tablecontainer-thtd'>$15,000</td>
         <td className='table-boards-11-tablecontainer-thtd'>96.77%</td>
       </tr>
       <tr>
         <td className='table-boards-11-tablecontainer-thtd'>Ancillary</td>
         <td className='table-boards-11-tablecontainer-thtd'>315</td>
         <td className='table-boards-11-tablecontainer-thtd'>$330,224</td>
         <td className='table-boards-11-tablecontainer-thtd'>$2,260</td>
         <td className='table-boards-11-tablecontainer-thtd'>7.48%</td>
       </tr>
       </tbody>
     </table>
   </div>
  )
}

export default Tables