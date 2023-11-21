import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/home/Home';
import Cart from './routes/cart/Cart';
import './App.css'
import HomeProducts from './components/homeProducts/HomeProducts';
import Wishes from './routes/wishes/Wishes';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/heart",
      element: <Wishes></Wishes>,
    },
    
    {
      path: "/cart",
      element: <Cart></Cart>,
    },
    
    {
      path: "/single-page/:id",
      element: <HomeProducts></HomeProducts>,
    },
  ]
);


function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
