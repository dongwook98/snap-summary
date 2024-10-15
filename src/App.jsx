import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './page/Home';
import SnapList from './components/SnapList';
import SnapDetail from './components/SnapDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <SnapList />,
      },
      {
        path: 'snaps/:id',
        element: <SnapDetail />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
