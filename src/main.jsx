import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import {
  RouterProvider,
} from "react-router-dom";

import { router } from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider';
import { Toaster } from 'sonner';
import {
  QueryClient,
  QueryClientProvider
  
} from '@tanstack/react-query'
const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='lg:container lg:mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster position='top-center'></Toaster>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
); 
