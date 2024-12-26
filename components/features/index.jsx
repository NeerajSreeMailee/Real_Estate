import { FaBuilding, FaHome, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

function Features() {
  return (
    <section className="bg-[#F5F5DC] py-16">
      <div className="container mx-auto max-w-screen-xl">
        {/* Centered and Bold Title */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Real Estate Features
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center">
            <FaBuilding size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Prime Locations
            </h3>
            <p className="text-gray-600 text-center">
              Discover properties located in the most sought-after neighborhoods with excellent connectivity.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaHome size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Luxurious Living
            </h3>
            <p className="text-gray-600 text-center">
              Experience luxurious living with high-end amenities and spacious, modern designs.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaMapMarkerAlt size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Strategic Accessibility
            </h3>
            <p className="text-gray-600 text-center">
              Our properties are strategically located with easy access to shopping centers, schools, and transport hubs.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaDollarSign size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Competitive Pricing
            </h3>
            <p className="text-gray-600 text-center">
              Offering competitive prices with flexible payment plans to help you invest in your dream property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Features };