import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/Routers';


const App = () => {
  
  return (
    <div className='pb-[500px] bg-slate-200'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;