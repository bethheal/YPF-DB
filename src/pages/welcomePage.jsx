import { RotatingSquare } from 'react-loader-spinner'
import { logo } from '../assets'
import WelcomeLoader from '../componets/welcome/loader'

const WelcomePage = () => {
  return (
    <div>
      <div className="flex flex-col gap-20 h-screen bg-[#00016A] justify-center items-center align-items-center ">
      <img src={logo} alt="Logo"  
     />
     <span>
      <WelcomeLoader/>
     </span>
      </div>
      
    </div>
  )
}

export default WelcomePage
