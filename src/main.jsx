import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Success from './Components/Success/Success.jsx';
import Home from './Components/Pages/Home.jsx';
import MainRoute from './Components/MainRout/MainRoute.jsx';
import CategoryProduct from './Components/Category/CategoryProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoute,
    children: [
      { index: true, Component: Home },
      { path: "/success", Component: Success },
      { path: "/Category/:id", Component: CategoryProduct },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
