import { Menu } from '../components/Menu.tsx';
import { Outlet } from 'react-router';

export const MainLayout = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};
