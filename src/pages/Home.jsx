import React from "react";
import logo from "../assets/MokxLogo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <div className="h-[75%] w-full flex justify-center items-center">
        <img src={logo} alt="" className="w-[10.75rem] h-[10.75rem]" />
      </div>

      <Link
        to={"/vedas"}
        className="text-[#69235B] text-center text-[1.25rem] not-italic font-semibold leading-normal hover:underline"
      >
        Back to Vedas 🕉️
      </Link>
    </div>
  );
};

export default Home;
