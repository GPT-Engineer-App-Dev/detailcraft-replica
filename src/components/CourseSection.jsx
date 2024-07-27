const CourseCard = ({ title, color }) => (
  <div className={`bg-${color}-600 p-4 rounded-lg`}>
    <h3 className="text-xl font-bold">{title}</h3>
  </div>
);

const CourseSection = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <CourseCard title="Algorithms & Data Structures for Beginners" color="purple" />
      <CourseCard title="Advanced Algorithms" color="red" />
      <CourseCard title="System Design for Beginners" color="blue" />
    </div>
  );
};

export default CourseSection;
