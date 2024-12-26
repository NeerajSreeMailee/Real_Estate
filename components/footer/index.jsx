// components/footer.js
import Image from 'next/image'; // Import Image component from Next.js
import { AiOutlineGithub } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';

export const Footer = () => {
  return (
    <footer className="bg-[#c5deff] border-t py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-start">
          {/* Logo and Company Name */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-4">
              {/* Logo Image */}
              <Image
                src="/logo.avif" // Path to your logo in the public folder
                alt="MyDiyas Logo"
                width={48} // Adjust width as necessary
                height={48} // Adjust height as necessary
                className="object-contain"
              />
              <h3 className="text-2xl font-bold text-gray-900">MyDiyas - Marketing Agency</h3>
            </div>

            {/* Social Media Icons Below Company Name */}
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <AiOutlineGithub size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <FiInstagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <GrLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Get In Touch Section */}
          <div className="flex flex-col items-end space-y-4">
            <h4 className="text-lg font-bold text-gray-900">Get In Touch</h4>
            <a
              href="mailto:socialmydiyas@gmail.com"
              className="text-gray-500 hover:text-gray-900"
            >
              socialmydiyas@gmail.com
            </a>
            <a
              href="tel:+918985250220"
              className="text-gray-500 hover:text-gray-900"
            >
              +91 8985250220
            </a>
            <a
              href="tel:+919494259453"
              className="text-gray-500 hover:text-gray-900"
            >
              +91 9494259453
            </a>
          </div>
        </div>

        {/* Horizontal Line with #F5F5DC color */}
        <hr className="my-8 border-[#F5F5DC]" />

        {/* Copyright Section */}
        <div className="text-center text-gray-500">
          <p>
            Copyright © 2024 MyDiyas - Marketing Agency | Powered by MyDiyas - Marketing Agency
          </p>
        </div>
      </div>
    </footer>
  );
};