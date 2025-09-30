import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") setIsScrolled(true);
    return;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-20 transition-all  text-black duration-300 ease-in-out ${
          isScrolled ? "bg-white shadow-md  " : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-5 ">
          {/* Left side - Brand */}
          <span className="font-bold text-lg px-10">
            {" "}
            <img className="w-32" src={logo} alt="" />
          </span>

          {/* Right side - Extra menu */}
          <ul
            className={`flex gap-4 items-center ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <li className="p-2 hover:cursor-pointer">
              <Link to="/">Home</Link>{" "}
            </li>
            <li className="p-2 hover:cursor-pointer">
              <Link to="/cart">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={` ${isScrolled ? "stroke-black" : "stroke-white"}`}
                >
                  <path
                    d="M8 11.01V11M16 11.01V11M8 8V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V8M8 8H6.84027C5.80009 8 4.93356 8.79732 4.84718 9.83391L4.18051 17.8339C4.08334 18.9999 5.00352 20 6.1736 20H17.8264C18.9965 20 19.9167 18.9999 19.8195 17.8339L19.1528 9.83391C19.0664 8.79732 18.1999 8 17.1597 8H16M8 8H16"
                    stroke="currentColour"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
              </Link>
            </li>
            <li className="p-2 hover:cursor-pointer">
              <Link to="/">Women</Link>{" "}
            </li>
          </ul>
        </div>

        {/* Middle menu - perfectly centered */}
        <ul
          className={`flex gap-6 items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <li className="p-2 hover:cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 hover:cursor-pointer">
            <Link to="/men">Men</Link>{" "}
          </li>
          <li className="p-2 hover:cursor-pointer">
            <Link to="/women">Women</Link>{" "}
          </li>
          <li className="p-2 hover:cursor-pointer">
            <Link to="/">Collections</Link>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
