import Hamburger from "hamburger-react";
import { useState } from "react";
import List from "./List";

export const HamburgerMenu = () => {
  const [open, isOpen] = useState(false);
  return (
    <div>
      <Hamburger toggled={open} toggle={isOpen} />
      {open && (
        <div className=" absolute h-auto w-screen top-0 left-0 right-0 text-black bg-[#f6f6f6]">
          <header className="flex justify-end">
            <Hamburger toggled={open} toggle={isOpen} />
          </header>
          <main>
            <List className={"flex flex-center text-2xl gap-5 mb-5 flex-col"} />
          </main>
        </div>
      )}
    </div>
  );
};
