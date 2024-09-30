import React from 'react';
import {  useLocation, useNavigate } from "react-router-dom";
import { ArrowCircleLeft } from '@mui/icons-material';
import "../../../App.css";
import AddMemeberForm from './addMemeberForm';
import { logo } from '../../../assets';

const AddMember = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  return (
    <div className={`card ${state?.expanded ? "expanded" : ""}`}>
      <div className="relative h-full overflow-auto">
        <div className="sticky justify-between top-0 left-0 w-full h-20 flex items-center p-4 bg-white text-[#04133F] z-10">
         <button  onClick={()=>{navigate('/dashboard')}}>
          <ArrowCircleLeft className="mr-2" />

          </button>
          <img src={logo} alt="logo" style={{ width: '50px', height: 'auto' }} />
          <h3 className="text-lg font-semibold">ADD MEMBER</h3>

        </div>
       <AddMemeberForm/>










       
      </div>
    </div>
  );
}

export default AddMember;
