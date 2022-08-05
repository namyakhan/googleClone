import React from "react";

const HeaderOption = ({ Icon, text, selected }) => {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-600 pb-3 cursor-pointer ${
        selected && "text-blue-600 border-blue-500"
      } `}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{text}</p>
    </div>
  );
};

export default HeaderOption;
