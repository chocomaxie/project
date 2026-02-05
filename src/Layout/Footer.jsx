import { Facebook } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear(); 

  return ( 
    <>
    <footer className="grid grid-cols-2 bg-[#0B3C5D] h-20 text-white px-8 md:px-10">
      <div className="flex items-center">
        <a target="_" href="https://www.facebook.com/morongfs.rizal/"><Facebook/></a>
      </div>
      <div className="text-right flex flex-col justify-center">
        <p className="text-[10px] md:text-[14px]">BFP MORONG EMERGENCY HOTLINE NUMBER</p>
        <p className="text-[10px] md:text-[14px]">09084417754</p> 
        <p className="text-[10px] md:text-[14px]">#ThinkFireSafetyNow</p>
      </div>
    </footer>
      <div className="text-center w-full pb-2 bg-[#0B3C5D] text-white">
        <p className="text-[10px] md:text-[14px]">Copyright &copy; {year} BFP Morong. All Rights Reserved</p>
      </div>
    
    </>
  )
}