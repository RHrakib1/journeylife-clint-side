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
import Home from './Component/Home/Home.jsx';
import SignIn from './Component/SignIn/SignIn.jsx';
import Signup from './Component/Signup/Signup.jsx';
import AuthProvider from './Component/Provider/AuthProvider.jsx';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute.jsx';
import ViewAll from './Component/AllTourists/ViewAll.jsx';
import UpdateDelete from './Component/UpdateDelete/UpdateDelete.jsx';
import Update from './Component/Update/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/alltourists',
        element: <AllTourists></AllTourists>,
        loader: () => fetch('https://journelife-server-side-38ju0pt3s.vercel.app/journey')

      },
      {
        path: '/viewAll/:id',
        element: <ViewAll></ViewAll>,
        loader: ({ params }) => fetch(`https://journelife-server-side-38ju0pt3s.vercel.app/alltourists/${params.id}`),

      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://journelife-server-side-38ju0pt3s.vercel.app/update/${params.id}`)

      },
      {
        path: '/addtourists',
        element: <PrivateRoute><AddTourists></AddTourists></PrivateRoute>
      },
      {
        path: '/mylist',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: "/updatedelete/:id",
        element: <UpdateDelete></UpdateDelete>,
        loader: ({ params }) => fetch(`https://journelife-server-side-38ju0pt3s.vercel.app/alltourists/${params.id}`),
      }
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
