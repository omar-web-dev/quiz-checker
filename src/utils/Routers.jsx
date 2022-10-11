import { createBrowserRouter } from 'react-router-dom'
import Blog from '../Componets/Blog'
import ErorrPage from '../Componets/ErorrPage'
import Home from '../Componets/Home'
import Quiz from '../Componets/Quiz'
import QuizStart from '../Componets/QuizStart'
import Statistics from '../Componets/Statistics'
import Main from '../Layout/Main'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home />,
      },
      {
        path: 'home',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home />,
      },
      {
        path: 'quiz',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Quiz />,
      },
      {
        path: 'quiz/:id',
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <QuizStart />,
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
    errorElement: <ErorrPage />
  },
])
