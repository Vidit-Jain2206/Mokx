import React from "react";

const Message = ({ pic, message, time, isUser, className }) => {
  return (
    <div
      className={`my-7 flex flex-row w-[95%] mx-auto space-x-2 ${
        isUser ? " justify-end" : "justify-start"
      } ${className}`}
    >
      {/* profile photo */}
      {!isUser && (
        <div className="w-[3rem] h-[2.8rem] rounded-full">
          <img src={pic} alt="" className="w-full h-full" />
        </div>
      )}
      {/* message */}
      <div
        className={`w-full flex ${isUser ? "justify-end" : "justify-start"} `}
      >
        <div
          className={`w-[80%] sm:w-[40%] lg:w-[30%]  mt-[0.5rem] bg-[#F8F8FF] flex flex-col space-y-1 text-white text-[0.75rem] sm:text-[0.8rem] leading-4 tracking-[0.0075rem] font-normal ${
            isUser ? "items-end" : "items-start"
          }`}
        >
          {message.map((element, id) => {
            return (
              <div key={id}>
                <div
                  className={`p-2 ${
                    isUser
                      ? "bg-[#FBBC04] rounded-b-xl rounded-tl-xl"
                      : "bg-[#69235B] rounded-b-xl rounded-tr-xl"
                  } `}
                >
                  {element}
                </div>
                {time && id === message.length - 1 && (
                  <p className="font-[inter] p-2 text-right text-[0.625rem] font-thin leading-[0.625rem] text-[#797C7B] not-italic">
                    {time}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Message;
