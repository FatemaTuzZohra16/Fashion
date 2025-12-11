import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Success from './Components/Success/Success.jsx';
import Home from './Components/Pages/Home.jsx';
import MainRoute from './Components/MainRout/MainRoute.jsx';
import CategoryProduct from './Components/Category/CategoryProduct.jsx';
import About from './Components/About/About.jsx';
import Text from './Components/About/Text.jsx';
import Approach from './Components/About/Approach.jsx';
import Search from './Components/Search/Search.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Follow from './Components/Blog/Follow.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoute,
    children: [
      { index: true, Component: Home },
      { path: "/success", Component: Success },
      { path: "/Category/:id", Component: CategoryProduct },
      { path: "/about", Component: About },
      { path: "/text", Component: Text },
      { path: "/approach", Component: Approach },
      { path: "/approach", Component: Approach },
      { path: "/search", Component: Search },
      { path: "/blog", Component: Blog },
      { path: "/follow", Component: Follow },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
