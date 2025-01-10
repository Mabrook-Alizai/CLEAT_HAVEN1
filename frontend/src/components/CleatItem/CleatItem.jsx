import React, {useContext} from 'react'
import './CleatItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const CleatItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='cleat-item'>
        <div className="cleat-item-img-container">
            <img className='cleat-item-img' src={url+"/images/"+image} alt="" />
            {!cartItems[id]
              ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
              :<div className="cleat-item-counter">
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>
            }
        </div>
      <div className="cleat-item-info">
        <div className="cleat-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="cleat-item-description">{description}</p>
        <p className='cleat-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default CleatItem
