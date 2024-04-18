import React, { useContext } from 'react'
import { StoreContext } from '../context and reducer/StoreContext'

const BasketProduct = ({item}) => {
    const {removeFromBasket}=useContext(StoreContext);
    const handleRemove=()=>{
        removeFromBasket(item);

    }
    return (
        <div className='flex flex-row items-center gap-8 mt-5 px-10'>
            <img src={item.image} className='w-40' alt="" />
            <div className='w-1/2 px-10'>
                <p className='text-xl text-white font-medium'>{item.name}</p>
                <p className='text-lg text-white'>{item.price.toFixed(2)}</p>
            </div>
            <button onClick={handleRemove}  className='bg-blue-500 text-white text-lg font-medium rounded-lg p-4 duration-500 hover:bg-orange-400 '>Remove</button>
        </div>
    )
}

export default BasketProduct