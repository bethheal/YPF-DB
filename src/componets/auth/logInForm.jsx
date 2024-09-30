import React, { useState } from "react";
import { googleIcon, logo } from "../../assets";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import AnimatePage from "./animatePage";

const LogInForm = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 justify-center items-center ">
      <img src={logo} alt="Logo" className="w-32 h-36 mt-4" />
      <h3 className="text-3xl font-bold p-5">YPG DATABASE</h3>
      <div>
        <Card className="w-64 h-[270pt] border-[#00006A] drop-shadow-2xl">
          <form>
            <div className="mb-3">
              <input
                type="email"
                placeholder="name@gmail.com"
                required 
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="password"
                required
              />
            </div>

            <p className="forgot-password text-right text-xs ">
              Forgot <a href="#">password?</a>
            </p>
            <div className="flex flex-col mt-4">
              <button
                type="submit"
                className="box-border border-0 rounded-custom text-secondary p-3 px-20  bg-btnColor flex transition-colors duration-200 items-center gap-7 font-bold hover:bg-btnHover "
                onClick={()=>navigate("/dashboard")}
              >
                Login
              </button>
          

              <button
                type="submit"
                id="signup"
                className="mt-2"
                onClick={() => navigate("/signup")}
              >
                <AnimatePage/>
                <span className="text-btnColor text-sm">SIGN UP</span>
              </button>
              <div className="mt-5">
                <span className="font-thin text-xs">
                  ______________or login with______________
                </span>

                <button type="submit" className="mt-6 px-14">
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

export default LogInForm;
