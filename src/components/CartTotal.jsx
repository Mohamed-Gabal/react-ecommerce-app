

import { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

const CartTotal = () => {
  const { currencySymbol, deliveryFee, cartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl uppercase">
        <Title text1="Cart" text2="Totals" />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{currencySymbol} {cartAmount}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{currencySymbol}{deliveryFee}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Total</p>
          <p>
            {currencySymbol} {cartAmount === 0 ? 0 : cartAmount + deliveryFee}.00
          </p>
        </div>
      </div>
    </div>
  );
};
export default CartTotal;