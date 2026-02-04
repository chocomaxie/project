import { Element } from "react-scroll";
import cover from "../assets/Images/cover.jpg";
import logo1 from "../assets/Images/logo2.png"
import logo2 from "../assets/Images/BFP.png"

export default function Home() {
  return (
    <Element
      name="home"
      className="flex flex-col min-h-screen items-center justify-center px-6 md:px-10 overflow-hidden "
    >
      <div className="flex items-center justify-center md:justify-between mb-20 md:px-30 w-full gap-5 ">
        <img src={logo1} draggable={false} className="w-[60px] md:w-[90px] lg:w-[120px] z-9" alt="" />
        <h1 className="font-bold text-1xl md:text-2xl lg:text-3xl text-center z-9">Bureau of Fire Protection</h1>
        <img src={logo2} draggable={false} className="w-[60px] md:w-[90px] lg:w-[120px] z-9" alt="" />
      </div>

      <img
        src={cover}
        alt="Morong Fire Station"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      <div className="relative z-10 text-center max-w-4xl mb-30 ">
        <h2 className="font-bold text-4xl md:text-5xl mb-4">
          Morong Fire Station
        </h2>

        <p className="text-[14px] md:text-[17px]">
          This website is a local documentation of the activities, programs, and
          events conducted by the Morong Fire Station from past years up to the
          present. It aims to preserve records of fire prevention efforts,
          rescue operations, trainings, and community activities for reference
          and archival purposes.
        </p>
      </div>
    </Element>
  );
}
