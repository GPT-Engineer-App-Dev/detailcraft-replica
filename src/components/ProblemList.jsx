import { Search, LayoutGrid, RefreshCw, HelpCircle } from 'lucide-react';

const problems = [
  { name: 'Design Dynamic Array (Resizable Array)', difficulty: 'Easy' },
  { name: 'Design Singly Linked List', difficulty: 'Easy' },
  { name: 'Design Double-ended Queue', difficulty: 'Easy' },
  { name: 'Design Binary Search Tree', difficulty: 'Medium' },
  { name: 'Design Hash Table', difficulty: 'Medium' },
  { name: 'Design Heap', difficulty: 'Medium' },
  { name: 'Design Graph', difficulty: 'Medium' },
  { name: 'Design Disjoint Set (Union-Find)', difficulty: 'Medium' },
  { name: 'Design Segment Tree', difficulty: 'Hard' },
];

const ProblemList = () => {
  return (
    <div className="mt-6">
      <div className="flex items-center bg-[#333333] rounded p-2 mb-4">
        <Search className="text-gray-400 mr-2" />
        <input type="text" placeholder="Search" className="bg-transparent flex-grow" />
        <select className="bg-transparent text-white">
          <option>Python</option>
        </select>
        <LayoutGrid className="text-gray-400 ml-2" />
        <RefreshCw className="text-gray-400 ml-2" />
        <HelpCircle className="text-gray-400 ml-2" />
      </div>
      <div className="flex space-x-2 mb-4">
        <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">Algorithms</span>
        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Data Structures</span>
        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Design Patterns</span>
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Machine Learning</span>
      </div>
      <h2 className="text-xl font-bold mb-4">Implement Data Structures</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="py-2">Status</th>
            <th>Problem</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-[#252525]' : ''}>
              <td className="py-2"><input type="checkbox" /></td>
              <td>{problem.name}</td>
              <td className={`text-${problem.difficulty === 'Easy' ? 'green' : problem.difficulty === 'Medium' ? 'yellow' : 'red'}-500`}>
                {problem.difficulty}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemList;
