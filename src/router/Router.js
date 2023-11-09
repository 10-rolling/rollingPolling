import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from 'NotFound';
import List from 'pages/List';
import Main from 'pages/Main';
import Post from 'pages/Post';
import SendMessage from 'pages/SendMessage';
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
        {
          path: '/post',
          element: <Post />,
          children: [{ path: ':id/message', element: <SendMessage /> }],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
