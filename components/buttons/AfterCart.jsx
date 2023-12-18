import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement } from '@/redux/cart'

const AfterCart = ({ cartCount, dishId }) => {
    const dispatch = useDispatch();
    return (
        <div className="flex relative items-center transition-all duration-300 ease-in-out">
            <button className="text-white bg-green-700 w-9 h-9 rounded-2.25 cursor-pointer transition-all duration-300 ease-in-out" onClick={() => dispatch(decrement(dishId))}>
                -
            </button>
            <div className="m-0 mx-7 text-black">{cartCount}</div>
            <button className="text-white bg-green-700 w-9 h-9 rounded-2.25 cursor-pointer transition-all duration-300 ease-in-out" onClick={() => dispatch(increment(dishId))}>
                +
            </button>
        </div>
    )
}
export default AfterCart