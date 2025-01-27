import MyImage from '@/assets/image.png'
import { motion } from 'framer-motion'
import { Button } from './components/ui/button'

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-bg px-6 md:px-12 lg:px-20 py-10 md:py-16 min-h-[80vh] overflow-hidden dark:bg-bg">
      {/* Left Section */}
      <div className="text-center md:text-left space-y-4 md:space-y-6 max-w-lg">
        <motion.h1
          className="text-lg md:text-xl text-text font-dm_sans"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, my name is Rakesh Sangode.
        </motion.h1>
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-main"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I DEVELOP FOR GROWTH .
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-text font-dm_sans"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experienced Backend Developer specializing in creating scalable,
          robust systems. Dedicated to optimizing performance and reliability.
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <Button
            size="lg"
            className="px-6 py-3 text-lg font-medium font-dm_sans"
            onClick={() => console.log('Start Growing clicked!')}
          >
            Download Resume
          </Button>
        </motion.div>
      </div>

      {/* Right Section */}
      <motion.div
        className="relative mt-8 md:mt-0 md:ml-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-80 h-80 rounded-lg overflow-hidden border-4 border-gray-200 shadow-lg">
          <img
            src={MyImage}
            alt="Rakesh"
            className="object-cover w-full h-full bg-red-700"
          />
          <div className="absolute top-4 right-4 bg-white px-4 py-1 rounded-full shadow-md">
            <span className="text-gray-800 font-medium text-sm">Rakesh</span>
          </div>
          <div className="absolute bottom-4 left-4 bg-green-500 px-4 py-1 rounded-full shadow-md">
            <span className="text-white font-medium text-sm">
              Software Developer
            </span>
          </div>
        </div>
        {/* Floating Icons */}
        <motion.div
          className="absolute top-0 left-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center shadow-lg"
          initial={{ x: -50, y: -50, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          📊
        </motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center shadow-lg"
          initial={{ x: 50, y: 50, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          👁️
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
