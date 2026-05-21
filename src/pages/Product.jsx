
import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {

  const { productId } = useParams();
  const { products, currencySymbol, addToCart } = useContext(ShopContext);
  const [ image, setImage ] = useState('');
  const [ size, setSize ] = useState('');

  
  const productData = useMemo(() => {
    return products.find((item) => item._id === productId);
  }, [products, productId]);

  useEffect(() => {
    if (productData) {
      setImage(productData.image[0]);
    }
  }, [productData]);

  return productData ?(
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
    {/* Product Data */}
    <div className="flex flex-col sm:flex-row gap-12 sm:gap-12">

      {/* Product Image */}
      <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
        <div className="flex sm:flex-col justify-between sm:justify-normal sm:w-[18.7%] w-full overflow-x-auto sm:overflow-y-scroll">
          {productData.image.map((item) => (
            <img onClick={() => setImage(item)} key={item._id} src={item} alt="image" className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />
          ))}
        </div>
        <div className="w-full sm:w-[80%]">
          {image && (<img src={image} alt="product" className="w-full h-auto cursor-pointer"/>)}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          <img src={assets.star_icon} alt="w-3 5" />
          <img src={assets.star_icon} alt="w-3 5" />
          <img src={assets.star_icon} alt="w-3 5" />
          <img src={assets.star_icon} alt="w-3 5" />
          <img src={assets.star_dull_icon} alt="w-3 5" />
          <p className="pl-2">(122)</p>
        </div>
        <p className="mt-5 text-3xl font-medium">{currencySymbol}{productData.price}</p>
        <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
        <div className="flex flex-col gap-4 my-8">
          <p>Select,Size</p>
          <div className="flex gap-2">
            {productData?.sizes?.map((item) => (
              <button onClick={()=> setSize(item)} key={item._id} className={`border-2 py-2 px-4 bg-gray-100 cursor-pointer ${item === size ? 'border-orange-500' : ''}`}>{item}</button>
            ))}
          </div>
        </div>
        <button disabled={!size}  onClick={() => addToCart(productData._id, size)} className={`px-8 py-3 text-sm uppercase text-white ${size ? "bg-black cursor-pointer active:bg-gray-700" : "bg-gray-400 cursor-not-allowed"}`}>Add To Cart</button>
        <hr className="mt-8 sm:w-4/5" />
        <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
          <p>100% Original Product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy withing 7 days.</p>
        </div>
      </div>
    </div>

    {/* Description & Review Section */}
    <div className="mt-20">
      <div className="flex gap-2">
        <b className="border px-5 py-3 text-sm">Description</b>
        <p className="border px-5 py-3 text-sm">Reviews (122)</p>
      </div>
      <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
        <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet.</p>
        <p>E-commerce website typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors).</p>
      </div>
    </div>

    {/* Display Related Products */}
    {/* Import RelatedProducts Component */}
    <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : 
  <div className="flex justify-center items-center h-[60vh]">
    <p className="text-2xl">Loading Product...</p>
  </div>
}
export default Product;



