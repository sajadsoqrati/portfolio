import { GoDash } from "react-icons/go";
import Project from "../Project";

interface project {
  id: string;
  imgSrc: string;
  caption: string;
}
const Projects = () => {
  const projects: project[] = [
    {
      id: "jahatstudio",
      imgSrc: "/imges/jahatstudio.webp",
      caption:
        "jahatstudio یک پروژه فریلنس مربوط به استدیو تبلیغاتی جهت هستش که به سفارش این مجموعه با دیزاین مد نظرشون کد نویسی کردم  در بخش فرانت از تکنولوژی های React- typeScript- TailwindCss4-React Router DOM -React Hook Form - Zod - ReactSlick - vite استفاده کردم و برای بخش بک اند هم باکمک AI از PHP  .استفاده کردم که با هاستشون سازگاری داشته باشه ولی هنوز خیلی جای کارداره که انجامش به نظر کارفرما بستگی داره.نکته جالب پروژه اینه که به جای استفاده از تیلوند برای ریسپانسیو سعی کردم یه کاستوم هوک درست کنم و با استفاده از اون ریسپانسیو رو مدیریت کنم.",
    },
    {
      id: "assemblyendgame",
      imgSrc: "/imges/assmebly.webp",
      caption:
        " اسمبلی اند گیم یک بازی حدس کلمه است که با هر  بار حدس اشتباه یک زبان برنامه نویسی از بین میرود و در اخر فقط زبان اسمبلی در دنیا باقی میماند این پروژه با reactنوشته شده و از clsx برای مدیریت conditional CSS classes و ازreact-confetti برای نمایش انیمیشن جشن در صورت پیروزی استفاده شده. و انتخاب کلمات به صورت رندوم از دیتابیس 485 کلمه ای انجام میشود",
    },
    {
      id: "amazonpracticee",
      imgSrc: "imges/amazon-checkout.webp",
      caption:
        " این پروژه تمرینی یک وب‌سایت فروشگاهی به سبک آمازون هست که به صورت کامل با JavaScript، HTML و CSS پیاده‌سازی شده وشما میتونید محصولات مورد نظر رو به لیست خریدتون اضافه کنید و از بالا سمت راست میتونید سبد خرید رو باز کنید و قیمت های محاسبه شده رو مشاهده کنید و هر تغیری که خواستید رو روی محصولات اعمال کنید حتی زمان ارسال محصول هم میتونید تغییر بدید و قیمت نهایی به نسبت این تغییرات عوض میشه در کل سعی کردم یه پروژه کاملا اینتراکتیو رو با جاوا اسکریپت بزنم",
    },

    {
      id: "sajad-tenzies",
      imgSrc: "/imges/tenzies.webp",
      caption:
        "Tenziesیک پروژه سرگرم کننده هست که باreactنوشته شده وشما میتونید بازدن دکمه rollتاس هارو به گردش در بیارید و با کلیک کردن روی هر تاس میتونید ثابت نگهش دارید و با دوباره زدن rollبقیه تاس ها عددشون تغییر میکنه تا زمانی که همه تاس ها به یک عدد برسن وشما برنده بشید. ",
    },
    {
      id: "sajad-memegenerator",
      imgSrc: "/imges/memegenerator.webp",
      caption:
        "میم جنریتور یک برنامه سرگرم کننده هستش که با reactنوشتم و کاربر میتونه متن بالا و پایین تصویر رو وارد کنه و بازدن دکمه get a new meme image برنامه یک میم تمپلیت جدید از imgflipAPI میاره(fetch)میکنه",
    },
  ];

  return (
    <div>
      <div className="mt-20 ">
        <h3 className=" flex-center text-[min(4vw,20px)] pr-6  ">
          <GoDash color="rgb(249, 66, 21)" size={30} /> My Projects!
        </h3>
        <div className="flex-center text-[min(5vw,40px)] font-normal">
          <h1 className="text-black font-medium">Let's Have a &nbsp; </h1>
          <h1 className="text-[#f94215] font-semibold">
            <em>Look&nbsp;at &nbsp; My&nbsp; Projects</em>
          </h1>
        </div>
        {projects.map((project) => (
          <Project
            imgSrc={project.imgSrc}
            caption={project.caption}
            id={project.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
