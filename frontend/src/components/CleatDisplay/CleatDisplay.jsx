import React, { useContext } from 'react'
import './CleatDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import CleatItem from '../CleatItem/CleatItem'

const CleatDisplay = ({category}) => {

    const {cleat_list} = useContext(StoreContext)

  return (
    <div className='cleat-display' id='cleat-display'>
      <h2>Game-Ready Cleats</h2>
      <div className="cleat-display-list">
        {cleat_list.map((item,index)=>{
          if(category==="All" || category===item.category){
            return <CleatItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
        })}
      </div>
    </div>
  )
}

export default CleatDisplay
