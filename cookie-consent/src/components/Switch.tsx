import React, { useState } from "react";

interface SwitchProps {
  isOn: boolean;
  handleToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isOn, handleToggle }) => {
  return (
    <div
      className={`w-[36px] h-[20px] flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
      onClick={handleToggle}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
          isOn ? "translate-x-[13px]" : ""
        }`}
      ></div>
    </div>
  );
};

export default Switch;
