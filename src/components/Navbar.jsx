import { useEffect, useState } from "react";
import { InboxArrowDownIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
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

  useEffect(() => {
    const handleScroll = () => {
      setColour(window.scrollY >= 900);

      const scrollPosition = window.scrollY + 80;
      for (const { id } of navLinks) {
        const section = document.getElementById(id);
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    const debounce = (fn, delay) => {
      let timeout;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(fn, delay);
      };
    };

    const debouncedScroll = debounce(handleScroll, 50);
    handleScroll(); // initialize on mount

    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, []);

  return (
    <>
      <header>
        <nav
          id="header"
          className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            colour
              ? "bg-white/90 text-black border-b border-gray-200"
              : "bg-black/30 text-white"
          }`}
          role="navigation"
          aria-label="Main Navigation"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-18 py-4">
              <a
                href="#home"
                className="flex items-center font-sans text-2xl font-bold tracking-tight"
                aria-label="Go to homepage"
              >
                <img
                  src={
                    colour
                      ? DebraMurphyLogo1TransparentBlack
                      : DebraMurphyLogo1Transparent
                  }
                  alt="Debra Murphy Real Estate Logo - Stoney Creek Realtor"
                  className="h-30"
                />
              </a>

              {/* Hamburger for Mobile */}
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="md:hidden flex flex-col justify-center w-7 h-5 cursor-pointer z-50"
                aria-label="Toggle navigation menu"
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
              </button>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`hover:text-indigo-500 transition-colors duration-200 ${
                      activeSection === id
                        ? "border-b-2 border-indigo-500 pb-1"
                        : ""
                    }`}
                  >
                    {label}
                  </a>
                ))}
                <address className="not-italic text-sm -mr-15">
                  <div>
                    <InboxArrowDownIcon className="h-5 w-5 inline-flex pr-1 mb-1" />
                    <a href="mailto:debbymurphyrealestate@gmail.com">
                      debbymurphyrealestate@gmail.com
                    </a>
                  </div>
                  <div>
                    <PhoneIcon className="h-5 w-5 inline-flex pr-1 mb-1" />
                    <a href="tel:9053081567">(905) - 308 - 1567</a>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center bg-black/90"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
              aria-label="Close menu"
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

      {/* Scroll Smooth SEO improvement */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default Navbar;
