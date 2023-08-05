import React from "react";
import pic from "../assets/Profilepic.png";
import Message from "../components/Message";
import group from "../assets/Group.png";
import send from "../assets/send.png";
import mic from "../assets/mic.png";
import { BsArrowLeft } from "react-icons/bs";

// import { BsArrowLeft } from "react-icons/bs";
const Chat = () => {
  return (
    <div className="h-auto max-w-screen flex flex-col mt-4">
      {/* header */}
      <header className="w-full h-[4.5rem] bg-white flex justify-center items-center">
        <div className="w-[95%] md:w-[95%] h-[90%] mx-auto flex flex-row justify-between items-center">
          {/* profile */}
          <div className="flex flex-row w-[60%]">
            {/* icon - back arrow */}

            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-[-0.2rem] md:ml-[-0.4rem] mr-[0.3rem] md:mr-[0.5rem]  sm:w-[2rem] sm:h-[2rem]"
              >
                <path
                  d="M10 8L6 12M6 12L10 16M6 12L18 12"
                  stroke="#69235B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            {/* profile,name */}
            <div className="flex flex-row space-x-3 sm:space-x-4 justify-center items-center">
              {/* photo */}
              <div className="rounded-full h-[2.75rem] w-[2.75rem] sm:w-[3rem] sm:h-[3rem] relative before:absolute before:bottom-[10%] sm:before:right-[3%] before:right-[5%] before:w-[0.5rem] before:h-[0.5rem] sm:before:w-[0.6rem] sm:before:h-[0.6rem] before:rounded-full before:bg-[#2BEF83] ">
                <img
                  src={pic}
                  alt=""
                  className=" w-full h-full rounded-full "
                />
              </div>

              {/* name */}
              <div className="flex flex-col space-y-1 sm:space-y-2 items-start">
                <h2 className=" font-[Raleway] font-medium not-italic text-[1rem] sm:text-[1.25rem] leading-[1rem] text-[#69235B]">
                  Arya
                </h2>
                <p className="font-[inter] text-[#797C7B] text-[0.75rem] sm:text-[1rem] font-thin leading-[0.75rem]">
                  Vedic AI Bot
                </p>
              </div>
            </div>
          </div>

          {/* languages */}
          <div className="mr-[1rem]">
            <h2 className="font-[Mukta] text-[#FBBC04] text-[1rem] sm:text-[1.25rem] font-extrabold not-italic leading-[1rem]">
              A<span className="font-light">/क</span>
            </h2>
          </div>
        </div>
      </header>

      {/* messages */}
      <div className="bg-[#F8F8FF] h-[auto] w-full">
        <Message
          pic={pic}
          message={[
            `🙏 Namaste!  I’m Arya, your AI Vedic help.  I'm here to provide insights from Vedas for daily life concerns. 
Whether you seek guidance on mantras, general life advice, or specific Vedic interpretations, I’m here to assist you.`,
          ]}
          isUser={false}
          className={"mt-2 mb-6"}
        />

        {/* questions */}
        <div className="flex flex-col w-full">
          <div className="w-[70%] mx-auto flex justify-center items-center space-x-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                viewBox="0 0 19 21"
                fill="none"
              >
                <path
                  d="M4.22222 21L8.44444 13.125L0 12.075L12.6667 0H14.7778L10.5556 7.875L19 8.925L6.33333 21H4.22222Z"
                  fill="#69235B"
                />
              </svg>
            </span>
            <p className="font-[kumbh] text-[#69235B] text-[1rem] font-normal not-italic leading-none tracking-[0.015rem]">
              You can ask queries like:
            </p>
          </div>

          <div className="mt-3 mb-6 w-[83%] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto flex flex-col justify-center items-center space-y-1">
            <p className="font-[inter] text-center w-full mx-auto pl-[1rem] pr-[0.25rem] py-[0.8rem] bg-[#FBBC04] rounded-[1.1875rem] text-[0.75rem] md:text-[0.865rem] font-normal leading-none tracking-[0.01125rem]">
              What is the mantra in Rigveda 10.2.3?
            </p>
            <p className="font-[inter] text-center w-full mx-auto pl-[1rem] pr-[0.25rem] py-[0.8rem] bg-[#FBBC04] rounded-[1.1875rem] text-[0.75rem] md:text-[0.865rem] font-normal leading-none tracking-[0.01125rem]">
              What are the prescribed Vedic remedies for snake bites?
            </p>
            <p className="font-[inter] text-center w-full mx-auto pl-[1rem] pr-[0.25rem] py-[0.8rem] bg-[#FBBC04] rounded-[1.1875rem] text-[0.75rem] md:text-[0.865rem] font-normal leading-none tracking-[0.01125rem]">
              Can you tell me the significance of the Gayatri Mantra?
            </p>
          </div>
          <div className="w-[96.5%] mx-auto flex justify-center items-center space-x-1">
            <img src={group} alt="" className="w-[0.85rem] h-[0.85rem]" />
            <p className="font-[ABeeZee] text-[#69235B] text-[0.9rem] font-normal not-italic leading-none tracking-[0.01219rem]">
              Limitation: May struggle with complex queries.
            </p>
          </div>
        </div>

        <Message
          pic={pic}
          message={[
            `Let your curiosity guide you; wishing you blessings and enlightenment 🕉️`,
          ]}
          isUser={false}
          time={"09:25 AM"}
          className={"mt-10"}
        />

        <p className="mt-4 text-center text-[0.75rem] font-medium leading-3 text-[#69235B]">
          Today
        </p>

        <Message
          pic={pic}
          message={[`Hello! How are you?`]}
          isUser={true}
          time={"09:25 AM"}
        />
        <Message
          pic={pic}
          message={[`Hello ! Nazrul How are you?`]}
          isUser={false}
          time={"09:25 AM"}
        />
        <Message
          pic={pic}
          message={[`You did your job well!`]}
          isUser={true}
          time={"09:25 AM"}
        />
        <Message
          pic={pic}
          message={[`Have a great working week!!`, `Hope you like it`]}
          isUser={false}
        />
        <p className="text-center text-[0.75rem] font-medium leading-3 text-[#69235B]">
          Today
        </p>

        <Message
          pic={pic}
          message={[`Hello! How are you?`]}
          isUser={true}
          time={"09:25 AM"}
        />
        <Message
          pic={pic}
          message={[`अपनेपन यथासंभव धीर-धीरे अपने समय  `]}
          isUser={false}
          time={"09:25 AM"}
        />
        <Message
          pic={pic}
          message={[`You did your job well!`]}
          isUser={true}
          time={"09:25 AM"}
        />
        <Message
          pic={pic}
          message={[
            `हमारे लेकर वर्गाकार करता। होना त्याग`,
            `हमारे लेकर वर्गाकार करता। होना त्याग`,
          ]}
          isUser={false}
          time={"09:25 AM"}
        />
        {/* input */}
        <div className="w-[95%] mx-auto relative my-6">
          <input
            style={{
              boxShadow: "5px 4px 20px 0px rgba(0, 0, 0, 0.13)",
            }}
            type="text"
            placeholder="Write your message"
            className="font-[inter] w-full rounded-[1.875rem] text-[0.875rem]  py-4 px-5 outline-none"
          />
          {/* send and mic button */}
          <div className="absolute top-0 left-0 w-[95%] md:w-[98%] h-full flex justify-end items-center space-x-1">
            <button>
              <img src={send} alt="" />
            </button>
            <button>
              <img src={mic} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
