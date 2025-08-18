import type { IconType } from "react-icons";
type Props = {
  leftIcon: IconType;
  rightIcon: IconType;
  lNumber: number;
  rNumber: number;
  leftSize: number;
  leftColor?: string;
  rightSize?: number;
  rightColor?: string;
};
const Technologies = ({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  lNumber,
  rNumber,
  leftSize = 30,
  leftColor = "#fff",
  rightSize = 30,
  rightColor = "#fff",
}: Props) => {
  return (
    <div className="max-w-[350px] text-xl flex-center gap-5 font-semibold pb-10 whitespace-nowrap">
      <div className=" w-35 h-50 bg-[#f6f6f6]  flex flex-col items-center gap-5 justify-center mx-auto rounded-b-[100px] rounded-tl-[125px]">
        <figure className="bg-white w-fit p-3 rounded-full">
          <LeftIcon size={leftSize} color={leftColor} />
        </figure>
        <figcaption className=" font-medium text-black ">{lNumber}%</figcaption>
      </div>
      <div className=" w-35 h-50 bg-[#f6f6f6]  flex  flex-col items-center gap-7 justify-center mx-auto rounded-b-[100px] rounded-tr-[125px]">
        <figure className="bg-white w-fit p-3 rounded-full">
          <RightIcon size={rightSize} color={rightColor} />
        </figure>
        <figcaption className=" font-medium text-black ">{rNumber}%</figcaption>
      </div>
    </div>
  );
};

export default Technologies;
