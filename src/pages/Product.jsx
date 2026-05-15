import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {

  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [ productData, setProductData ] = useState(false)

  return (
    <div>Product</div>
  );
}
export default Product;
