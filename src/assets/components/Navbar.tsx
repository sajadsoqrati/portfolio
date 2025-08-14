import { PiPersonSimpleCircleFill } from "react-icons/pi";

const Navbar = () => {
  const navLinks: string[] = ["Home", "About Me", "Skills", "Projects"];
  return (
    <nav className=" bg-[rgb(246, 246, 246)] flex justify-between items-center p-4">
      <span>
        <PiPersonSimpleCircleFill color="rgb(249, 66, 21)" size={40} />
        <p>Sajad Soqrati</p>
        </span>
        
        {navLinks.map((link) => (
          
            <a key={link} href={`#${link}`} className="text-black">
              {link}
            </a>
         
        ))}
    
      </nav>
  );
};

export default Navbar;
