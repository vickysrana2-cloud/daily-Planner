import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AddBlog from './AddBlog.jsx';
import UpdateShell from "./UpdateShell.jsx"
import DisplayShell from './DisplayShell.jsx';

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {index:true,
        element:<AddBlog/>
      },
      {
        path:"/updateShell/:id",
        element:<UpdateShell/>
      },
      {
        path:"/displayShell",
        element:<DisplayShell/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={appRouter}/>
  </StrictMode>,
)
