import { NavLink } from 'react-router-dom';
import { useTheme } from './contextApi/ThemeContext';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { isDarkMode , toggleDarkMode } = useTheme()

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
  
  return (
<nav className=" dark:bg-gray-800 shadow-md sticky top-0 z-50  mb-5 mx-10 rounded-full">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              <NavLink to='/'>Ankit.dev🕵️‍♂️</NavLink>
            </h1>
          </div>

          <div className="hidden md:flex space-x-6 items-center text-1xl font-bold text-gray-800 dark:text-white">
          <NavLink to='/'>Home</NavLink>
           <NavLink to='/chat-box'>Chat-Box</NavLink>
           <NavLink to='/social-media'>Social Media</NavLink>
           <NavLink to='/projects'>Projects</NavLink>
           <NavLink to='/about-me'>About me</NavLink>
           <NavLink to='/personal'>🔐</NavLink>



            {/* Dark Mode Switch */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white focus:outline-none text-2xl font-bold"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
       <div className="md:hidden">
       <div className="px-2 pt-2 pb-3 space-y-1">
         <button
           onClick={toggleDarkMode}
           className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
         >
           {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
         </button>
         <NavLink to="/" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
           Home
         </NavLink>
         <NavLink to="/chat-box" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
           Chat-Box
         </NavLink>
         <NavLink to="/social-media" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
           Social Media
         </NavLink>
         <NavLink to="/projects" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
           Projects
         </NavLink>
         <NavLink to="/about-me" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
           About Me
         </NavLink>
         <NavLink to="/about-me" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
         🔐
         </NavLink>
       </div>
     </div>
     
      )}
    </nav>
   
  );
};

export default Navbar;
