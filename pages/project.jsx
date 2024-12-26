import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaCogs, FaBuilding, FaTag } from "react-icons/fa";
import Navbar from "../components/Navbar";

// Slide Component
const Slide = ({ src, alt }) => (
  <div className="w-full flex-shrink-0 flex justify-center items-center transition-transform transform hover:scale-105">
    <Image
      src={src}
      alt={alt}
      className="rounded-lg"
      layout="intrinsic"
      width={1470}
      height={600}
      objectFit="cover"
    />
  </div>
);

// Feature Box Component
const FeatureBox = ({ icon: Icon, title, description }) => (
  <div className="p-6 transition-all transform hover:scale-105 bg-white rounded-lg shadow-xl">
    <div className="flex items-center mb-4">
      <Icon className="text-4xl text-blue-900 mr-4 transition-all transform hover:scale-110" />
      <h4 className="text-blue-900 text-xl font-bold">{title}</h4>
    </div>
    <p className="text-blue-800 text-lg">{description}</p>
  </div>
);

// Main Project Page Component
const ProjectPage = () => {
  const scrollRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const maxLoops = 3;
    let currentLoop = 0;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });

        if (scrollRef.current.scrollLeft >= window.innerWidth * 5) {
          currentLoop += 1;
          if (currentLoop >= maxLoops) {
            clearInterval(interval);
          } else {
            setTimeout(() => {
              scrollRef.current.scrollLeft = 0;
            }, 500);
          }
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isClient]);

  const slides = [
    { src: "/assets/project1.avif", alt: "Slide 1" },
    { src: "/assets/project2.avif", alt: "Slide 2" },
    { src: "/assets/project3.avif", alt: "Slide 3" },
    { src: "/assets/project4.jpeg", alt: "Slide 4" },
    { src: "/assets/project5.jpeg", alt: "Slide 5" },
  ];

  const features = [
    { icon: FaBuilding, title: "Project Name", description: "MK Tejus Apartments" },
    { icon: FaCogs, title: "Features", description: "Spacious, 3 Bedrooms, 2 Bathrooms" },
    { icon: FaMapMarkerAlt, title: "Location", description: "Pithapuram Colony, Visakhapatnam" },
    { icon: FaTag, title: "Price", description: "INR 25,00,000" },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-[#c5deff] py-12 mt-12"> {/* Added mt-12 to give space between Navbar and content */}
        {/* Image Slider Section */}
        <section className="relative flex justify-center items-center bg-cover bg-center pt-12">
          {isClient && (
            <div ref={scrollRef} className="flex w-full overflow-x-hidden h-[400px] md:h-[600px]">
              {slides.map((slide, index) => (
                <Slide key={index} src={slide.src} alt={slide.alt} />
              ))}
            </div>
          )}
        </section>

        {/* Project Information Section */}
        <section className="grid grid-cols-1 gap-12 mt-16 px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center text-blue-900 mb-12 transition-all transform hover:scale-105">
            About the Project
          </h2>
          <div className="p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-6">
              Key Features
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureBox
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ProjectPage;