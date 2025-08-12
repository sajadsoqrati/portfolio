interface Props {
  className: string;
}
const List = (props: Props) => {
  const navLinks: string[] = ["Home", "About Me", "Skills", "Projects"];

  return (
    <ul className={props.className}>
      {navLinks.map((link) => (
        <li key={link}>
          <a
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className=" text-black hover:text-orange-500 whitespace-nowrap transition-colors"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default List;
