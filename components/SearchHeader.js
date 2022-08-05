import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import {
  XIcon,
  SearchIcon,
  ViewGridIcon,
  CogIcon,
} from "@heroicons/react/solid";
import Avatar from "./Avatar";
import SearchOptions from "./SearchOptions";

const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          alt="google-logo"
          src="/images/google-logo.png"
          width={150}
          height={80}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg sm:max-w-3xl items-center ">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
          />
          <XIcon
            className="h-7 mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <img
            className="  h-6 cursor-pointer mr-4 hidden sm:inline-flex border-l-2 pl-3"
            loading="lazy"
            src="/images/microphone.png"
            alt="profile"
          />
          <SearchIcon className="h-7 mr-3 text-blue-500" />
          <button hidden type="submit" onClick={search}></button>
        </form>
        <div className="flex justify-end items-center ml-auto space-x-5">
          <CogIcon className=" hidden sm:flex h-12 text-gray-500 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <ViewGridIcon className="  hidden sm:flex  h-12 text-gray-500 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar
            className="ml-auto h-6 sm:h-10 "
            url={
              "https://avatars.githubusercontent.com/u/82830866?s=400&u=7f3f6b254054bacdbe1ee97e7b47641fb2defe18&v=4"
            }
          />
        </div>
      </div>
      <SearchOptions />
    </header>
  );
};

export default SearchHeader;
