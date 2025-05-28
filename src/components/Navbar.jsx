import { useEffect, useState } from "react";
import { InboxArrowDownIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { AnimatePresence } from "framer-motion";
import DebraMurphyLogo1Transparent from "../assets/DebraMurphyLogo1Transparent.png";
import DebraMurphyLogo1TransparentBlack from "../assets/DebraMurphyLogo1TransparentBlack.png";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "listings", label: "Listings" },
  { id: "contact", label: "Contact" },
];

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [colour, setColour] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const changeColour = () => {
    if (window.scrollY >= 900) {
      setColour(true);
    } else {
      setColour(false);
    }
  };

  useEffect(() => {
    changeColour();
    window.addEventListener("scroll", changeColour);
    return () => window.removeEventListener("scroll", changeColour);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 80;

      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        id="header"
        className={`fixed top-0 w-full z-50 backdrop-blur-xs transition-all duration-500 ${
          colour
            ? "bg-white/90 text-black border-b border-gray-200"
            : "bg-black/30 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-18">
            <a
              href="#home"
              className="flex items-center space-x-2 font-sans text-2xl font-bold tracking-tight"
            >
              {/* <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold text-lg">
                DM
              </div>
              <span>
                Debra <span className="text-indigo-500">Murphy</span>
              </span> */}
              <img
                src={
                  colour
                    ? DebraMurphyLogo1TransparentBlack
                    : DebraMurphyLogo1Transparent
                }
                alt="Debra Murphy Real Estate Logo"
                // className="h-15 w-auto object-contain rounded-md"
                className="h-30"
              />
            </a>

            <div
              className="md:hidden flex flex-col justify-center w-7 h-5 cursor-pointer z-50"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              <span
                className={`block h-0.5 w-full bg-current transform transition duration-300 ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transform transition duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`hover:text-indigo-500 transition-colors duration-200 ${
                    activeSection === link.id
                      ? "border-b-2 border-indigo-500 pb-1"
                      : ""
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="text-sm">
                <div>
                  <InboxArrowDownIcon className="h-5 w-5 inline-flex pr-1 mb-1" />
                  test@test.com
                </div>
                <div>
                  <PhoneIcon className="h-5 w-5 inline-flex pr-1 mb-1" />
                  999 - 999 - 1000
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center bg-black/90"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
              aria-label="Close Menu"
            >
              &times;
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 ${
                  activeSection === link.id
                    ? "underline underline-offset-4"
                    : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default Navbar;
