import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,name,image,price}) => {
   
    const { currency} = useContext(ShopContext)
    
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
        <div className="overflow-hidden">
            <img src={image[0]} className='hover:scale-110 transition ease-in-out ' alt="" />
            <div>
                <p className='pt-3 pb-1 text-sm'>{name}</p>
                <p className='text-sm font-medium'>{`${currency}`}{price}</p>
            </div>
        </div>
      
    </Link>
  )
}

export default ProductItem
