import { createBrowserRouter } from 'react-router-dom'
import Blog from '../Componets/Blog'
import ErorrPage from '../Componets/ErorrPage'
import Home from '../Componets/Home'
import Statistics from '../Componets/Statistics'
import Main from '../Layout/Main'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErorrPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'statistics',
        element: <Statistics />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
    ],
  },
])
