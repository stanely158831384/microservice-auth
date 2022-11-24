import Image from "next/image";
import "../styles/Home.module.css";
import seconderyPicture from "../public/web-animation.gif";
import TabsRender from "../components/test/tabs";
import Accordin from "../components/test/accordin";
import Faq from "../components/test/faq";

import { Carousel } from "flowbite-react";
export default function Home() {
  const handleClick = (e) => {};
  return (
    <div style={{ overflow: "hidden" }}>
      <section id="hero">
        {/* container for the image and text, or we call say the container for this section */}
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
          {/* text and buttons of linkage : explaination of your business */}
          <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
            <h1 className="text-3xl font-cyberFonts text-center lg:text-6xl lg:text-left hover:scale-125">
              A Scarborough Based Startup
            </h1>

            <p className="max-w-md mx-0 text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx=0">
              RacoonRepublic is a Scarborough based Startup. Our business
              includes the website development, Security camera installation,
              and Student forum operation. Since 2020, the company has been
              grown from a tiny single and focused studio to a multi-businesses
              capability tiny studio.
            </p>

            {/* Buttons container */}
            <div
              id="feature"
              className="flex items-center justify-center w-full space-x-4 lg:justify-start"
            >
              <a
                href="#"
                className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-2xl border-2 border-softBlue mt:text-base hover:bg-white hover:text-sofBlue"
              >
                Seneca Forum
              </a>

              <a
                href="#"
                className="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-2xl border-2 border-gray-300 mt:text-base hover:bg-white hover:text-sofBlue"
              >
                Home Security
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2 z-49">
            <div className="bg-hero-r"></div>
            <Image
              src={seconderyPicture}
              alt="main"
              id="mainPageId"
              className="absolute top-0 left-0"
            />
            {/* <Image src={mainPicture} alt="main" id="secondaryPageId" className="absolute bottom-0 right-0 scale-50"/> */}
          </div>
        </div>
      </section>

      <section id="features">
        <div className="container mx-auto mt-16 px-6">
          <h2 className="mb-6 text-4xl font-cyberFonts text-center">Goal</h2>
          <p className="max-w-md mx-auto text-center text-grayishBlue">
            Our goal is to create a platform that can connect all canadian
            students and entrepreneurs together, and based on this platform we
            are going to expand our business to other fields like eduation and
            e-commerce.
          </p>
        </div>
      </section>

      <section id="pictureIntroduction">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-10">
          <Carousel slideInterval={5000}>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
          </Carousel>
        </div>
      </section>

      <section id="tabs">
        <TabsRender />
      </section>

      <section id="faq">
        <Faq></Faq>
      </section>

      <section id="accordin">
        <Accordin />
      </section>

      {/* <section id="footer">
        <Footer />
      </section> */}
    </div>
  );
}
