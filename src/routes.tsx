import type { RouteRecord } from 'vite-react-ssg';
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <App />,
    entry: 'src/App.tsx',
    children: [
      {
        index: true,
        element: <Home />,
        entry: 'src/pages/Home.tsx',
      },
      {
        path: '*',
        element: <NotFound />,
        entry: 'src/pages/NotFound.tsx',
      },
    ],
  },
];
