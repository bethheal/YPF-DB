import { RotatingSquare } from 'react-loader-spinner'

const WelcomeLoader = () => {
  return (

    <RotatingSquare
      visible={true}
      height="100"
      width="100"
      color="#FFD12D"
      ariaLabel="rotating-square-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />)  
}

export default WelcomeLoader