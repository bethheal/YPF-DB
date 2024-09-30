import React from 'react'
import WelcomePage from './pages/welcomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/auth/loginPage'
import SignupPage from './pages/auth/signupPage'
import Dashboard from './pages/dashboard'
import Home from './pages/dashboard/home'
import ViewMember from './pages/dashboard/viewMember'
import Member from './pages/dashboard/member'
import ViewMembers from './pages/dashboard/viewMember'
import DormantMembers from './pages/dashboard/dormantMember'
import Profile from './pages/dashboard/profile'
import Settings from './pages/dashboard/settings'
import Help from './pages/dashboard/help'
import Layout from './componets/dashboard'
import AddMember from './pages/dashboard/addMember/addMember'
import Attendance from './pages/dashboard/attendance'

const App = () => {

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
    element: <Layout/>,
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
        path:"attendance",
        element: <Attendance/>
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
      {
        path:"help",
        element: <Help/>
      },
     
    ]
  }
 
])
return <RouterProvider router={router}/>

  };

export default App
