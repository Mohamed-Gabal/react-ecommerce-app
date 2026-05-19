// Import reactRouterDom Library
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Import Pages
const Home = lazy(() => import("../pages/Home"));
const Collection = lazy(() => import("../pages/Collection"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Product = lazy(() => import("../pages/Product"));
const Cart = lazy(() => import("../pages/Cart"));
const Login = lazy(() => import("../pages/Login"));
const PlaceOrder = lazy(() => import("../pages/PlaceOrder"));
const Orders = lazy(() => import("../pages/Orders"));

// Import Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

const AppRoutes = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <SearchBar />
      {/* Pages */}
      <Suspense fallback = {<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};
export default AppRoutes;
