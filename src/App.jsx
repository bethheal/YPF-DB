import React from 'react'
import WelcomePage from './pages/welcomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/auth/loginPage'
import SignupPage from './pages/auth/signupPage'

const router = createBrowserRouter([
  {
    path:"/",
    element:<WelcomePage/>
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/signup",
    element:<SignupPage/>
  },
])

function App() {
  return (
   <>
   <RouterProvider router ={router}/>
   </>
  )
}

export default App
