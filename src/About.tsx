import Image from '@/assets/my_image.jpg'
import { motion } from 'framer-motion'
import { Badge } from './components/ui/badge'

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const services = [
    'Web Development',
    'Graphic Design',
    'Landing Page',
    'On-Page SEO',
    'Web Hosting',
  ]

  const interests = [
    'Painting & Drawing',
    'Reading & Writing',
    'Music & Cinema',
    'Travel & Picnik',
    'Rain & Snow',
  ]

  return (
    <section className="flex flex-col lg:flex-row min-h-screen bg-bg">
      {/* Fixed Image Section */}
      <div className="w-full lg:w-1/2 h-[40vh] lg:h-screen relative">
        <div className="lg:fixed lg:w-1/2 h-full">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative w-full h-full"
          >
            <motion.img
              src={Image}
              alt="Profile"
              className="w-full h-full object-cover filter grayscale border-r-2 border-b-4 border-slate-900"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0 bg-black/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scrollable Content Section */}
      <div className="w-full lg:w-1/2 min-h-screen overflow-y-auto bg-bg p-6 md:p-8 lg:p-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* About Me Section */}
          <motion.div
            {...fadeInUp}
            className="mb-8 lg:mb-12"
          >
            <Badge className="text-xl md:text-2xl font-bold mb-4 lg:mb-6 text-text">
              ABOUT ME
            </Badge>
            <p className="text-lg md:text-base text-gray-600 mb-4">
              Hello there! My name is{' '}
              <span className="font-semibold">Rakesh Sangode</span>. I am a
              software developer passionate and dedicated to my work.
            </p>
            <p className="text-sm md:text-base text-gray-600">
              With over 1.5 years of experience, I specialize in creating
              efficient APIs, optimizing databases, and developing
              high-performance web and mobile applications. I bring the skills
              and knowledge needed to make your project a success.
            </p>
          </motion.div>

          {/* Contact Info */}
          {/* <Card>
            <p className="text-3xl md:text-base text-gray-600 mb-4">
              Hello there! My name is{' '}
              <span className="font-semibold">Rakesh Sangode</span>. I am a
              software developer passionate and dedicated to my work.
            </p>
            <p className="text-sm md:text-base text-gray-600">
              With over 1.5 years of experience, I specialize in creating
              efficient APIs, optimizing databases, and developing
              high-performance web and mobile applications. I bring the skills
              and knowledge needed to make your project a success.
            </p>
          </Card> */}
        </motion.div>
      </div>
    </section>
  )
}

export default About
