import { FaTelegramPlane } from "react-icons/fa";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { FaArrowTurnUp } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <header className="flex md:mx-10 max-md:flex-center mt-20 text-[min(5vw,40px)] font-normal border-b-3 border-white">
        <h1 className="text-black font-medium">Let's &nbsp; </h1>
        <h1 className="text-[#f94215] font-semibold">
          <em>Contact&nbsp;there!</em>
        </h1>
      </header>
      <main className="lg:flex-col ">
        <nav className=" max-md:flex-center  whitespace-nowrap  mx-10 mb-20 max-sm:mb-5  pt-10">
          <ul
            className="flex max-md:flex-col md:ml-10 
         gap-5 max-md:items-center md:grid grid-cols-2  items-center  "
          >
            <li className="bg-gray-200 hover:border-2 hover:border-[#f94215] w-fit h-fit  pl-2 pr-5 py-2 rounded-full">
              <a
                className="flex justify-between items-center max-md:text-sm text-xl"
                href="tel:+989117667109"
                target="_blank"
              >
                <div className="w-[40px] h-[40px] bg-[#f94215] rounded-full flex-center">
                  <BsFillTelephoneForwardFill size={25} color="white" />
                </div>
                &nbsp; +989117667109
              </a>
            </li>
            <li className="bg-gray-200 hover:border-2 hover:border-[#f94215] w-fit pl-2 h-fit pr-5 py-2 rounded-full">
              <a
                className="flex items-center max-md:text-sm text-xl"
                href="https://t.me/sajadsoqrati"
                target="_blank"
              >
                <div className="w-[40px] h-[40px] bg-[#f94215] rounded-full flex-center">
                  <FaTelegramPlane size={25} color="white" />
                </div>
                &nbsp; @SajadSoqrati
              </a>
            </li>
            <li className="bg-gray-200 hover:border-2 hover:border-[#f94215] w-fit pl-2 h-fit pr-5 py-2 rounded-full">
              <a
                className="flex items-center max-md:text-sm text-xl"
                href="https://www.linkedin.com/in/sajad-soqrati-214865328/"
              >
                <div className="w-[40px] h-[40px] bg-[#f94215] rounded-full flex-center">
                  <RiLinkedinFill size={25} color="white" />
                </div>
                &nbsp; SajadSoqrati
              </a>
            </li>
            <li className="bg-gray-200 hover:border-2 hover:border-[#f94215] w-fit pl-2 h-fit pr-5 py-2 rounded-full">
              <a
                className="flex items-center max-md:text-sm text-xl"
                href="mailto:sajadsoqrati@gmail.com"
              >
                <div className="w-[40px] h-[40px] bg-[#f94215] rounded-full flex-center">
                  <IoMdMail size={25} color="white" />
                </div>
                &nbsp; sajadsoqrati@gmail.com
              </a>
            </li>
            <li className="bg-gray-200 hover:border-2 hover:border-[#f94215] w-fit pl-2 h-fit pr-5 py-2 max-sm:mt-10 rounded-full">
              <a
                className="flex items-center max-md:text-sm max-sm:text-xs text-xl"
                href="/"
              >
                <div className="w-[30px] h-[30px] bg-[#c21424] rounded-full flex-center">
                  <FaArrowTurnUp size={20} color="white" />
                </div>
                &nbsp; Back to Top
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-black mb-10 text-4xl font-medium max-md:text-lg flex-center ">
          Thank you for watching
        </p>
      </main>
    </div>
  );
};

export default Contact;
