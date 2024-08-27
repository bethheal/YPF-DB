import React from 'react'
import WelcomePage from './pages/welcomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/auth/loginPage'
import SignupPage from './pages/auth/signupPage'
import Dashboard from './pages/dashboard'
import AddMember from './pages/dashboard/addMember'
import Home from './pages/dashboard/home'
import ViewMember from './pages/dashboard/viewMember'
import Member from './pages/dashboard/member'
import ViewMembers from './pages/dashboard/viewMember'
import DormantMembers from './pages/dashboard/dormantMember'
import Profile from './pages/dashboard/profile'
import Settings from './pages/dashboard/settings'

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
  {
    path:"dashboard",
    element:<Dashboard/>,
    children: [

      {
        index:true,
        element:<Home/>
      },
     
      {
        path:"add-member",
        element: <AddMember/>
      },
      {
        path:"members",
        element: <ViewMembers/>
      },
      {
        path:"dormant-members",
        element: <DormantMembers/>
      },
      {
        path:"profile",
        element: <Profile/>
      },
      {
        path:"settings",
        element: <Settings/>
      },
     
    ]
  }
 
])

function App() {
  return (
   <>
   <RouterProvider router ={router}/>
   </>
  )
}

export default App
