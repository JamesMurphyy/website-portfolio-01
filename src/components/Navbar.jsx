import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgb(255,255,255)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      {" "}
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-sans text-3xl font-bold text-black">
            {" "}
            Debby <span className="text-black">Murphy</span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-400 hover:text-black transition-colors delay-100 duration-200 ease-in-out"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-black transition-colors delay-100 duration-200 ease-in-out"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-black transition-colors delay-100 duration-200 ease-in-out"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-black transition-colors delay-100 duration-200 ease-in-out"
            >
              Contact
            </a>
            <a className="text-black ">
              <div>
                <span className="">call</span>
                999 - 999 - 1000
              </div>
              <div>
                <span class="">alternate_email</span>
                999 - 999 - 1000
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
