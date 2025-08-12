import { PiPersonSimpleCircleFill } from "react-icons/pi";
import { HamburgerMenu } from "./HamburgerMenu";
import List from "./List";
const Header = () => {
  return (
    <nav className=" m-3 max-sm:gap-20 sm:m-6 p-2 bg-white items-center  h-12 flex justify-between rounded-3xl">
      <span className="flex justify-start items-center   ">
        <PiPersonSimpleCircleFill color="rgb(249, 66, 21)" size={40} />
        <p className="whitespace-nowrap">Sajad Soqrati</p>
      </span>
      <List className="hidden sm:flex sm:flex-center sm:gap-15" />
      <button className="hidden sm:block  whitespace-nowrap hover:text-orange-500 h-8 transition-colors px-3 py-1 font-light bg-black text-white  justify-end rounded-3xl">
        <a href="#contact-me">Contact Me</a>
      </button>
      <span className="sm:hidden">
        <HamburgerMenu />
      </span>
    </nav>
  );
};

export default Header;
