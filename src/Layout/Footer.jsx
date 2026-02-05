export default function Footer() {
  const year = new Date().getFullYear(); 

  return ( 
    <>
    <div className='flex items-center justify-center text-[16px] md:text-[18px] bg-orange-500 h-15 text-white'>
      <footer className="text-[14px] md:text-[17px]">Copyright &copy; {year} BFP Morong. All Rights Reserved </footer>
    </div>
    </>
  )
}