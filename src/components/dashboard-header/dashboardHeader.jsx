
import React from 'react'
import './dashboardHeader.css'
import logo from '../../assets/svgs/logo.svg'
import { Link } from 'react-router-dom'

function DashboardHeader({active}) {
  const lists = [
    {title:'Board1' , index:1},
    {title:'Board2' , index:2},
    {title:'Board3' , index:3},
    {title:'Board4' , index:4}
  ]

  return (
    <div id='dashboard-header'>
      <img src={logo} onClick={()=> window.location.href = '/'} />
      <div id='dashboard-header-tabs'> 
          {lists.map((elem, index ) => (
            <Link key={index} className={elem.index === active ? 
            'dashboard-header-tabs dashboard-header-tabs-active' 
            : 'dashboard-header-tabs'} to={`/dashboard/${elem.index}`}>
             {elem.title}</Link>
          ))}
       </div>
    </div>
  )
}

export default DashboardHeader