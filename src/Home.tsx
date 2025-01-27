import React from "react";
import home1image from "./assets/home1image.svg"

const Home: React.FC = () => {
  return <div>
    <div className="Home1 outfit-font flex gap-6 flex-col md:flex-row items-center justify-center min-h-screen bg-white dark:bg-bagcolor">
      {/* Left Section */}
      <div className="home1-right w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-8 space-y-4">
        <p className="text-xl text-black dark:text-white">Hi, I am</p>
        <h1 className="text-5xl md:text-8xl font-bold text-thememain">
          Anshul Mokhale
        </h1>
        <p className="text-lg text-center md:text-start text-black dark:text-gray-300 mt-2">
          A passionate developer with an eye for detail, ready to create amazing digital experiences.
        </p>
      </div>

      {/* Right Section */}
      <div className="home1-left w-full md:w-1/2 flex items-center justify-center px-8">
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