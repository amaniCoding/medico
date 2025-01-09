'use client'
import { useRef, useEffect } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
export default function TopNavBar() {
  const topBarnavref = useRef<HTMLDivElement>(null);
  
  const myFunction = () => {
    topBarnavref.current!.style.transition = 'all 0.5s';
    window.addEventListener("scroll", function () {
    
      if (this.document.body.scrollTop > 25 || this.document.documentElement.scrollTop > 25) {
        topBarnavref.current!.style.transform = "translateY(-100%)";

      } else {
        topBarnavref.current!.style.transform = "translateY(0)";

      }
    });
  }

   useEffect(() => {
      myFunction();
      return () => {
        myFunction();
      }
    }, [])
  return (
    <nav className="p-2 bg-[#3FBBC0] md:block hidden" ref={topBarnavref}>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex items-center justify-between space-x-3">
          <div className="flex items-center space-x-2">
            <IoMdTime className="w-7 h-7" color="white" />
            <span className="font-semibold text-white">Monday - Saturday, 8AM to 10PM</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="w-7 h-7" color="white" />
            <span className="font-semibold text-white">Call us now +1 5589 55488 55</span>
          </div>
        </div>
      </div>
    </nav>
  )
}