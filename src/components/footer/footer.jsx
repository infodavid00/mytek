
import React from 'react'
import './footer.css'

function Footer({color}) {
  return (
    <div id='app-footer' style={{backgroundColor: color}}>
    <div> This software is owned by MYTEK. Illegal distribution is prohibited. </div> 
    <div> © [2024] MYTEK. All Rights Reserved. </div>
    <div> Contact MYTEK - <a href='mailto:support@mytek.cloud ' style={{textDecoration:'none', fontFamily:'bold'}}>support@mytek.cloud</a> </div>
    </div>
  )
}

export default Footer
