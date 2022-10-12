import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/Routers';

// https://github.com/programming-hero-web-course2/b6-quiz-crackerz-omar-web-dev

const App = () => {
  
  return (
    <div className='pb-[500px] bg-slate-200'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;