import { useContext } from "react"
import { StoreContext } from "../context and reducer/StoreContext"


const Product = ({ item }) => {

    const {addToBasket}=useContext(StoreContext)

    const handleAdd=()=>{
        addToBasket(item);

    }


    return (
        <div className='mx-auto px-8 border border-gray-200 rounded-lg '>
            <img className='mt-4' src={item.image} />
            <div className='flex flex-row items-center justify-between py-4'>
                <div>
                    <p className='text-xl text-white'>{item.name}</p>
                    <p className='text-lg text-white'>{item.price.toFixed(2)}</p>
                </div>
                <button  onClick={handleAdd} className='bg-indigo-500 text-white text-lg font-medium rounded-full p-4 mb-3 ml-3' >Add to Basket</button>
            </div>

        </div>
    )
}

export default Product