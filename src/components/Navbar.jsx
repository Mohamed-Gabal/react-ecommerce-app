import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  // State For Change Menu
  const [ visible, setVisible] = useState(false);
  
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Logo */}
      <Link to='/'><img src={assets.logo} alt="logo" className="w-36" /></Link>

      {/* Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p className="uppercase text-lg">Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p className="uppercase text-lg">Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p className="uppercase text-lg">About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p className="uppercase text-lg">Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="searchIcon" className="w-5 cursor-pointer" />
        
        <div className="group relative">
          <img src={assets.profile_icon} alt="profileIcon" className="w-5 cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to='/cart' className="relative">
          <img src={assets.cart_icon} alt="cartIcon" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menuIcon" className="w-5 cursor-pointer sm:hidden" />
      </div>

      {/* Sidebar Menu For Small */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full': 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3">
            <img src={assets.dropdown_icon} alt="dropDown" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} to='/' className='py-2 pl-6 border uppercase'>Home</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/collection' className='py-2 pl-6 border uppercase'>Collection</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/about' className='py-2 pl-6 border uppercase'>About</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/contact' className='py-2 pl-6 border uppercase'>Contact</NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
