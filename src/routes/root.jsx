import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/index';

function App() {
  return (
    <div className="min-h-screen gap-4 bg-base-100">
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
}

export default App;
