import React from "react";
import home1image from "./assets/home1image.svg";
import { Button } from './components/ui/button';

const Home: React.FC = () => {
  return <div>
    <div className="Home1 outfit-font pt-28 flex gap-6 flex-col md:flex-row items-center justify-center min-h-full md:min-h-screen bg-themelight dark:bg-bagcolor">
      {/* Left Section */}
      <div className="home1-right w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-8 space-y-4">
        <p className="text-xl text-black dark:text-white">Hi, I am</p>
        <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-themehead dark:text-thememain">
          Anshul Mokhale
        </h1>
        <p className="text-lg text-center md:text-start text-black dark:text-gray-300 mt-2">
          A passionate developer with an eye for detail, ready to create amazing digital experiences.
        </p>
        <Button
          size="lg"
          className="px-6 py-3 text-lg font-medium font-dm_sans"
          onClick={() => console.log('Start Growing clicked!')}
        >
          Download Resume
        </Button>
      </div>

      {/* Right Section */}
      <div className="home1-left w-full md:w-1/2 flex items-center justify-enter md:justify-end px-8">
        <img
          src={home1image}
          alt="Anshul Mokhale"
          className="max-w-xs md:max-w-lg rounded-xl transform transition duration-500 animate-fade-in-right"
        />
      </div>
    </div>

  </div>
}

export default Home;