import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Dashboard from './Components/Dashboard/Dashboard';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AddWidget from './AddWidget/AddWidget';
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/addWidget/:category',
        element:<AddWidget></AddWidget>
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>

     <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
