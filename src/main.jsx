import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import AllTourists from './Component/AllTourists/AllTourists.jsx';
import AddTourists from './Component/AddTourists/AddTourists.jsx';
import MyList from './Component/MyList/MyList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/alltourists',
        element: <AllTourists></AllTourists>
      },
      {
        path: '/addtourists',
        element: <AddTourists></AddTourists>
      },
      {
        path: '/mylist',
        element: <MyList></MyList>
      }
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
