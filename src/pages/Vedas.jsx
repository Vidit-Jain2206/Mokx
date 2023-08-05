import React from "react";
import coverPic from "../assets/coverPic.png";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import apple from "../assets/appleWhite.png";
import { Link } from "react-router-dom";
const Vedas = () => {
  return (
    <div className="min-h-screen max-w-[1440px] bg-[#69235B]">
      {/* Cover Pic */}
      <div className="w-full h-[40%] lg:h-[35rem] relative">
        <img src={coverPic} alt="" className="w-full h-full" />
        <div className="z-1 absolute bottom-[-0.5rem] lg:bottom-[-1rem] left-0  w-full">
          <p className="font-[inter] w-[11rem] min-[420px]:w-[14rem] sm:w-[20rem] md:w-[25rem] lg:w-[30rem] mx-auto rounded-xl text-center bg-[#CBCBFF] py-[0.5rem] min-[420px]:py-[0.6rem] sm:py-[0.75rem] md:py-[1rem] lg:py-[1.25rem] text-[1rem] sm:text-[1.25rem] lg:text-[1.5rem] leading-[0.875rem] tracking-[0.00625rem] ">
            Arya, AI Acharya
          </p>
        </div>
      </div>

      <div className="w-[90%] mx-auto flex flex-col justify-center mt-[1.5rem] lg:mt-[2rem]">
        <h1 className="font-[kumbh] text-[2.1rem] font-bold not-italic text-white leading-12">
          Discover the timeless wisdom of{" "}
          <span className="text-[#FFC746]">the Vedas.</span>
        </h1>
        <p className="font-[inter] mt-[0.5rem] text-white text-[1rem] font-light not-italic leading-[1.625rem]">
          Sign up and{" "}
          <span className="text-[#FFC746]">
            journey through ancient knowledge with Arya 🌟
          </span>
        </p>

        {/* Authentication - google,facebook,apple */}
        <div className="mt-4 flex justify-center space-x-[1.5rem]">
          <div className="rounded-full border border-gray-400 h-[3rem] w-[3rem] p-[1px]">
            <img src={facebook} alt="" className="h-full w-full rounded-full" />
          </div>
          <div className="rounded-full border border-gray-400 h-[3rem] w-[3rem] p-[1px]">
            <img src={google} alt="" className="h-full w-full rounded-full" />
          </div>
          <div className="rounded-full border border-gray-400 h-[3rem] w-[3rem] p-[1px]">
            <img src={apple} alt="" className="h-full w-full rounded-full" />
          </div>
        </div>
        <div className="my-4 flex items-center before:border-t-[1px] before:border-[#CDD1D0] before:z-0 before:w-[50%] after:border-t-[1px] after:border-[#CDD1D0] after:w-[50%]">
          <p className="font-[inter] text-center mx-4 tracking-[0.00625rem] leading-5 font-thin text-[1.125rem] text-[#fff]">
            OR
          </p>
        </div>

        {/* buttons - signin and signup */}
        <div className="flex flex-col mt-2">
          <Link to="/signup">
            <button
              type="submit"
              className="font-[kumbh] w-full rounded-[0.625rem] bg-[#FFC746] text-[1.25rem] text-[#69235B] not-italic font-medium border border-[#FFC746] px-10 py-3"
            >
              Sign Up with Email
            </button>
          </Link>
          <Link
            to="/signin"
            className="font-[kumbh] my-5 text-[1.25rem] text-center text-white not-italic font-normal leading-4 tracking-[0.00625rem]"
          >
            Existing account? <span className="text-[#FFC746]">Log in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vedas;
