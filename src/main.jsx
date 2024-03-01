import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from './components/Home.jsx';
import Content from './components/Content.jsx';
import CreateUser from './components/CreateUser.jsx';
import Profile from './components/Profile.jsx';
import Search from './components/Search.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateUser />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/home/",
    element: <Home />,
  },
  {
    path: "/app/",
    element: <App />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
