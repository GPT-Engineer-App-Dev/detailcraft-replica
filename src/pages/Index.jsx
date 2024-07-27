import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CourseSection from '../components/CourseSection';
import ProblemList from '../components/ProblemList';

const Index = () => {
  const [activeTab, setActiveTab] = useState('Core Skills');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white">
      <Header />
      <div className="flex relative">
        <button 
          className="md:hidden absolute top-0 left-0 m-4 z-20 text-white"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? 'Close' : 'Menu'}
        </button>
        <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
          <Sidebar />
        </div>
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Courses</h1>
          <CourseSection />
          <div className="mt-6">
            <div className="flex flex-wrap space-x-2 space-y-2 md:space-x-4 md:space-y-0 mb-4">
              {['Core Skills', 'Blind 75', 'NeetCode 150', 'NeetCode All'].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded ${
                    activeTab === tab ? 'bg-[#10B981] text-white' : 'text-gray-400'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="bg-[#252525] p-4 rounded">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <span>0 / 45</span>
                <span className="text-sm text-gray-400 mt-2 md:mt-0">
                  Implement common data structures, algorithms, and design patterns.
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-[#10B981] h-2.5 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>
            <ProblemList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
