'use client'

import { useEffect, useRef } from "react"
import { MdKeyboardArrowUp } from "react-icons/md"

export default function BackToTop() {
  const backtoTop = useRef<HTMLDivElement>(null);
  const handelBackToTop = () => {
    window.scrollTo(
      {
        top: 0,
        behavior: 'smooth'
      }
    )
  }
  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (this.document.body.scrollTop > 400 || this.document.documentElement.scrollTop > 400) {
        backtoTop.current!.style.display = "flex";
        backtoTop.current!.classList.add("opacity-100");
      } else {
        backtoTop.current!.style.display = "none";
        backtoTop.current!.classList.add("opacity-0");
      }
    });

    return () => {
      window.removeEventListener("scroll", function () {
        if (this.document.body.scrollTop > 400 || this.document.documentElement.scrollTop) {
          backtoTop.current!.style.display = "flex";
          backtoTop.current!.classList.add("opacity-100");
        } else {
          backtoTop.current!.style.display = "none";
          backtoTop.current!.classList.add("opacity-0");
        }
      })
    }
  }, [])
  return (
    <div className="flex fixed z-10 right-3 bottom-3 w-10 h-10 rounded-md bg-[#3fbbc0] items-center justify-center p-2 transition duration-300 ease-in-out cursor-pointer animate-pulse" ref={backtoTop} onClick={handelBackToTop}>
      <MdKeyboardArrowUp className="font-bold" color="white" size={30} />
    </div>
  )
}