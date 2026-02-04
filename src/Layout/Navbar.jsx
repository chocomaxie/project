import { Link } from "react-scroll";
import { useState } from "react";
import { Menu, X } from 'lucide-react'


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-end md:justify-center items-center h-15 fixed top-0 left-0 w-full z-999 px-10 md:px-5 bg-white">
      <div className="gap-5 list-none hidden md:flex"> 
        <Link to='home' spy={true} duration={500} smooth={true} activeClass='font-bold text-blue-500' className='cursor-pointer'>Home</Link>
        <Link to='about' spy={true} duration={500} smooth={true} activeClass='font-bold text-blue-500' className='cursor-pointer'>About</Link>
        <Link to='activities' spy={true} duration={500} smooth={true} activeClass='font-bold text-blue-500' className='cursor-pointer'>Activities</Link>
        <Link to='gallery' spy={true} duration={500} smooth={true} activeClass='font-bold text-blue-500' className='cursor-pointer'>Gallery</Link>
      </div>
      
      <div className="md:hidden text-3xl">
  <button
    onClick={toggleMenu}
    className="p-2 rounded-md hover:bg-gray-200 transition"
  >
    {isOpen ? (
      <X size={32} strokeWidth={2} />
    ) : (
      <Menu size={32} strokeWidth={2} />
    )}
  </button>
</div>

    {isOpen && (
      <div className="absolute top-15 right-0 bg-white w-full md:hidden flex flex-col items-center gap-4 p-4 shadow-lg">
        <Link to="home" className="cursor-pointer" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
        <Link to="about" className="cursor-pointer" smooth={true} duration={500} onClick={toggleMenu}>About</Link>
        <Link to="activities" className="cursor-pointer" smooth={true} duration={500} onClick={toggleMenu}>Activites</Link>
        <Link to="gallery" className="cursor-pointer" smooth={true} duration={500} onClick={toggleMenu}>Gallery</Link>
      </div>
    )}
    </nav>

  )
}