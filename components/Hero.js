import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <form className="flex flex-col items-center w-3/4 justify-center flex-grow ">
      <Image
        src="/google-logo.png"
        width={300}
        height={170}
        alt="google-logo"
      />
      <div className="flex w-full  hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow focus:outline-none  "
        />

        <img
          className=" h-6 cursor-pointer transition duration-150 transform hover:scale-110"
          loading="lazy"
          src="/images/microphone.png"
          alt="profile"
        />
      </div>

      <div className="flex  space-x-3 justify-center mt-8">
        <button onClick={search} className="btn">
          {"Google Search"}
        </button>
        <button onClick={search} className="btn">
          {"I'm Feeling Lucky"}
        </button>
      </div>
    </form>
  );
};

export default Hero;
