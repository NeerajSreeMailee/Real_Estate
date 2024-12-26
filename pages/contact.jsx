import { useState } from "react";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <>
      <Navbar />
      <section className="bg-[#c5deff] py-12 mt-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Column */}
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-blue-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-blue-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-blue-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 rounded-lg"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Map Column */}
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.981091429065!2d83.32200497480715!3d17.734829287130155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943dd066e6c0b%3A0x854c5fed5de233b2!2sMK%20Tejus%20Apartments!5e0!3m2!1sen!2sin!4v1677866071427!5m2!1sen!2sin"
                width="100%"
                height="300"
                className="rounded-lg border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MK Tejus Apartments"
              ></iframe>
            </div>
          </div>

          {/* Reach Out Section */}
          <div className="mt-12 bg-blue-900 text-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold mb-4">Reach Out</h2>
            <p className="text-lg mb-4">
              Feel free to get in touch with us. We are always available to
              assist you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-2">Our Location</h3>
                <p>VDC, Gitam Visakhapatnam</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Email</h3>
                <p>socialmydiyas@gmail.com</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Phone</h3>
                <p>+91 8985250220</p>
                <p>+91 9494259453</p>
                <p>Call us Toll Free: +91 9494259453</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 bg-[#f0f0f0] p-8 rounded-lg shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-lg flex-1">
              <h3 className="text-2xl font-semibold mb-4">
                Would you like to start a project with us?
              </h3>
              <p>
                Let’s work together to create something amazing! Call us now
                and take the first step toward transforming your vision into
                reality.
              </p>
            </div>
            <div className="text-lg font-bold text-blue-900 flex flex-col sm:flex-row items-center gap-4">
              <p>Call us at</p>
              <a
                href="https://wa.me/919494259453"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition"
              >
                +91 9494259453
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;