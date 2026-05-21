import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currencySymbol = "$";
  const deliveryFee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : {};
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId, size) => {
    if (!size) return toast.error("Select Product Size");

    setCartItems((prev) => {
      const cart = structuredClone(prev);

      if (!cart[itemId]) cart[itemId] = {};
      if (!cart[itemId][size]) cart[itemId][size] = 0;

      cart[itemId][size] = (parseInt(cart[itemId][size], 10) || 0) + 1;
      return cart;
    });

    toast.success("Added to cart");
  };

  const updateQuantity = (itemId, size, quantity) => {
    setCartItems((prev) => {
      const cart = structuredClone(prev);

      if (!cart[itemId]) return prev;
      const parsedQuantity = parseInt(quantity, 10) || 0;

      if (parsedQuantity <= 0) {
        delete cart[itemId][size];

        if (Object.keys(cart[itemId]).length === 0) {
          delete cart[itemId];
        }
      } else {
        cart[itemId][size] = parsedQuantity;
      }

      return cart;
    });
  };

  const cartCount = useMemo(() => {
    let total = 0;

    for (const id in cartItems) {
      for (const size in cartItems[id]) {
        const qty = parseInt(cartItems[id][size], 10) || 0;
        total += qty;
      }
    }

    return total;
  }, [cartItems]);

  const cartAmount = useMemo(() => {
    let total = 0;

    for (const id in cartItems) {
      const product = products.find((p) => p._id === id);
      if (!product) continue;

      for (const size in cartItems[id]) {
        total += product.price * cartItems[id][size];
      }
    }

    return total;
  }, [cartItems]);

  const value = useMemo(
    () => ({
      products,
      search,
      setSearch,
      showSearch,
      setShowSearch,

      cartItems,
      addToCart,
      updateQuantity,

      cartCount,
      cartAmount,

      currencySymbol,
      deliveryFee,
      navigate,
    }),
    [search, showSearch, cartItems, cartCount, cartAmount],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
export default ShopContextProvider;
