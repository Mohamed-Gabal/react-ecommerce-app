import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from './Title';
import ProductItems from "./ProductItems";

const LatestCollection = () => {

  const { products } = useContext(ShopContext);
  const [ latestProducts, steLatestProducts ] = useState([]);

  useEffect (() => {
    steLatestProducts(products.slice(0,10));
  },[])

  return (
    <div className='my-10'>
      <div className="text-center py-8 text-3xl uppercase">
        {/* Import Title Component */}
        <Title text1={'latest'} text2={'collection'}/>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
        </p>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          latestProducts.map((item, index) => (
            <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}
export default LatestCollection;
