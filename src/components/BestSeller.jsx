import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItems from "./ProductItems";

const BestSeller = () => {

  const { products} = useContext(ShopContext);
  const [ bestSeller, setBestSeller] = useState([]);

  useEffect (() => {
    const bestProduct = products.filter((item) => (item.bestseller));
    setBestSeller(bestProduct.slice(0,5));
  },[])

  return (
    <div className='my-10'>
      <div className="text-3xl py-8 text-center uppercase">
        {/* Import Title Component */}
        <Title text1={'best'} text2={'sellers'}/>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      {/* Import bestSeller Component */}
        {bestSeller.map((item, index) => (
          <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))}
      </div>
    </div>
  )
}
export default BestSeller;
