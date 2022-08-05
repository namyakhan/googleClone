import Avatar from "../components/Avatar";
import { ViewGridIcon } from "@heroicons/react/solid";

import React from "react";

const Header = () => {
  return (
    <header className="flex w-full justify-end p-5 text-gray-800 text-sm">
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        {/* Icon */}
        <ViewGridIcon className="h-10 w-10 text-gray-500 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
        {/* Avatar */}
        <Avatar
          url={
            "https://avatars.githubusercontent.com/u/82830866?s=400&u=7f3f6b254054bacdbe1ee97e7b47641fb2defe18&v=4"
          }
        />
      </div>
    </header>
  );
};

export default Header;
