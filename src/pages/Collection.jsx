import { useContext, useMemo, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from '../components/Title';
import ProductItems from '../components/ProductItems'

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [ showFilter, setShowFilter ] = useState(false);

  const [ category, setCategory ] = useState([]);
  const [ subCategory, setSubCategory ] = useState([]);

  const [ sortType, setSortType ] = useState('relavent');
  
  const toggleCategory = (e) => {
    if(category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

    const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const filterProducts = useMemo(() => {
    let productsCopy = [...products];

    // Search
    if(showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    // Category Filter
    if(category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    // SubCategory Filter
    if(subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    return productsCopy;
  }, [products, search, showSearch, category, subCategory]);

  const sortedProducts = useMemo(() => {
    let fpCopy = [...filterProducts];

    switch (sortType) {
      case "low-high":
        return fpCopy.sort((a, b) => a.price - b.price);

      case "high-low":
        return fpCopy.sort((a, b) => b.price - a.price);
        
      default:
        return fpCopy;  
    }
  }, [filterProducts, sortType]) 

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

      {/* Filter Option */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center gap-2 cursor-pointer uppercase">
          Filters
          <img src={assets.dropdown_icon} alt="dropDown" className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5  py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium uppercase">categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Men'} onChange={toggleCategory}/>
              Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Women'} onChange={toggleCategory}/>
              Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Kids'} onChange={toggleCategory}/>
              Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium uppercase">type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/>
              Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/>
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/>
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          {/* Import Title Component */}
          <Title text1={'ALL'} text2={'COLLECTION'}/>

          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value='relavent'>Sort by: Relavent</option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {sortedProducts.map((item) => (
            <ProductItems key={item._id} id={item._id} name={item.name} price={item.price} image={item.image}/>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Collection;
