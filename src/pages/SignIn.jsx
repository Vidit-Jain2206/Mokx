import React from "react";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    navigate("/chat");
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="relative h-screen w-[90%] sm:w-[80%] flex flex-col justify-center items-center">
        {/* Back Arrow */}
        <div className="absolute top-[3%] left-0 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            className="w-[1rem] h-[1rem]"
          >
            <path
              d="M5 1L1 5M1 5L5 9M1 5L13 5"
              stroke="#000E08"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {/*heading  */}
        <div className=" mt-10 flex flex-col w-full">
          {/* heading */}
          <div className="">
            <h1 className="font-[kumbh] text-[1.5rem] lg:text-[1.75rem] not-italic text-[#69235B] font-bold leading-5 text-center">
              <span className="relative before:absolute before:z-[-100] before:top-[60%] before:left-0 before:bg-[#FFC746] before:w-[106%] before:h-[35%]">
                Log in
              </span>{" "}
              to Mokx
            </h1>
          </div>
          {/* paragraph */}
          <div className="mt-4 flex justify-center">
            <p className="font-[inter] w-[90%] md:w-[70%] lg:w-[65%] text-[#69235B] text-center text-[0.875rem] md:text-[1rem] lg:text-[1.125rem] font-light leading-5 tracking-[0.00625rem]">
              Welcome back! Sign in using your social account or email to
              continue us
            </p>
          </div>
          {/* Authentication - FaceBook,Google,Apple */}
          <div className="mt-10  flex justify-center space-x-[1.5rem]">
            <div className="rounded-full border border-black h-[2.875rem] w-[2.875rem]">
              <img src={facebook} alt="" className="h-full w-full " />
            </div>
            <div className="rounded-full border border-black h-[2.875rem] w-[2.875rem]">
              <img src={google} alt="" className="h-full w-full " />
            </div>
            <div className="rounded-full border border-black h-[2.875rem] w-[2.875rem]">
              <img src={apple} alt="" className="h-full w-full" />
            </div>
          </div>
        </div>
        <div className="w-[90%] md:w-[70%] lg:w-[65%] my-10 flex items-center before:border-t-2 before:border-[#CDD1D0] before:z-0 before:w-[45%] after:border-t-2 after:border-[#CDD1D0] after:w-[45%]">
          <p className="font-[inter] text-center mx-4 tracking-[0.00625rem] leading-5 font-thin text-[1.125rem] text-[#69235B]">
            OR
          </p>
        </div>

        {/* foam */}
        <div className="w-[90%] md:w-[70%] lg:w-[65%] lg:mt-[1.5rem]">
          <form action="" className="flex flex-col" onSubmit={onSubmit}>
            <div className="flex flex-col w-full flex-start">
              <label
                htmlFor="email"
                className="font-[inter] text-[#69235B] font-medium text-left text-[1rem] lg:text-[1.125rem] not-italic leading-4 tracking-wider"
              >
                Your Email
              </label>
              <input
                required
                type="email"
                className="font-[poppins] mt-[0.875rem] font-normal border-b-2 border-[#CDD1D0] outline-none pb-[0.5rem] text-lg lg:text-xl"
              />
            </div>
            <div className="flex flex-col w-full flex-start mt-[3.5rem]">
              <label
                htmlFor="password"
                className="font-[inter] text-[#69235B] font-medium text-left text-[1rem] lg:text-[1.125rem] not-italic leading-4 tracking-wider"
              >
                Your Password
              </label>
              <input
                required={true}
                type="password"
                className="font-[poppins] font-normal mt-[0.875rem] border-b-2 border-[#CDD1D0] outline-none pb-[0.5rem] text-lg lg:text-xl"
              />
            </div>
            <div className="flex flex-col mt-[7rem] lg:mt-[7rem]">
              <button
                type="submit"
                className="font-[kumbh] w-full rounded-[0.625rem] bg-[#FFC746] text-[1.25rem] text-[#69235B] not-italic font-medium border border-[#FFC746] px-10 py-2"
              >
                Login
              </button>
              <p className="font-[kumbh] mt-4 text-[1.25rem] text-center text-[#FFC746] not-italic font-normal leading-4 tracking-[0.00625rem]">
                Forgot Password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
