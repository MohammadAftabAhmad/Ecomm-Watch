import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-10 px-6 sm:px-10 lg:px-20 lg:mt-20">
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* BRAND SECTION */}
        <div>
          <h2 className="text-3xl font-bold tracking-wider text-white mb-4">
            ZIETX
          </h2>
          <p className="text-gray-400 text-sm leading-6">
            Redefining elegance with timeless craftsmanship. Discover premium
            watches designed for precision, style, and identity.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* SHOP LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/men" className="hover:text-white">
                Men’s Watches
              </Link>
            </li>
            <li>
              <Link to="/women" className="hover:text-white">
                Women’s Watches
              </Link>
            </li>
            <li>
              <Link to="/couples" className="hover:text-white">
                Couple Watches
              </Link>
            </li>
            <li>
              <Link to="/luxury" className="hover:text-white">
                Luxury Collection
              </Link>
            </li>
            <li>
              <Link to="/slick" className="hover:text-white">
                Slick Collection
              </Link>
            </li>
          </ul>
        </div>

        {/* CUSTOMER SERVICE */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Customer Service
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-white">
                Shipping & Delivery
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-white">
                Returns & Exchange
              </Link>
            </li>
            <li>
              <Link to="/warranty" className="hover:text-white">
                Warranty
              </Link>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to receive updates on new launches & exclusive offers.
          </p>

          <div className="flex items-center bg-white/10 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none px-4 py-3 text-sm placeholder-gray-400 w-full"
            />
            <button className="px-5 py-3 bg-white text-black font-semibold text-sm hover:bg-gray-200 transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-px bg-gray-700/40 mt-14 mb-6"></div>

      {/* BOTTOM SECTION */}
      <div className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} <span className="text-white">ZIETX</span>.
        All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
