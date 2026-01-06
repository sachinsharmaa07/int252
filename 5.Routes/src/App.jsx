import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Nav/>
        <Home/>
      </>
    },
    {
      path: "/profile",
      element: <>
        <Nav/>
        <Profile/>
      </>
    },
    {
      path: "/about",
      element: <>
        <Nav/>
        <About/>
      </>
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App