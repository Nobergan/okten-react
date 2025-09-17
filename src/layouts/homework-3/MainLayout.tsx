import { Menu } from '../../components/homework-3/Menu.tsx';
import { Outlet } from 'react-router';

export const MainLayout = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};
