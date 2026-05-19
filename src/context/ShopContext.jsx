import { createContext, useMemo } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        totalCount += cartItems[itemId][size];
      }
    }

    return totalCount;
  };

  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  const value = useMemo (
    () => ({
      products,
      currency,
      delivery_fee,
      search,
      setSearch,
      showSearch,
      setShowSearch,
      cartItems,
      addToCart,
      getCartCount,
      updateQuantity,
      getCartAmount,
      navigate,
    }),
    [search, showSearch, cartItems],
  );

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;

// import {
//   createContext,
//   useState,
//   useMemo,
//   useCallback,
// } from "react";

// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// import { products } from "../assets/assets";

// export const ShopContext = createContext();

// const ShopContextProvider = ({ children }) => {
//   // Constants
//   const currency = "$";
//   const deliveryFee = 10;

//   // States
//   const [search, setSearch] = useState("");
//   const [showSearch, setShowSearch] = useState(false);
//   const [cartItems, setCartItems] = useState({});

//   // Navigation
//   const navigate = useNavigate();

//   const productsMap = useMemo(() => {
//     return products.reduce((acc, product) => {
//       acc[product._id] = product;
//       return acc;
//     }, {});
//   }, []);

//   const addToCart = useCallback((itemId, size) => {
//     if (!size) {
//       toast.error("Select Product Size");
//       return;
//     }

//     setCartItems((prev) => {
//       const cartData = structuredClone(prev);

//       if (cartData[itemId]) {
//         if (cartData[itemId][size]) {
//           cartData[itemId][size] += 1;
//         } else {
//           cartData[itemId][size] = 1;
//         }
//       } else {
//         cartData[itemId] = {};
//         cartData[itemId][size] = 1;
//       }

//       return cartData;
//     });
//   }, []);

//   const updateQuantity = useCallback((itemId, size, quantity) => {
//     setCartItems((prev) => {
//       const cartData = structuredClone(prev);

//       cartData[itemId][size] = quantity;

//       return cartData;
//     });
//   }, []);

//   const cartCount = useMemo(() => {
//     let totalCount = 0;

//     for (const itemId in cartItems) {
//       for (const size in cartItems[itemId]) {
//         totalCount += cartItems[itemId][size];
//       }
//     }

//     return totalCount;
//   }, [cartItems]);

//   const cartAmount = useMemo(() => {
//     let totalAmount = 0;

//     for (const itemId in cartItems) {
//       const itemInfo = productsMap[itemId];

//       for (const size in cartItems[itemId]) {
//         try {
//           if (cartItems[itemId][size] > 0) {
//             totalAmount +=
//               itemInfo.price * cartItems[itemId][size];
//           }
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     }

//     return totalAmount;
//   }, [cartItems, productsMap]);

//   const value = useMemo(
//     () => ({
//       // Products
//       products,
//       productsMap,

//       // Search
//       search,
//       setSearch,
//       showSearch,
//       setShowSearch,

//       // Cart
//       cartItems,
//       addToCart,
//       updateQuantity,
//       cartCount,
//       cartAmount,

//       // App
//       currency,
//       deliveryFee,
//       navigate,
//     }),
//     [
//       search,
//       showSearch,
//       cartItems,
//       addToCart,
//       updateQuantity,
//       cartCount,
//       cartAmount,
//       navigate,
//       productsMap,
//     ]
//   );

//   return (
//     <ShopContext.Provider value={value}>
//       {children}
//     </ShopContext.Provider>
//   );
// };
// export default ShopContextProvider;
