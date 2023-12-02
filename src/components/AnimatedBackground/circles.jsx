import '../../index.css'; // Import your CSS file

const CircleList = () => {
  return (
    <ul className="circles">
      {[...Array(10)].map((_, index) => (
        <li key={index}></li>
      ))}
    </ul>
  );
};

export default CircleList;
