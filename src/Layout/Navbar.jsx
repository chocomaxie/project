import { Link as ScrollLink, scroller } from "react-scroll";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (section) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      // wait for home page to render before scrolling
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
        });
      }, 200);
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
    }
  };

  return (
    <nav className="flex justify-end md:justify-center items-center h-15 fixed top-0 left-0 w-full z-50 px-10 md:px-5 bg-[#C1121F] text-white shadow">
      {/* DESKTOP */}
      <div className="gap-5 list-none hidden md:flex">
        <span
          onClick={() => handleNavClick("home")}
          className="cursor-pointer hover:font-bold"
        >
          Home
        </span>
        <span
          onClick={() => handleNavClick("about")}
          className="cursor-pointer hover:font-bold"
        >
          About
        </span>
        {/* <span
          onClick={() => handleNavClick("guide")}
          className="cursor-pointer hover:font-bold"
        >
          Guide
        </span> */}
        <span
          onClick={() => handleNavClick("activities")}
          className="cursor-pointer hover:font-bold"
        >
          Activities
        </span>
        <span
          onClick={() => handleNavClick("gallery")}
          className="cursor-pointer hover:font-bold"
        >
          Gallery
        </span>
      </div>

      {/* MOBILE ICON */}
      <div className="md:hidden text-3xl">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md hover:bg-gray-200 transition"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-15 right-0 bg-[#C1121F] w-full md:hidden flex flex-col items-center gap-4 p-4 shadow-lg">
          <span
            className="cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            Home
          </span>
          <span
            className="cursor-pointer"
            onClick={() => handleNavClick("about")}
          >
            About
          </span>
          <span
            className="cursor-pointer"
            onClick={() => handleNavClick("activities")}
          >
            Activities
          </span>
          <span
            className="cursor-pointer"
            onClick={() => handleNavClick("gallery")}
          >
            Gallery
          </span>
        </div>
      )}
    </nav>
  );
}
