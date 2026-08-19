import React from 'react';
import { Moon, Sun } from 'lucide-react';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Logic to toggle theme will be added later
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Naman Sanil
            </a>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </nav>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
