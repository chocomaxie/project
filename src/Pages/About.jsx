import { Element } from "react-scroll";

export default function About() {
  return (
    <>
       <Element name="about" className="flex min-h-screen items-center justify-center px-10">
          <div className="flex flex-col gap-x-20 md:flex-row w-150 md:w-230 gap-10">
            <div className="flex-1 border rounded-2xl p-5 ">
              <h1 className="font-bold text-3xl md:text-4xl text-center">Mission</h1>
              <p className="text-[14px] md:text-[17px] text-center">We commit to prevent and suppress destructive fires, investigate its causes; enforce Fire Code and other related laws; and respond to man-made and natural disasters and other emergencies.</p>
            </div>
            <div className="flex-1 border rounded-2xl p-5 ">
              <h1 className="font-bold text-3xl md:text-4xl text-center">Vision</h1>
              <p className="text-[14px] md:text-[17px] text-center">A modern fire service fully capable of ensuring a fire-safe nation by 2034.</p>
            </div>
          </div>
        </Element>
    </>
  )
}