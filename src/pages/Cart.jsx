// import { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../components/Title";
// import { assets } from "../assets/assets";
// import CartTotal from "../components/CartTotal";

// const Cart = () => {

//   const { products, currency, cartItems, updateQuantity, navigate} = useContext(ShopContext);
//   const [ cartData, setCartData ] = useState([]);

//   useEffect(() => {
//     const tempData = [];
//     for(const items in cartItems) {
//       for(const item in cartItems[items]) {
//         if (cartItems[items][item] > 0) {
//           tempData.push({
//             _id: items,
//             size: item,
//             quantity: cartItems[items][item]
//           })
//         }
//       }
//     }
//     setCartData(tempData);
//   }, [cartItems]);

//   return (
//     <div className="border-t pt-14">
//       <div className="text-2xl mb-3 uppercase">
//         {/* Import Title Component */}
//         <Title text1={'your'} text2={'cart'} />
//       </div>

//       <div>
//         {cartData.map((item) => {
//           const productData = products.find((product) => product._id === item._id);

//           return (
//             <div key={`${item._id}-${item.size}`} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
//               <div className="flex items-center gap-6">
//                 <img src={productData.image[0]} alt="" className="w-16 sm:w-20" />
//                 <div>
//                 <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
//               <div className="flex items-center gap-5 mt-2">
//                 <p>{currency}{productData.price}</p>
//                 <p className="px-2 sm:px-3 border bg-slate-50">{item.size}</p>
//               </div>
//                 </div>
//               </div>
//               <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} type="number" min={1} value={item.quantity} className="border max-w-10 sm:max-w-20 px-1 py-1" />
//                 <img onClick={() => updateQuantity(item._id, item.size, 0)} src={assets.bin_icon} alt="" className="w-4 mr-4 sm:w-5 cursor-pointer" />
//             </div>
//           )
//         })}
//       </div>

//       {/* Import CartTotal Component */}
//       <div className="flex justify-end my-20">
//         <div className="w-full sm:w-[450px]">
//           <CartTotal />
//           <div className="w-full text-end">
//             <button onClick={() => navigate('/place-order')} className="bg-black text-white text-sm my-8 px-6 py-3 cursor-pointer uppercase">Proceed To Checkout</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Cart;

import { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currencySymbol, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const cartData = useMemo(() => {
    const temp = [];

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        temp.push({
          _id: itemId,
          size,
          quantity: cartItems[itemId][size],
        });
      }
    }

    return temp;
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3 uppercase">
        <Title text1="your" text2="cart" />
      </div>

      <div>
        {cartData.map((item) => {
          const product = products.find((p) => p._id === item._id);
          if (!product) return null;

          return (
            <div
              key={`${item._id}-${item.size}`}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              {/* PRODUCT */}
              <div className="flex items-center gap-6">
                <img
                  src={product.image?.[0] || ""}
                  className="w-16 sm:w-20"
                  alt=""
                />

                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {product.name}
                  </p>

                  <div className="flex gap-5 mt-2">
                    <p>{currencySymbol}{product.price}</p>
                    <p className="px-2 border bg-slate-50">{item.size}</p>
                  </div>
                </div>
              </div>

              {/* INPUT */}
              <input
                value={item.quantity}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  updateQuantity(item._id, item.size, val);
                }}
                type="number"
                min={1}
                className="border max-w-20 px-1 py-1"
              />

              {/* DELETE */}
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                src={assets.bin_icon}
                className="w-5 cursor-pointer"
                alt=""
              />
            </div>
          );
        })}
      </div>

      {/* TOTAL */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />

          <div className="text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white px-6 py-3 uppercase text-sm"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
