import {
  SearchIcon,
  NewspaperIcon,
  BookmarkAltIcon,
  PhotographIcon,
  PlayIcon,
  DotsVerticalIcon,
} from "@heroicons/react/solid";
import HeaderOption from "./HeaderOption ";

const HeaderOptions = () => {
  return (
    <div className="flex w-full text-gray-600 justify-evenly text-sm lg:text-xl lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} text="All" selected />
        <HeaderOption Icon={NewspaperIcon} text="News" />
        <HeaderOption Icon={BookmarkAltIcon} text="Books" />
        <HeaderOption Icon={PhotographIcon} text="Images" />
        <HeaderOption Icon={PlayIcon} text="Videos" />
        <HeaderOption Icon={DotsVerticalIcon} text="More" />
      </div>

      <p className="link ">Tools</p>
    </div>
  );
};

export default HeaderOptions;
