import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { MenuIcon } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import NavLink for routing
import { k } from './constants'; // Importing nav links from constants file
import { ExitToAppRounded } from '@mui/icons-material';
import { logo } from '../../assets';

 function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const navigate= useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Split NAVLINKS into two sections
  const firstSectionLinks = k.NAVLINKS.filter(link => ['home', 'addMember', 'ViewMemeber', 'dormant-members'].includes(link.text));
  const secondSectionLinks = k.NAVLINKS.filter(link => ['profile', 'settings', 'Help', 'Log Out'].includes(link.text));

  const DrawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className='flex flex-col uppercase gap-16 m-3 '>
        {/* First Section */}
        {firstSectionLinks.map(({text, pathLink }, index) => (
          <NavLink
            to={pathLink}
            key={index}
            className={({ isActive }) =>
              `flex gap-x-4 items-center hover:bg-blue-900 bg-transparent hover:text-white hover:rounded-md p-2 ${
                isActive ? " text-amber-500" : ""
              }`
            }
            end
          >
            
            {/* <span>{icon}</span> */}
            <span>{text}</span>
          </NavLink>
        ))}
        <Divider />

        {/* Second Section */}
        {secondSectionLinks.map(({  text, pathLink }, index) => (
          <NavLink
            to={pathLink}
            key={index}
            className={({ isActive }) =>
              `flex gap-x-4 items-center hover:bg-blue-900 bg-transparent hover:text-white hover:rounded-md p-2 ${
                isActive ? " text-amber-500" : ""
              }`
            }
            end
          >

            {/* <span>{icon}</span> */}
            <span>{text}</span>
          </NavLink>
        ))}
      </div>
    </Box>
  );

  return (
    <div className='flex justify justify-between'>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <img src={logo} alt="logo" style={{ width: '50px', height: 'auto' }} />
      <Button onClick={()=>{navigate('/login')}}>
      <ExitToAppRounded
      
      />

      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerContent}
      </Drawer>
    </div>
  );
}
export default TemporaryDrawer;
