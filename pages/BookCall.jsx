import Head from "next/head";
import Navbar from "../components/Navbar"; // Ensure Navbar is imported here
import { useState } from "react"; // To handle state for dropdowns

const BookCall = () => {
  const [callType, setCallType] = useState(""); // Tracks the selected call type (Zoom or Queries)
  const [details, setDetails] = useState(""); // Tracks the details of the selected call type (Zoom or Queries)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    query: "",
  });

  const [timeSlot, setTimeSlot] = useState(""); // For handling time slot selection

  // Handle the first dropdown selection change (call type)
  const handleCallTypeChange = (e) => {
    setCallType(e.target.value);
    setDetails(""); // Reset details when switching call types
  };

  // Handle the second dropdown selection change (call details)
  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  // Handle form data input (name, email, phone, location, query)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle the time slot selection
  const handleTimeSlotChange = (e) => {
    setTimeSlot(e.target.value);
  };

  // Function to generate Zoom link (real link would be dynamically generated in a real app)
  const getZoomLink = (timeSlot) => {
    // Replace with actual logic to generate a Zoom link (e.g., using a Zoom API)
    return `https://zoom.us/j/1234567890?pwd=abcd1234`; // Example format for Zoom link
  };

  return (
    <section className="bg-[#F5F5DC] py-16 mt-8"> {/* Added mt-8 for space above */}
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Book a Call with Us
        </h2>

        <form className="space-y-6">
          {/* Only display name, email, phone, and location for Zoom Call */}
          {callType === "zoomCall" && (
            <>
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg bg-[#c5deff] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg bg-[#c5deff] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg bg-[#c5deff] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-lg font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg bg-[#c5deff] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your location"
                />
              </div>
            </>
          )}

          {/* First Dropdown: Select Call Type */}
          <div>
            <label htmlFor="callType" className="block text-lg font-medium text-gray-700 mb-2">
              Choose Call Type
            </label>
            <select
              id="callType"
              className="w-full p-3 border rounded-lg bg-[#c5deff] focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={callType}
              onChange={handleCallTypeChange}
            >
              <option value="">Select Call Type</option>
              <option value="zoomCall">Zoom Call</option>
              <option value="queries">Queries</option>
            </select>
          </div>

          {/* Second Dropdown: Select Details Based on Call Type */}
          {callType && (
            <div>
              <label htmlFor="details" className="block text-lg font-medium text-gray-700 mb-2">
                {callType === "zoomCall" ? "Select Zoom Call Details" : "Select Query Details"}
              </label>
              <select
                id="details"
                className="w-full p-3 border rounded-lg bg-[#c5deff] focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={details}
                onChange={handleDetailsChange}
              >
                <option value="">Select Details</option>
                {callType === "zoomCall" && (
                  <>
                    <option value="zoomLink">Zoom Call Link</option>
                    <option value="timeSlot">Preferred Time Slot</option>
                  </>
                )}
                {callType === "queries" && (
                  <>
                    <option value="productQuery">Product Inquiry</option>
                    <option value="technicalSupport">Technical Support</option>
                    <option value="generalQuery">General Query</option>
                  </>
                )}
              </select>
            </div>
          )}

          {/* Handle Zoom Call Options */}
          {details === "zoomLink" && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">Your Zoom Call Link:</h3>
              <p className="text-gray-600">
                <a href={getZoomLink()} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  Click here to join the Zoom call
                </a>
              </p>
            </div>
          )}

          {details === "timeSlot" && (
            <div>
              <label htmlFor="timeSlot" className="block text-lg font-medium text-gray-700 mb-2">
                Choose Preferred Time Slot
              </label>
              <select
                id="timeSlot"
                className="w-full p-3 border rounded-lg bg-[#c5deff] focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={timeSlot}
                onChange={handleTimeSlotChange}
              >
                <option value="">Select Time Slot</option>
                <option value="slot1">Slot 1: 9:00 AM - 10:00 AM</option>
                <option value="slot2">Slot 2: 2:00 PM - 3:00 PM</option>
                <option value="slot3">Slot 3: 4:00 PM - 5:00 PM</option>
              </select>
              {timeSlot && (
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800">Zoom Call Link:</h3>
                  <p className="text-gray-600">
                    <a href={getZoomLink(timeSlot)} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      Click here to join the Zoom call at {timeSlot}
                    </a>
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Handle Queries Section */}
          {callType === "queries" && (
            <div>
              <label htmlFor="query" className="block text-lg font-medium text-gray-700 mb-2">
                Enter Your Query
              </label>
              <textarea
                id="query"
                name="query"
                value={formData.query}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg bg-[#c5deff] focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your query here"
                rows="4"
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
              disabled={!details}
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Book a Call</title>
        <meta name="description" content="Book a call for Zoom or queries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar /> {/* Navbar is included here */}
      <BookCall /> {/* Book a Call section is included below the Navbar */}
    </>
  );
}

