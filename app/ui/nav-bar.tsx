'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaPhone } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
export default function NavBar() {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const topBarnavref = useRef<HTMLDivElement>(null);

  const showMobileMenu = () => {
    setIsShowMobileMenu(true);
  }
  
  const myFunction = () => {
    navRef.current!.style.transition = 'all 0.5s';
    topBarnavref.current!.style.transition = 'all 0.5s';
    window.addEventListener("scroll", function () {
      const scrollH = topBarnavref.current?.scrollHeight;
      if (this.document.body.scrollTop > 25 || this.document.documentElement.scrollTop > 25) {
        
        topBarnavref.current!.style.transform = "translateY(-100%)";
        navRef.current!.style.transform = `translateY(-${scrollH}px)`;

      } else {
        navRef.current!.style.transform = "translateY(0)";
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

    <div className="fixed top-0 right-0 left-0 z-20">

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
      <nav className="md:p-4 p-2 bg-white relative" ref={navRef}>
        <div className="max-w-screen-lg mx-auto">

          <div className="flex items-center justify-between space-x-3">
            <div className="flex items-center space-x-2">
              <Image src={`/logo.png`}
                width={160}
                height={160}
                alt="Medico developed by Amanuel Ferede"
                className="rounded-full"
              />
              <span className="font-bold text-white">MEDICIO</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="md:flex items-center space-x-6 hidden">
                <Link className="font-semibold text-gray-400 text-sm"
                  href={`/`}
                >Home</Link>
                <Link className="font-semibold text-gray-400 text-sm"
                  href={`/`}
                >ABOUT</Link>
                <Link className="font-semibold text-gray-400 text-sm"
                  href={`/`}
                >SERVICES</Link>
                <Link className="font-semibold text-gray-400 text-sm"
                  href={`/`}
                >DEPARTMENTS</Link>
                <Link className="font-semibold text-gray-400 text-sm"
                  href={`/`}
                >DOCTORS</Link>
                <Link className="font-semibold text-gray-400 text-sm"
                  href={`/`}
                >CONTACT</Link>
              </div>
              <button className="md:block hidden py-2 px-6 text-center bg-[#3FBBC0] text-white rounded-md">Make an apointment</button>
              <button className="md:hidden block py-1 px-6 text-center bg-[#3FBBC0] text-white rounded-md">Apointment</button>
              <FaBars className="w-7 h-7 md:hidden block cursor-pointer" onClick={showMobileMenu} />
            </div>
          </div>
        </div>
        {
          isShowMobileMenu && (
            <div className="md:hidden block fixed top-0 left-0 bottom-0 right-0 bg-black/60 z-[200] overflow-hidden h-screen">
              <FaXmark className="w-8 h-8 absolute top-5 right-5 cursor-pointer" color="white" onClick={() => { setIsShowMobileMenu(false) }} />
              <div className="max-w-screen-sm mx-5 mt-16 bg-white rounded-xl p-6 h-[70vh]">
                <div className="flex flex-col space-y-6 items-start ">
                  <Link className="hover:text-[#3FBBC0] hover:font-semibold font-semibold text-gray-400"
                    href={`/`}
                  >Home</Link>
                  <Link className="hover:text-[#3FBBC0] hover:font-semibold font-semibold text-gray-400"
                    href={`/`}
                  >About</Link>
                  <Link className="hover:text-[#3FBBC0] hover:font-semibold font-semibold text-gray-400"
                    href={`/`}
                  >Services</Link>
                  <Link className="hover:text-[#3FBBC0] hover:font-semibold font-semibold text-gray-400"
                    href={`/`}
                  >Departments</Link>
                  <Link className="hover:text-[#3FBBC0] hover:font-semibold font-semibold text-gray-400"
                    href={`/`}
                  >Doctors</Link>
                  <Link className="hover:text-[#3FBBC0] hover:font-semibold font-semibold text-gray-400"
                    href={`/`}
                  >Contact</Link>
                </div>
              </div>
            </div>
          )
        }
      </nav>

    </div>

  )
}