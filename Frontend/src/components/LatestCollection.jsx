import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
//   console.log(products);
  

  const [LatestProduct , setLatestProduct] = useState([]);

  useEffect(()=>{
     setLatestProduct(products.slice(0,10))
  },[])

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3x0">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="mx-auto w-3/4 text-xs sm:text-sm md:text-base text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo autem suscipit harum sapiente cumque quibusdam?</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            LatestProduct.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
      </div>

    </div>
  );
};

export default LatestCollection;
