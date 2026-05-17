import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from '../components/Title';
import ProductItem from '../components/ProductItems';

const RelatedProducts = ({category, subCategory}) => {

  const { products } = useContext(ShopContext);
  const [ related, setRelated ] = useState([]);


  useEffect(() => {

    if(products.length > 0) {
      let productCopy = products.slice();
      productCopy =  productCopy.filter((item) => category === item.category);
      productCopy = productCopy.filter((item) => subCategory === item.subCategory);

      setRelated(productCopy.slice(0, 5));
    }

  }, [products]);

  return (
    <div className='my-24'>
      <div className="text-center text-3xl py-2 uppercase">
        {/* Import Title Component */}
        <Title text1={'Related'} text2={'Products'} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {/* Import ProductItem Component */}
        {related.map((item, index) => (
          <ProductItem key={index} id={item._id} name={item.name } price={item.price} image={item.image}/>
        ))}
      </div>
    </div>
  )
}
export default RelatedProducts;
