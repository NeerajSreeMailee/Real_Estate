import Head from "next/head";
import Navbar from "../components/Navbar"; // Make sure Navbar is imported here
import { FaBuilding, FaHome, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa"; // Importing icons for the Features section

const Features = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-screen-xl">
        {/* Centered and Bold Title */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Real Estate Features
        </h2>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center justify-center text-center">
            <FaBuilding size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Prime Locations
            </h3>
            <p className="text-gray-600">
              Discover properties located in the most sought-after neighborhoods with excellent connectivity.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center justify-center text-center">
            <FaHome size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Luxurious Living
            </h3>
            <p className="text-gray-600">
              Experience luxurious living with high-end amenities and spacious, modern designs.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center justify-center text-center">
            <FaMapMarkerAlt size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Strategic Accessibility
            </h3>
            <p className="text-gray-600">
              Our properties are strategically located with easy access to shopping centers, schools, and transport hubs.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center justify-center text-center">
            <FaDollarSign size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Competitive Pricing
            </h3>
            <p className="text-gray-600">
              Offering competitive prices with flexible payment plans to help you invest in your dream property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Real Estate App</title>
        <meta name="description" content="Real estate platform showcasing premium properties." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        body {
          background-color: #c5deff; /* Apply the color to the entire background */
          margin: 0; /* Remove any default margin */
          font-family: 'Inter', sans-serif; /* Example font family */
        }
      `}</style>
      <Navbar /> {/* Navbar is included here */}
      <Features /> {/* Features section is included below the Navbar */}
    </>
  );
}