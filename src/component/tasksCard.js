import React from 'react'
import '../App.css'
import iconWeight from '../assets/weight.svg'
import button from '../assets/Default.svg'


function tasksCard({title,persen}) {
  return (
    <div className='TaskCard'>
        <h4>{title}</h4>
        <div className='status'>
          <div className='Persentase'>
            <img src={iconWeight}></img>
            <p>{persen}%</p>
          </div>
          <button className='btnMore'> 
            <img src={button}></img>
          </button>

        </div>
    </div>
  )
}
export default tasksCard