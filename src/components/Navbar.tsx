

function Navbar() {
  return (
    <>
    <nav className=" z-10 text-white bg-transparent fixed left-0 top-0 w-full">
  <div className="flex justify-between items-center px-5 py-3">
    {/* Left side - Brand */}
    <span className="font-bold text-lg px-10">TITAN</span>


    {/* Right side - Extra menu */}
    <ul className="flex gap-4 items-center">
      <li className="p-2 hover:cursor-pointer">Home</li>
      <li className="p-2 hover:cursor-pointer">Men</li>
      <li className="p-2 hover:cursor-pointer">Women</li>
    </ul>
  </div>

  {/* Middle menu - perfectly centered */}
  <ul className="flex gap-6 items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <li className="p-2 hover:cursor-pointer">Home</li>
    <li className="p-2 hover:cursor-pointer">Men</li>
    <li className="p-2 hover:cursor-pointer">Women</li>
    <li className="p-2 hover:cursor-pointer">Collections</li>
  </ul>
</nav>


    </>
  ) 
}

export default Navbar