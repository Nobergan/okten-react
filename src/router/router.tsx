import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../layouts/MainLayout.tsx';
import { DummyUsersPage } from '../pages/DummyUsersPage.tsx';
import { DummyPostsPage } from '../pages/DummyPostsPage.tsx';
import { DummyCommentsPage } from '../pages/DummyCommentsPage.tsx';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'users/dummyjson',
        element: <DummyUsersPage />
      },
      {
        path: 'posts/dummyjson',
        element: <DummyPostsPage />
      },
      {
        path: 'comments/dummyjson',
        element: <DummyCommentsPage />
      }
    ]
  }
]);
