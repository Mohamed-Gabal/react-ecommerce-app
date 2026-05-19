
// Import ToastContainer Library
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* ToastContainer */}
      <ToastContainer />
      <AppRoutes />
    </div>
  );
};
export default App;
