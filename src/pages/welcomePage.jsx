import { logo } from '../assets'
import { LoadingAnimation } from '../componets/welcome/loader'

const WelcomePage = () => {
  return (
    <div>
      <div className="flex h-screen bg-[#00016A] justify-center items-center align-items-center ">
      <img src={logo} alt="Logo"  
     />
     <span>
      <LoadingAnimation/>
     </span>
      </div>
      
    </div>
  )
}

export default WelcomePage
