import React from 'react'
import LogInForm from './logInForm'
import SignupForm from './signupForm'
import { useNavigate } from 'react-router-dom';

const Switch = () => {
    const navigate = useNavigate();

  return (
    <div>
        <LogInForm
                onClick={(signup) => navigate('/signup')}

        />
        <SignupForm

        />
    </div>
  )
}

export default Switch