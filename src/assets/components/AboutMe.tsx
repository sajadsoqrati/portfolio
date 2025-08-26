import { BsTelephoneForwardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GoDash } from "react-icons/go";
import Technologies from "./Technologies";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiReact } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";

const AboutMe = () => {
  return (
    <>
      <section
        id="about-me"
        className="max-lg:grid max-lg:place-items-center lg:flex lg:justify-between lg:mt-10 lg:ml-20 md:gap-5 items-center"
      >
        <div className="md:ml-10">
          <div className="max-sm:flex-center flex flex-col md:mt-5 ">
            <h3 className=" text-[min(4vw,20px)] flex ">
              <GoDash color="rgb(249, 66, 21)" size={30} /> About Me!
            </h3>
            <div className=" text-[min(5vw,40px)] flex  mb-7">
              <h1 className="text-black  font-medium whitespace-nowrap">
                who is &nbsp;{" "}
              </h1>
              <h1 className="text-[#f94215] font-semibold">
                <em>Sajad&nbsp;Soqrati</em>
              </h1>
            </div>
            <p className="max-sm:max-w-[350px] max-md:mx-8 max-md:flex-center  md:text-lg max-w-[570px] text-justify font-farsi-noto ">
              سلام من یک فرانت‌اند دولوپر هستم که تمرکز اصلیم روی توسعه‌ی
              رابط‌های کاربری با استفاده از React و TypeScript و Next.js بوده.
              تجربه‌ی کار با این تکنولوژی‌ها به من امکان رو داده تا پروژه‌هایی
              ساختارمند، مقیاس‌پذیر و با کیفیت کدنویسی بالا پیاده‌سازی کنم. برای
              اجرای CSS هم از فریم ورک هایی مثل Tailwind و Bootstrap استفاده
              میکنم.برای تست کد هایJavaScript و React هم از Jest استفاده میکنم و
              توانایی ایجاد رابط‌های کاربری مدرن، سریع و بهینه رو دارم. تاامروز
              چند پروژه‌ی شخصی و یک پروژه‌ی فریلنسری انجام دادم که علاوه بر
              توسعه‌ی فرانت‌اند، بخش بک‌اند رو هم با استفاده از Node.js و
              Express پیاده‌سازی کرده‌ام البته تمرکز اصلیم روی فرانت اند بوده
              .قبل از ورود به حوزه‌ی توسعه‌ی وب، در زمینه‌ی مهندسی برق، طراحی
              اتوماسیون صنعتی و برنامه‌نویسی با Matlab و PLC فعالیت می‌کردم. این
              تجربه ها باعث تقویت مهارت‌های تحلیلی و توانایی حل مسئله من شدن که
              در توسعه‌ی نرم‌افزار هم نقشی اساسی ایفا می‌کنن. هدف من در مسیر
              حرفه‌ای، مشارکت در پروژه‌های پرچالش کناریه تیم خوب و ارتقای
              مهارت‌هام در حوزه‌ی مهندسی نرم افزار هست تا بتونم در خلق محصولات
              کارآمد، مقیاس‌پذیروکاربرپسندنقش مؤثرتری داشته باشم.
            </p>
          </div>

          <nav className=" max-md:text-sm max-md:grid flex max-md:gap-4 max-md:my-10 gap-10 md:mt-10 md:ml-8 text-lg font-extralight">
            <a
              href="tel:+989117667109"
              className=" bg-white rounded-[50px] max-md:mx-4 max-md:p-2 p-3"
            >
              <BsTelephoneForwardFill
                color="#f94215"
                className="inline"
                size={20}
              />
              &nbsp; 09117667109
            </a>
            <a
              href="mailto:sajadsoqrati@gmail.com"
              className=" bg-white rounded-[50px] max-md:p-2 max-md:mx-4 p-3"
            >
              <MdEmail color="#f94215" className="inline" size={20} />
              &nbsp; sajadsoqrati@gmail.com
            </a>
          </nav>
        </div>

        <figure className="max-h-[60vh] max-lg:flex-center md:mt-20 lg:mb-35">
          <img
            className="max-sm:max-w-[62vw] max-w-[40vw]  md:max-h-[40vw] lg:mr-30 lg:mb-20"
            src="/imges/sajstand.webp"
            alt="sajad"
          />
        </figure>
      </section>
      <section id="skills">
        <div className="bg-white grid mt-10">
          <div className="flex-center flex flex-col  mt-17 mb-17 ">
            <h3 className=" text-[min(4vw,20px)] flex ">
              <GoDash color="rgb(249, 66, 21)" size={30} /> My Favorite Tools!
            </h3>
            <div className=" text-[min(5vw,40px)] flex  mb-7">
              <h1 className="text-black font-medium whitespace-nowrap">
                Technologies That &nbsp;
              </h1>
              <h1 className="text-[#f94215] font-semibold">
                <em>Power&nbsp;My&nbsp; Work</em>
              </h1>
            </div>
          </div>
          <div className="gap-10 md:gap10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-7 place-items-center md:mb-20 ">
            <Technologies
              leftIcon={RiJavascriptFill}
              rightIcon={BiLogoTypescript}
              lNumber={90}
              rNumber={75}
              leftSize={65}
              leftColor="#f6df1d"
              rightSize={65}
              rightColor="#037acc"
            />
            <Technologies
              leftIcon={SiReact}
              rightIcon={SiNextdotjs}
              lNumber={85}
              rNumber={75}
              leftSize={65}
              leftColor="#037acc"
              rightSize={65}
              rightColor="black"
            />
            <Technologies
              leftIcon={RiTailwindCssFill}
              rightIcon={SiJest}
              lNumber={90}
              rNumber={75}
              leftSize={65}
              leftColor="#02b5d3"
              rightSize={65}
              rightColor="#c21424"
            />
            <Technologies
              leftIcon={IoLogoHtml5}
              rightIcon={IoLogoCss3}
              lNumber={95}
              rNumber={95}
              leftSize={65}
              leftColor="#e34d26"
              rightSize={65}
              rightColor="#1f63af"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
