import React from 'react'
import { useContext } from 'react'
import  shopContext from '../context/ShopContext'

const LatestCollection = () => {
    
   const { products } =  useContext(shopContext);

   console.log(products);
   


  return (
    <div>
      
    </div>
  )
}

export default LatestCollection
