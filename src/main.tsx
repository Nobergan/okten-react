import { createRoot } from 'react-dom/client';
import './index.css';
import { routes } from './router/router.tsx';
import { RouterProvider } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routes} />
);
