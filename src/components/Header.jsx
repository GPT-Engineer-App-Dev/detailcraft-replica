import { useState } from 'react';
import { Rocket, Moon, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#2D2D2D] p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Rocket className="text-white" />
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-white hover:text-gray-300">Courses</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Practice</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Roadmap</a></li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-[#10B981] text-white px-3 py-1 rounded">Pro</button>
          <Moon className="text-white" />
          <button className="bg-[#3B82F6] text-white px-3 py-1 rounded">Sign in</button>
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="mt-4 md:hidden">
          <ul className="flex flex-col space-y-2">
            <li><a href="#" className="text-white hover:text-gray-300">Courses</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Practice</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Roadmap</a></li>
            <li><button className="bg-[#10B981] text-white px-3 py-1 rounded w-full text-left">Pro</button></li>
            <li><button className="bg-[#3B82F6] text-white px-3 py-1 rounded w-full text-left">Sign in</button></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
