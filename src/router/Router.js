import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from 'NotFound';
import List from 'pages/List';
import Main from 'pages/Main';
import Post from 'pages/Post';
import SendMessage from 'pages/SendMessage';
import Root from 'router/Root';
import PostList from 'pages/PostList';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Main /> },
        { path: '/list', element: <List /> },
        {
          path: '/post',
          element: <Root />,
          children: [
            { index: true, element: <Post /> },
            { path: ':id/', element: <PostList /> },
            { path: ':id/message', element: <SendMessage /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
