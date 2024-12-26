import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Replace with your 7 new image paths
const SlideImage1 = require("../../assets/slide1.png");
const SlideImage2 = require("../../assets/slide2.jpeg");
const SlideImage3 = require("../../assets/slide3.jpeg");
const SlideImage4 = require("../../assets/slide4.png");
const SlideImage5 = require("../../assets/slide5.jpeg");
const SlideImage6 = require("../../assets/slide6.jpeg");
const SlideImage7 = require("../../assets/slide7.png");

const LandingSection = () => {
  const scrollRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const maxLoops = 3; // Number of loops
    let currentLoop = 0;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        // Scroll right by the width of one slide
        scrollRef.current.scrollBy({
          left: window.innerWidth,
          behavior: "smooth",
        });

        // Reset scroll position after the last slide
        if (scrollRef.current.scrollLeft >= window.innerWidth * 7) {
          currentLoop += 1;
          if (currentLoop >= maxLoops) {
            clearInterval(interval); // Stop after the specified number of loops
          } else {
            setTimeout(() => {
              scrollRef.current.scrollLeft = 0; // Reset to the first slide after a short delay
            }, 500); // Delay before resetting
          }
        }
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isClient]);

  return (
    <section className="relative flex justify-center items-center bg-cover bg-center pt-12">
      {isClient && (
        <div
          ref={scrollRef}
          className="flex w-full overflow-x-hidden h-[600px] sm:h-[500px] md:h-[550px]"
        >
          {/* Adjusted Slides */}
          <div className="w-full flex-shrink-0 flex justify-center items-center">
            <Image
              src={SlideImage1}
              alt="Slide 1"
              className="rounded-lg"
              layout="intrinsic"
              width={1470}
              height={600}
              objectFit="cover"
            />
          </div>
          <div className="w-full flex-shrink-0 flex justify-center items-center">
            <Image
              src={SlideImage2}
              alt="Slide 2"
              className="rounded-lg"
              layout="intrinsic"
              width={1470}
              height={600}
              objectFit="cover"
            />
          </div>
          <div className="w-full flex-shrink-0 flex justify-center items-center">
            <Image
              src={SlideImage3}
              alt="Slide 3"
              className="rounded-lg"
              layout="intrinsic"
              width={1470}
              height={600}
              objectFit="cover"
            />
          </div>
          <div className="w-full flex-shrink-0 flex justify-center items-center">
            <Image
              src={SlideImage4}
              alt="Slide 4"
              className="rounded-lg"
              layout="intrinsic"
              width={1470}
              height={600}
              objectFit="cover"
            />
          </div>
          <div className="w-full flex-shrink-0 flex justify-center items-center">
            <Image
              src={SlideImage5}
              alt="Slide 5"
              className="rounded-lg"
              layout="intrinsic"
              width={1470}
              height={600}
              objectFit="cover"
            />
          </div>
          <div className="w-full flex-shrink-0 flex justify-center items-center">
            <Image
              src={SlideImage6}
              alt="Slide 6"
              className="rounded-lg"
              layout="intrinsic"
              width={1470}
              height={600}
              objectFit="cover"
            />
          </div>
          <div className="w-full flex-shrink-0 flex justify-center items-center">
            <Image
              src={SlideImage7}
              alt="Slide 7"
              className="rounded-lg"
              layout="intrinsic"
              width={1470}
              height={600}
              objectFit="cover"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export { LandingSection };