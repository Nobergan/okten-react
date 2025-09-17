import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../layouts/homework-3/MainLayout.tsx';
import { JsonPhUsersPage } from '../pages/homework-3/JsonPhUsersPage.tsx';
import { DummyUsersPage } from '../pages/homework-3/DummyUsersPage.tsx';
import { JsonPhPostsPage } from '../pages/homework-3/JsonPhPostsPage.tsx';
import { DummyPostsPage } from '../pages/homework-3/DummyPostsPage.tsx';
import { JsonPhCommentsPage } from '../pages/homework-3/JsonPhCommentsPage.tsx';
import { DummyCommentsPage } from '../pages/homework-3/DummyCommentsPage.tsx';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'users/jsonplaceholder',
        element: <JsonPhUsersPage />
      },
      {
        path: 'users/dummyjson',
        element: <DummyUsersPage />
      },
      {
        path: 'posts/jsonplaceholder',
        element: <JsonPhPostsPage />
      },
      {
        path: 'posts/dummyjson',
        element: <DummyPostsPage />
      },
      {
        path: 'comments/jsonplaceholder',
        element: <JsonPhCommentsPage />
      },
      {
        path: 'comments/dummyjson',
        element: <DummyCommentsPage />
      }
    ]
  }
]);
