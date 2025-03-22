import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../Components/images/Desktop.png';
import cart from '../Components/images/icon cart.png';
import profile from '../Components/images/Vector.png';
import wishlist from '../Components/images/wishlistttttttt.png';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-7 transition-all duration-300 z-50 ${
        isScrolled ? "bg-fuchsia-400 bg-opacity-10 backdrop-blur-md" : "bg-black bg-opacity-100"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between">
        {/* Logo / Menu Toggle */}
        <div className="w-full lg:w-auto flex justify-between items-center">
          <input type="checkbox" id="menu-toggle" className="hidden" />
          <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden text-white focus:outline-none pl-20">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>

        {/* Navbar Links */}
        <div id="menu" className="hidden w-full lg:flex lg:items-center lg:w-auto">
          <div className="ml-10">
            <img src={Logo} alt="" className="hover:underline w-60 h-10 ml-[-50px]"/>
          </div>
          <div className="ml-12">
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-9 text-white ">
              <li><Link to="/Home" className="hover:underline ">Home </Link> </li>
              <li><a href="#Accessories" className="hover:underline">Accessories</a></li>
              <li><a href="#Lessons" className="hover:underline">Lessons</a></li>
              <li><a href="#Repairs" className="hover:underline">Repairs</a></li>
              <li><a href="Help.jsx" className="hover:underline">Help & Support</a></li>
            </ul>
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex space-x-9 pt-4 lg:pt-0 lg:pl-[25vw]">
          {/* Cart Icon */}
          <Link to="/Cart" className="flex items-center">
            <img src={cart} alt="cart" className="" />
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="focus:outline-none">
              <img src={profile} alt="profile" className="mt-[8px] cursor-pointer" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg">
                <ul className="py-2 text-gray-700">
                  <li>
                    <Link to="/Login" className="block px-4 py-2 hover:bg-gray-100">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/Signup" className="block px-4 py-2 hover:bg-gray-100">
                      Signup
                    </Link> 
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Wishlist Icon */}
          <Link to="/wishlist" className="flex items-center">
            <img src={wishlist} alt="wishlist" className="h-10" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
