import NotFound from 'NotFound';
import List from 'pages/List';
import Main from 'pages/Main';
import Post from 'pages/Post';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from 'router/Root';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { path: '/', element: <Main /> },
        { path: '/list', element: <List /> },
        { path: '/post', element: <Post /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
