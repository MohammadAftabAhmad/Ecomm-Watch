import { useState, useEffect } from "react"
import  { Link, useLocation } from "react-router-dom"
import logo from "../assets/images/logo.png"




function Navbar() {

const [isScrolled, setIsScrolled] = useState(false);
const location= useLocation();

 useEffect(()=>{
  if(location.pathname !=="/")
    setIsScrolled(true);
  return
 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return (
    <>
    <nav 
      className={`fixed top-0 left-0 w-full z-20 transition-all  text-black duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-md  ' : 'bg-transparent'
      }`}>
  <div className="flex justify-between items-center px-5 ">
    {/* Left side - Brand */}
    <span className="font-bold text-lg px-10"> <img className="w-32" src={logo} alt="" /></span>
   


    {/* Right side - Extra menu */}
    <ul className={`flex gap-4 items-center ${isScrolled? 'text-black': 'text-white'}`}>
      <li  className="p-2 hover:cursor-pointer"><Link to="/" >Home</Link>  </li>
      <li  className="p-2 hover:cursor-pointer"><Link to="/cart" >Cart </Link></li>
       <li className="p-2 hover:cursor-pointer"><Link  to ="/">Women</Link> </li>
    </ul>
  </div>

  {/* Middle menu - perfectly centered */}
  <ul className={`flex gap-6 items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isScrolled ? 'text-black':'text-white'}`}>
    <li className="p-2 hover:cursor-pointer"><Link to="/">Home</Link></li>
    <li className="p-2 hover:cursor-pointer"><Link to="/men">Men</Link> </li>
    <li className="p-2 hover:cursor-pointer"><Link to="/women">Women</Link> </li>
    <li className="p-2 hover:cursor-pointer"><Link to="/">Collections</Link> </li>
  </ul>
</nav>


    </>
  ) 
}

export default Navbar