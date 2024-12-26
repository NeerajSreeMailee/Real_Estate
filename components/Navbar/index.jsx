import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.avif"; // Replace with your actual logo path

const Navbar = () => {
  return (
    <nav className="h-16 flex items-center justify-between px-16 mx-auto mt-4">
      {/* Left: Logo */}
      <div className="flex items-center flex-shrink-0">
        <Image src={Logo} alt="Logo" width={80} height={80} className="object-contain" />
      </div>

      {/* Center: Navigation Links */}
      <div className="flex-grow flex items-center justify-center">
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
      <div className="flex items-center flex-shrink-0">
        <Link href="/BookCall">
          <a className="bg-green-500 text-white font-bold text-xl py-5 px-12 rounded-lg transition duration-300 ease-in-out hover:bg-green-600">
            Book a Call
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
