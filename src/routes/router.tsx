import { createBrowserRouter } from 'react-router';
import App from '../App.tsx';
import { JsonPhPostsPage } from '../pages/JsonPhPostsPage.tsx';
import { JsonPhCommentsPage } from '../pages/JsonPhCommentsPage.tsx';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'posts', element: <JsonPhPostsPage /> },
      { path: 'comments', element: <JsonPhCommentsPage /> }
    ]
  }
]);
