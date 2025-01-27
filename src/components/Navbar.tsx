import { useTheme } from '@/components/theme-provider';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false); // Track closing state
  const { setTheme, theme } = useTheme();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle closing on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setClosing(false);
    }, 300); // Match animation duration
  };

  const handleToggle = () => {
    if (isOpen) {
      handleClose();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 z-[1000] flex h-20 w-full items-center justify-between border-b-4 border-black bg-white dark:bg-bagcolor px-4 md:px-22">
        {/* Logo */}
        <Link
          to="/"
          className="text-shadow-neo border-2 border-black px-2 font-semibold rounded-md bg-thememain scroll-m-20 text-4xl text-black"
        >
          A
        </Link>

        {/* Desktop Links */}
        <div className="hidden outfit-font md:flex gap-6 items-center justify-center">
          {['Home', 'About', 'Experience', 'Projects'].map((item, index) => (
            <Link
              key={index}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="relative font-normal text-gray-800 text-xl dark:text-white group px-2"
            >
              {item}
              {/* Animated Bottom Border */}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 flex-row-reverse">
          {/* Toggle Button */}
          <Button
            variant="neutral"
            size="icon"
            className="md:hidden h-12 w-12 touch-action-manipulation"
            onClick={(e) => {
              e.preventDefault();
              handleToggle();
            }}
          >
            <IoMenu className="h-16 w-16" />
          </Button>
          <Button
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="h-12 w-12"
            variant="neutral"
          >
            {theme === 'dark' ? (
              <Moon style={{ height: 20, width: 20 }} className="h-[1.2rem] w-[1.2rem] transition-all" />
            ) : (
              <Sun style={{ height: 20, width: 20 }} className="h-[1.2rem] w-[1.2rem] transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

        </div>
      </nav>

      {/* Sidebar */}
      {isOpen && (
        <div
          ref={sidebarRef}
          className={`fixed top-[80px] left-0 w-full outfit-font p-4 z-[900]   ${closing ? 'animate-slide-up' : 'animate-slide-down'
            }`}
        >
          <div className="flex flex-col gap-2 px-6 py-4 border-black  bg-white dark:bg-bagcolor rounded-base shadow-shadow border-2 border-border">
            {['Home', 'About', 'Experience', 'Projects'].map((item, index) => (
              <Link
                key={index}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="p-2 text-text text-xl transition-transform duration-300 hover:translate-x-2 hover:opacity-80"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
