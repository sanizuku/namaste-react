import React from 'react';
import ReactDOM from "react-dom/client";
import "/index.css"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter ,Outlet,RouterProvider} from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';


 const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>

        </div>
    )
 }

 const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/About",
                element:<About/>
              },
              {
                  path:"/Contact",
                  element:<Contact/>
              }
        ]
    },
   
   
 ])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);  