import { useNavigate } from 'react-router-dom'
import { logo } from '../assets'
import WelcomeLoader from '../componets/welcome/loader'

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/login')}>
      <div className="flex flex-col gap-20 h-screen justify-center items-center">
        <img src={logo} alt="Logo" />
        <span>
          <WelcomeLoader />
        </span>
      </div>
    </div>
  );
};

export default WelcomePage
