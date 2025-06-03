export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const baseClasses =
    "fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center bg-[rgba(10,10,10,0.8)] transition-all duration-300 ease-in-out";
  const menuStateClasses = menuOpen
    ? "h-screen opacity-100 pointer-events-auto"
    : "h-0 opacity-0 pointer-events-none";

  const menuItemClass = `text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
    menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
  }`;

  const handleClose = () => setMenuOpen(false);

  return (
    <div className={`${baseClasses} ${menuStateClasses}`}>
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {["home", "about", "projects", "contact"].map((section) => (
        <a
          key={section}
          href={`#${section}`}
          onClick={handleClose}
          className={menuItemClass}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
    </div>
  );
};
