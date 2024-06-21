import React from 'react'
import '../App.css'
import iconPlus from '../assets/plus - purple.svg'
function card({Code,Year,StartMonth,EndMonth, children}) {
  return (
    <div className='CardQ'>
        <div className='CodeYear'>
          <h5>{Code}</h5>
          <h5>{Year}</h5>
        </div>
        <div className='Period'>
          <h4>{StartMonth}</h4>
          <p>-</p>
          <h4>{EndMonth}</h4>
        </div>
        <div className="TasksView">
          {children && children.length != 0 ? children : <p>No Task Available</p>}
        </div>
        <div className='btnNewTask'>
          <button className='PlusTask'><img src={iconPlus}/></button>
          <p>Create new task</p>
        </div>
    </div>
  )
}
export default card