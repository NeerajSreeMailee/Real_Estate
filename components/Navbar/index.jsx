import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.avif"; // Replace with your actual logo path

const Navbar = () => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="h-16 flex items-center justify-between px-4 sm:px-8 md:px-16 mx-auto mt-4 relative">
      {/* Left: Logo */}
      <div className="flex items-center flex-shrink-0">
        <Image src={Logo} alt="Logo" width={80} height={80} className="object-contain" />
      </div>

      {/* Center: Navigation Links */}
      <div className="flex-grow hidden md:flex items-center justify-center">
        <ul className="flex space-x-10 text-lg font-medium">
          <li>
            <Link href="/">
              <a className="text-gray-700 transition duration-300 ease-in-out hover:text-gray-900">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/project">
              <a className="text-gray-700 transition duration-300 ease-in-out hover:text-gray-900">
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <a className="text-gray-700 transition duration-300 ease-in-out hover:text-gray-900">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-gray-700 transition duration-300 ease-in-out hover:text-gray-900">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Right: "Book a Call" Button */}
      <div className="hidden md:flex items-center flex-shrink-0">
        <Link href="/BookCall">
          <a className="bg-green-500 text-white font-bold text-xl py-5 px-12 rounded-lg transition duration-300 ease-in-out hover:bg-green-600">
            Book a Call
          </a>
        </Link>
      </div>

      {/* Mobile Menu Toggle (Hamburger Menu) */}
      <div className="flex md:hidden items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg transition-all ease-in-out duration-300 ${
          isMobileMenuOpen ? "max-h-[500px] py-4" : "max-h-0 py-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-lg">
          <li>
            <Link href="/">
              <a className="text-gray-700 transition duration-300 ease-in-out hover:text-gray-900">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/project">
              <a className="text-gray-700 transition duration-300 ease-in-out hover:text-gray-900">
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <a className="text-gray-700 transition duration-300 ease-in-out hover:text-gray-900">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-gray-700 transition duration-300 ease-in-out hover:text-gray-900">
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link href="/BookCall">
              <a className="bg-green-500 text-white font-bold text-xl py-5 px-12 rounded-lg transition duration-300 ease-in-out hover:bg-green-600">
                Book a Call
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;