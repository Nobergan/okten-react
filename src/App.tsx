import './App.css';
import { Outlet } from 'react-router';
import { Menu } from './components/Menu.tsx';

function App() {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
