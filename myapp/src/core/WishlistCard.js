import React from 'react'
import ImageHelper from "./helper/ImageHelper";


const WishlistCard = ({ product, addtoCart = true, removeFromCart = false,removeFromList= true, whislist = true, setReload = f => f,
    //   function(f){return f}
    reload = undefined }) => {
  return (
    <div className='col-sm-3 col-xs-6 productComp'>
        <div className="list-product">
        <ImageHelper product={product} />
        <div className="facOutlet">Design of the day</div>
        </div>
    
    </div>
  )
}

export default WishlistCard