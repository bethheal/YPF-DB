import React from 'react';
import { Button } from '@mui/material';
import { ExitToAppRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import "../../App.css"
const Members = () => {
  const navigate = useNavigate();

  return (
    <div >
      <div className='flex items-center '>
        <Button onClick={() => navigate('/dashboard')}>
          <ExitToAppRounded />
        </Button>
        <span>Members</span>
      </div>
    </div>
  );
}

export default Members;
