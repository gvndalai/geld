import React from "react";

export const Button = (button) => {
  return (
    <div
      className={`w-full rounded-full text-[20px] text-white h-[48px] bg-blue-600 flex items-center justify-center cursor-pointer py-[6px]`}
      onClick={button.onClick}
    >
      {button.text}{" "}
    </div>
  );
};
