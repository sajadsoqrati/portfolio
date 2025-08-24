import { GoDash } from "react-icons/go";
import { RiDoubleQuotesL } from "react-icons/ri";

const Home = () => {
  return (
    <section id="home">
      <div>
        <h3 className=" flex-center text-[min(4vw,20px)] pr-6  ">
          <GoDash color="rgb(249, 66, 21)" size={30} /> Hello There! Thank you
          for your time
        </h3>
        <div className="flex-center text-[min(5vw,40px)] font-normal">
          <h1 className="text-black font-medium">i'm &nbsp; </h1>
          <h1 className="text-[#f94215] font-semibold">
            <em>Seyed&nbsp;Sajad&nbsp;Soqrati</em>
          </h1>
        </div>
        <p className="flex-center mt-1 mb-3 text-[min(3vw,20px)] text-[#4C5454] ">
          Front-End Developer
        </p>
      </div>
      <article className=" max-sm:flex-center max-sm:flex-col flex sm:border-b-4 justify-between   bg-white">
        <div className="max-sm:hidden flex justify-center flex-col pl-20">
          <RiDoubleQuotesL color="#f94215" size={33} />
          <p className=" flex pl-4 pb-25  text-[min(2vw,40px)] text-[#000] max-w-[400px] ">
            Engineering isn’t just a job, it’s the story I choose to write every
            day.
          </p>
        </div>
        <figure className="max-sm:flex-center">
          <img
            src="/imges/DSC04699.jpg"
            alt="sajad"
            className="max-h-[70vh] max-w-[80vw] "
          />
        </figure>
        <p className="sm:hidden max-sm:text-[min(3vw,12px)]  bg-[#4C5454] font-light text-xs text-white w-[100%] h-auto flex-center py-1.5">
          Engineering isn’t just a job,&nbsp; it’s the story I choose to write
          every day.
        </p>
      </article>
    </section>
  );
};

export default Home;
