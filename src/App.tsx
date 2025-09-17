import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
// import HeroPage from "./pages/Home/HeroPage";
// import MwCard from "./pages/Home/Mwcard";

// import WatchCards from "./pages/Home/WatchCards";



function App() {
  return (
    <>
   {/* <Register/> */}
   <Navbar/>
   <Outlet />
    </>
  )
}

export default App;
