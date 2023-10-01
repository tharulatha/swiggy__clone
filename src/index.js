import React, { lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Error from './components/Error';
import Contact from './components/Contact';
import Body from './components/Body';
import RestrurantDetail from './components/RestrurantDetail';
import Simmer from './components/Simmer';
import Cart from './components/Cart';

const Istamart = lazy(() => import("./components/Istamart"));

const AboutUs = lazy(() => import("./components/AboutUs"));

const appRouter = createBrowserRouter([
 
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><AboutUs /></Suspense>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/restarurant/:id',
        element : <RestrurantDetail />
      },
      {
        path: '/instamart',
        element: <Suspense fallback={<Simmer/>}><Istamart /></Suspense>
      },
      {
        path: '/cart',
        element: <Cart/>
      }

    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={appRouter}/>
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
