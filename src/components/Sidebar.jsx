import { ChevronLeft, Zap } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#252525] p-4 h-full md:h-auto">
      <div className="flex items-center mb-6">
        <ChevronLeft className="text-white mr-2" />
        <span className="text-white">Menu</span>
      </div>
      <button className="w-full bg-white text-black py-2 rounded mb-4">Practice Problems</button>
      <div className="flex items-center text-white mb-4">
        <Zap className="mr-2" />
        <span>Quizzes</span>
      </div>
      <div className="text-white">
        <h3 className="mb-2">Stats</h3>
        <div className="mb-2">
          <span className="text-green-500">Easy</span>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '0%' }}></div>
          </div>
        </div>
        <div className="mb-2">
          <span className="text-yellow-500">Medium</span>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '0%' }}></div>
          </div>
        </div>
        <div>
          <span className="text-red-500">Hard</span>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '0%' }}></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
