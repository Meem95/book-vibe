import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import About from "../pages/About";
import ListedBook from "../pages/ListedBook";
import PagesToRead from "../pages/PagesToRead";
import Contact from "../pages/Contact";


export const router = createBrowserRouter([
    {
      path: '/',
      element : <MainLayouts/>,
      children: [
        {
         path : '/',
         element :<Home></Home>
  
        },
        {
          path: '/about',
           element: <About/>
        },
        {
          path: '/listed-book',
           element: <ListedBook/>
        },
        {
          path: '/page-to-read',
           element: <PagesToRead/>
        },
        {
          path: '/contact',
           element: <Contact/>
        },
        // {
        //   path : '/blog/:id',
        //   element: <SingleBlog/>,
        //   loader : ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        //   children: [
        //     {
        //         index: true,
        //         element : <Content/>,
        //         loader : ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        //     },{
        //         path: 'author',
        //         element : <Author/>,
        //         loader : ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        //     }
        //   ]
  
        // },
        // {
        //   path: '/bookmarks',
        //   element: <Bookmarks></Bookmarks>
      
        // }
  
      ]
    },
    
  ])
