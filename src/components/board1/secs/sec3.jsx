
import React from 'react'
import '../board-1.css'
import './sec3.css'

function Level1ProgressBar({percentage}) {
  const width  = `${percentage.split('.')[0]}%`
  return (
     <div className='board1-sec3-level1-progress-progress-track'>
       <div className='board1-sec3-level1-progress-progress-inner' style={{width}}></div>
     </div>
  )
}

function Level3Bar({percentageOfNotLegal}) {
  const width  = `${percentageOfNotLegal.split('.')[0]}%`
  return (
     <div className='board1-sec3-level3-bar-progress-track'>
       <div className='board1-sec3-level3-bar-progress-inner' style={{width}}></div>
     </div>
  )
}

function Sec3() {

  return (
    <div id='board1-sec3'>
       <div className='board1-sec3-level1-body'>
         <div id='board1-sec3-level1-title'>Charges Breakdown</div>
         <div id='board1-sec3-level1-label'>For Month of Febuary</div>
         <div id='board1-sec3-level1-progress-body'>
            <div className='board1-sec3-level1-progress-cont'>
              <div>69.87%</div>
              <Level1ProgressBar percentage={'69.87'} />
              <div className='board1-sec3-level1-progress-label'>Rent</div>
            </div>
            <div className='board1-sec3-level1-progress-cont'>
              <div>37.03%</div>
              <Level1ProgressBar percentage={'37.03'} />
              <div className='board1-sec3-level1-progress-label'>Reimbursement</div>
            </div>
            <div className='board1-sec3-level1-progress-cont'>
              <div>97.82%</div>
              <Level1ProgressBar percentage={'97.82'} />
              <div className='board1-sec3-level1-progress-label'>Other</div>
            </div>
            <div className='board1-sec3-level1-progress-cont'>
              <div>96.72%</div>
              <Level1ProgressBar percentage={'96.72'} />
              <div className='board1-sec3-level1-progress-label'>Tenant Direct</div>
            </div>
            <div className='board1-sec3-level1-progress-cont'>
              <div>7.48%</div>
              <Level1ProgressBar percentage={'7.48'} />
              <div className='board1-sec3-level1-progress-label'>Ancillary</div>
            </div>
         </div>

        <div id='board1-sec3-level1-table-body'>
            <table id='board1-sec3-level1-table-table'>
              <thead>
               <tr>
               <th className='board1-sec3-level1-table-thtd'>Category</th>
               <th className='board1-sec3-level1-table-thtd'>Count</th>
               <th className='board1-sec3-level1-table-thtd'>Charged</th>
               <th className='board1-sec3-level1-table-thtd'>Collected</th>
               <th className='board1-sec3-level1-table-thtd'>Ratio</th>
             </tr>
             </thead>
            <tbody>
            <tr>
              <td className='board1-sec3-level1-table-thtd'>Rental</td>
              <td className='board1-sec3-level1-table-thtd'>1817</td>
              <td className='board1-sec3-level1-table-thtd'>$4,627,832</td>
              <td className='board1-sec3-level1-table-thtd'>$3,223,397</td>
              <td className='board1-sec3-level1-table-thtd'>69.87%</td>
            </tr>
            <tr>
              <td className='board1-sec3-level1-table-thtd'>Reimbursement</td>
              <td className='board1-sec3-level1-table-thtd'>94</td>
              <td className='board1-sec3-level1-table-thtd'>$512,407</td>
              <td className='board1-sec3-level1-table-thtd'>$189,751</td>
              <td className='board1-sec3-level1-table-thtd'>37.03%</td>
            </tr>
            <tr>
              <td className='board1-sec3-level1-table-thtd'>Other</td>
              <td className='board1-sec3-level1-table-thtd'>34</td>
              <td className='board1-sec3-level1-table-thtd'>$60,223</td>
              <td className='board1-sec3-level1-table-thtd'>$58,912</td>
              <td className='board1-sec3-level1-table-thtd'>97.82%</td>
            </tr>
            <tr>
              <td className='board1-sec3-level1-table-thtd'>Tenant Direct</td>
              <td className='board1-sec3-level1-table-thtd'>2</td>
              <td className='board1-sec3-level1-table-thtd'>$15,500</td>
              <td className='board1-sec3-level1-table-thtd'>$15,000</td>
              <td className='board1-sec3-level1-table-thtd'>96.77%</td>
            </tr>
            <tr>
              <td className='board1-sec3-level1-table-thtd'>Ancillary</td>
              <td className='board1-sec3-level1-table-thtd'>315</td>
              <td className='board1-sec3-level1-table-thtd'>$330,224</td>
              <td className='board1-sec3-level1-table-thtd'>$2,260</td>
              <td className='board1-sec3-level1-table-thtd'>7.48%</td>
            </tr>
           </tbody>
         </table>
        </div>
       </div>
      {/* level 1 */}


      <div id='board1-sec3-level2-body' className='board1-sec3-level1-body'>
        <div className='board1-sec3-level2-children'>
          <div className='board1-sec3-level2-children-title'>Total Arrears:</div>
          <div className='board1-sec3-level2-children-val' style={{color:'grey'}}>$5,046,519.91</div>
        </div>
        <div className='board1-sec3-level2-children'>
          <div className='board1-sec3-level2-children-title'>Total Prepaid:</div>
          <div className='board1-sec3-level2-children-val' style={{color:'orange'}}>($813,490.79)</div>
        </div>
        <div className='board1-sec3-level2-children'>
          <div className='board1-sec3-level2-children-title'>Arrears Collected MTD:</div>
          <div className='board1-sec3-level2-children-val' style={{color:'orange'}}>$553,783.23</div>
        </div>
      </div>
      {/* level 2 */}


      <div id='board1-sec3-level3-body'>
        <div id='board1-sec3-level3-title'>Legal in Action</div>
        <div id='board1-sec3-level3-sec2-body'>
          <div id='board1-sec3-level3-sec2-1'>
            <div id='board1-sec3-level3-bar-title'>17.03</div>
            <Level3Bar percentageOfNotLegal={'17.03'} />
            <div>Legal: <span className='board1-sec3-level3-bar-progress-label' style={{backgroundColor:'var(--colorD)'}}></span>
             NotLegal: <span className='board1-sec3-level3-bar-progress-label' style={{backgroundColor:'var(--colorB)'}}></span>
            </div>
          </div>
          <div id='board1-sec3-level3-sec2-2'>
            <div>Total Tenants</div>
            <div>Legal in Action:</div>
            <div id='board1-sec3-level3-sec2-2-boldtxt1'>87</div>
            <div>Total Balance:</div>
            <div id='board1-sec3-level3-sec2-2-boldtxt2'>$1,549,353</div>
            <button id='board1-sec3-level3-sec2-2-showmebtn'>Show Me</button>
          </div>
        </div>
      </div>
      {/* level 3 */}
    </div>
  )
}

export default Sec3