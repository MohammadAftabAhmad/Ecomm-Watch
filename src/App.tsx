import { Outlet,useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, } from "react";
import './index.css'
// import HeroPage from "./pages/Home/HeroPage";
// import MwCard from "./pages/Home/Mwcard";

// import WatchCards from "./pages/Home/WatchCards";



function App() {
  return (
    <>
   {/* <Register/> */}
   <Navbar/>
   <ScrollToTop />
   <Outlet />
    </>
  )
}

export default App;

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    // use "smooth" for animation
  }, [pathname]);

  return null;
};
