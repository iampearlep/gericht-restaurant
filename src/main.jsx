import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import App from './App'
import './index.css'
import Root from './routes/Root'
import About from './routes/About'
import ErrorPage from './ErrorPage'
import SearchMeals from './routes/SearchMeals'
import SavedMeals from './routes/SavedMeals'
import Menu from './routes/Menu'
import Contact from './routes/Contact'
import Services from './routes/Services'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/search',
    element: <SearchMeals />
  },
  {
    path: '/saved',
    element: <SavedMeals />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
