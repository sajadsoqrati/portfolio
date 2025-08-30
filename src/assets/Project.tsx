interface Props {
  imgSrc: string;
  caption: string;
  id: string;
}
const Project = ({ imgSrc, caption, id }: Props) => {
  return (
    <figure className="bg-white rounded-2xl m-10 flex justify-around p-5 max-md:flex max-lg:flex-col  ">
      <a
        target="_blank"
        className="rounded-2xl hover:cursor-pointer hover:border-2 max-lg:flex-center hover:border-[#f54617]"
        href={`https://${id}.netlify.app`}
      >
        <img src={imgSrc} alt="assembly-endGame" width="500px" />
      </a>
      <figcaption
        className="flex flex-col justify-center text-justify w-[500px] max-lg:mt-8 max-lg:w-fit font-farsi-noto"
        dir="rtl"
      >
        {caption}
        <br />
        <br />
        <br />
        <br />
        <a
          href={
            id === "jahatstudio"
              ? `https://${id}.com`
              : `https://${id}.netlify.app`
          }
          className="text-lg max-md:text-sm max-lg:flex-center font-bold hover:text-[#f54617] "
        >
          {id === "jahatstudio" ? `${id}.com` : `${id}.netlify.app`}
        </a>
      </figcaption>
    </figure>
  );
};

export default Project;
