import { useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3 uppercase">
          {/* Import Title Component */}
          <Title text1={"Delivery"} text2={"Information"} />
        </div>

        <div className="flex gap-3">
          <input type="text" placeholder="First Name" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
          <input type="text" placeholder="Last Name" className="border border-gray-300 rounded py-1.5 px-3.5 w-full"/>
        </div>
        <input type="email" placeholder="Email Address" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
        <input type="text" placeholder="Street" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
        <div className="flex gap-3">
          <input type="text" placeholder="City" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
          <input type="text" placeholder="State" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
        </div>
        <div className="flex gap-3">
          <input type="tell" placeholder="Zipcode" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
          <input type="text" placeholder="Country" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
        </div>
        <input type="tell" placeholder="Phone" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
      </div>

      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          {/* Import CartTotal Component */}
          <CartTotal />
        </div>

        <div className="mt-12 uppercase">
          {/* Import Title Component */}
          <Title text1={"payment"} text2={"method"} />
          <div className="flex flex-col lg:flex-row gap-3">
            {/* Stripe */}
            <div onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border px-4 py-3 cursor-pointer">
              <div className={`w-4 h-4 border rounded-full ${method === "stripe" ? "bg-green-400" : ""}`}></div>
              <img src={assets.stripe_logo} alt="Stripe" className="h-5" />
            </div>

            {/* Razorpay */}
            <div onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border px-4 py-3 cursor-pointer">
              <div className={`w-4 h-4 border rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`}></div>
              <img src={assets.razorpay_logo} alt="Razorpay" className="h-5" />
            </div>

            {/* COD */}
            <div onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border px-4 py-3 cursor-pointer">
              <div className={`w-4 h-4 border rounded-full ${method === "cod" ? "bg-green-400" : ""}`}></div>
              <p className="text-gray-500 text-sm font-medium">Cash On Delivery</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              onClick={() => navigate("/orders")}
              className="bg-black text-white px-16 py-3 text-sm cursor-pointer uppercase"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlaceOrder;
