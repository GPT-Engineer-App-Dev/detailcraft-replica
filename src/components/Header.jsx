import { Rocket, Moon } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#2D2D2D] p-4 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <Rocket className="text-white" />
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-white hover:text-gray-300">Courses</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Practice</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Roadmap</a></li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-[#10B981] text-white px-3 py-1 rounded">Pro</button>
        <Moon className="text-white" />
        <button className="bg-[#3B82F6] text-white px-3 py-1 rounded">Sign in</button>
      </div>
    </header>
  );
};

export default Header;
