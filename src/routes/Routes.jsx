import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import About from "../pages/About";
import ListedBook from "../pages/ListedBook";
import PagesToRead from "../pages/PagesToRead";
import Contact from "../pages/Contact";
import SingleBook from "../components/SingleBook";
import ErrorPage from "../components/ErrorPage";
import Wishlist from "../components/Wishlist";
import Readlist from "../pages/Readlist";


export const router = createBrowserRouter([
    {
      path: '/',
      element : <MainLayouts/>,
      children: [
        {
         path : '/',
         element :<Home></Home>,
         errorElement:<ErrorPage></ErrorPage>
         
  
        },
        {
          path: '/about',
           element: <About/>
        },
        {
          path: '/listed-book',
           element: <ListedBook/>,
           loader : () => fetch('../books.json'),
           children: [
            {
              index:true,
              path: 'read',
              element: <Readlist/>,
              loader : () => fetch('../books.json'),

              
            },
            {
              path: 'wishlist',
              element: <Wishlist/>,
              loader : () => fetch('../books.json'),
            }
          ]
        },
        {
          path: '/page-to-read',
           element: <PagesToRead/>,
           loader : () => fetch('../books.json'),
        },
        {
          path: '/contact',
           element: <Contact/>
        },
        
        {
          path : '/book/:id',
          element: <SingleBook/>,
          loader : () => fetch('../books.json')
          
        },
        
  
      ]
    },
    
  ])
