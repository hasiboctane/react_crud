import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom';
import ListUser from './components/users/ListUser.jsx';
import CreateUser from './components/users/CreateUser.jsx';
import EditUser from './components/users/EditUser.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "users",
//         element: <ListUser />,
//       },
//       {
//         path: "users/create",
//         element: <CreateUser />,
//       }
//     ]
//   }

// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='users' element={<ListUser />} />
      <Route path='users/create' element={<CreateUser />} />
      <Route path='users/edit/:id' element={<EditUser />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
