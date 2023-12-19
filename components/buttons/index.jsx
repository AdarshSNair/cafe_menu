import React, { useMemo } from 'react'
import AfterCart from './AfterCart'
import BeforeCart from './BeforeCart'
import { useSelector } from 'react-redux'

const CartButtons = ({dish_id}) => {
    const {cartList } = useSelector((state) => state.cart);

    const cartCount = cartList.find((item) => item?.disID === dish_id)?.count;

  
      return (
   <>
      {cartCount > 0 ? <AfterCart cartCount={cartCount} dishId={dish_id}/> : <BeforeCart dishId={dish_id} />}
      <br />
      {cartCount > 0 ? <p className='text-red-600 font-semibold'>Customizations available</p> : ""}
   </>
  )
}

export default CartButtons