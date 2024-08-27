import React, { useState } from "react";
import { googleIcon, logo } from "../../assets";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { Eye, EyeOff } from "lucide-react";

const SignupForm = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirnPasswordVisible] = useState(false);
  const [email, setEmail] = useState();

  return (
    <div className="flex flex-col gap-4 justify-center items-center ">
      <img src={logo} alt="Logo" className="w-32 h-36 mt-4" />
      <h3 className="text-3xl font-bold p-5">YPG DATABASE</h3>
      <div>
        <Card className="w-64 h-[350pt] border-[#00006A] drop-shadow-2xl">
          <form >
            <div className="mb-3">
              <input type="email" placeholder="name@gmail.com" required />
            </div>
            <div className="mb-3">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute items-center px-40 top-[6rem] "
              >
                {passwordVisible ? <Eye /> : <EyeOff />}
              </button>
            </div>
            <div className="mb-3">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder=" Confirm Password"
                required
              />
              <button
                type="button"
                onClick={() =>
                  setConfirnPasswordVisible(!confirmPasswordVisible)
                }
                className="absolute items-center px-40 top-[9.5rem]  "
              >
                {confirmPasswordVisible ? <Eye /> : <EyeOff />}
              </button>
            </div>

            <p className=" text-center text-xs ">
              <Checkbox required />
              <a href="#">Term of service</a>
            </p>

            <div className="flex flex-col mt-4">
              <button
                type="submit"
                className="box-border rounded-full border-0 text-secondary p-3 px-20  bg-btnColor flex transition-colors duration-200 items-center gap-7 font-bold hover:bg-btnHover "
              >
                SignUp
              </button>

              <button
                type="submit"
                id="signup"
                className="mt-2"
                onClick={() => navigate("/login")}
              >
                <span className="text-btnColor text-sm">LOGIN</span>
              </button>
              <div className="mt-5">
                <span className="font-thin text-xs">
                  ______________or login with______________
                </span>
                <button type="submit" className="mt-6 px-14">
                  <p className=" text-sm"> </p>
                  <a href="">
                    <span className="flex flex-row ">
                      <img src={googleIcon} alt="" className="w-5 h-5 " />
                      <p className=" px-4 italic font-light text-xs">Google</p>
                    </span>
                  </a>
                </button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignupForm;
