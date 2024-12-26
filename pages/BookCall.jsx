<section className="bg-[#F5F5DC] py-8 sm:py-12 md:py-16 mt-8">
  <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-screen-lg">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
      Book a Call with Us
    </h2>

    <form className="space-y-6">
      {/* Only display name, email, phone, and location for Zoom Call */}
      {callType === "zoomCall" && (
        <>
          <div>
            <label htmlFor="name" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full max-w-md p-3 border rounded-lg bg-[#c5deff] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full max-w-md p-3 border rounded-lg bg-[#c5deff] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full max-w-md p-3 border rounded-lg bg-[#c5deff] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full max-w-md p-3 border rounded-lg bg-[#c5deff] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your location"
            />
          </div>
        </>
      )}

      {/* First Dropdown: Select Call Type */}
      <div>
        <label htmlFor="callType" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
          Choose Call Type
        </label>
        <select
          id="callType"
          className="w-full max-w-md p-3 border rounded-lg bg-[#c5deff] focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <label htmlFor="details" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
            {callType === "zoomCall" ? "Select Zoom Call Details" : "Select Query Details"}
          </label>
          <select
            id="details"
            className="w-full max-w-md p-3 border rounded-lg bg-[#c5deff] focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      {/* Time Slot Section */}
      {details === "timeSlot" && (
        <div>
          <label htmlFor="timeSlot" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
            Choose Preferred Time Slot
          </label>
          <select
            id="timeSlot"
            className="w-full max-w-md p-3 border rounded-lg bg-[#c5deff] focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Zoom Call Link:</h3>
              <p className="text-gray-600">
                <a href={getZoomLink(timeSlot)} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  Click here to join the Zoom call at {timeSlot}
                </a>
              </p>
            </div>
          )}
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="w-full max-w-xs bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400"
          disabled={!details}
        >
          Submit Request
        </button>
      </div>
    </form>
  </div>
</section>