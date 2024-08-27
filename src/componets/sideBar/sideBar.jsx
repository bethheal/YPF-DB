import { AccountCircleRounded, DashboardCustomizeRounded, Groups2Rounded, LogoutRounded, PersonAddAlt1Rounded, PersonSearchRounded, SettingsRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import {MenuIcon } from 'lucide-react'
import React from 'react'
import {k} from './constants'

const SideBar = () => {
  return (
    <div>
        <div>
        <IconButton >
            <MenuIcon/>
        </IconButton>
        </div>
       
        <div className='flex flex-col gap-16 m-3'>
            {/* <DashboardCustomizeRounded/>
            <PersonAddAlt1Rounded/>
            <Groups2Rounded/>
            <PersonSearchRounded/>
            <SettingsRounded/>
            <AccountCircleRounded/>
            <LogoutRounded/> */}
             {k.NAVLINKS.map((link, index) => (
          <div key={index} className='flex items-center gap-2'>
            {link.icon}
            <span>{link.text}</span>
          </div>
        ))}
        </div>
    </div>
  )
}

export default SideBar