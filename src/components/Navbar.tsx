import { useTheme } from '@/components/theme-provider'
import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { setTheme, theme } = useTheme()

  return (
    <div>
      {/* Navbar */}
      <nav className="sticky top-0 z-10 flex h-20 w-full items-center justify-between border-b-4 border-slate-900 bg-white px-4 md:px-22">
        {/* Logo */}
        <h1 className="text-shadow-neo scroll-m-20 font-Space_Grotesk text-4xl font-extrabold tracking-tight text-cerulean-400 lg:text-5xl">
          Rakesh
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center justify-center">
          {['Home', 'About', 'Experience', 'Projects'].map((item, index) => (
            <Link
              key={index}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="relative font-normal font-base text-gray-800 text-xl dark:text-white group px-2"
            >
              {item}
              {/* Animated Bottom Border */}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-cerulean-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <div className="flex gap-4 flex-row-reverse">
          {/* Toggle Button */}
          <Button
            variant="neutral"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoMenu />
          </Button>
          <Button
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="h-12 w-12"
            variant="neutral"
          >
            <Sun
              size={16}
              // className="h-[1.4rem] w-[1.4rem] bg-red-500 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </nav>

      {/* Sidebar */}
      {isOpen && (
        <div className="flex flex-col divide-y-4 divide-slate-900 border-2 sticky top-[80px] z-10 bg-nepal-100 border-slate-900">
          {['Home', 'About', 'Experience', 'Projects'].map((item, index) => (
            <Link
              key={index}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="py-2 text-center text-xl text-slate-900"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
