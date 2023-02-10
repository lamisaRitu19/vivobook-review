import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Main from './layout/Main';
import { reviewsDataLoader } from './loaders/ReviewsDataLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: reviewsDataLoader,
          element: <Home></Home>
        },
        {
          path: '/reviews',
          loader: reviewsDataLoader,
          element: <Reviews></Reviews>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
