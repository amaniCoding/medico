'use client'

import { FaFacebookF, FaInstagram, FaLinkedin, FaSkype, FaTwitter } from "react-icons/fa"
import { MdKeyboardArrowRight } from "react-icons/md"

export default function Footer() {
  return (
    <section className="p-6 bg-[#f6f6f6]">
      <div className="max-w-[1150px] mx-auto testimonials">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
          <div className="">
            <div className="flex flex-col space-y-3">
              <p className="font-bold text-xl">Medico</p>
              <div>
                <p>A108 Adam Street
                </p>
                <p>NY 535022, USA</p>
              </div>
              <div>
                <p>Phone: +1 5589 55488 55</p>
                <p>Email: info@example.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#3fbbc0] flex items-center justify-center rounded-md p-2">
                  <FaTwitter className="w-6 h-6" color="white"/>
                </div>
                <div className="w-8 h-8 bg-[#3fbbc0] flex items-center justify-center rounded-md p-2">
                  <FaFacebookF className="w-6 h-6" color="white"/>
                </div>
                <div className="w-8 h-8 bg-[#3fbbc0] flex items-center justify-center rounded-md p-2">
                  <FaInstagram className="w-6 h-6" color="white"/>
                </div>
                <div className="w-8 h-8 bg-[#3fbbc0] flex items-center justify-center rounded-md p-2">
                  <FaSkype className="w-6 h-6" color="white"/>
                </div>
                <div className="w-8 h-8 bg-[#3fbbc0] flex items-center justify-center rounded-md p-2">
                  <FaLinkedin className="w-6 h-6" color="white"/>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-xl font-bold mb-3">Useful Links</p>
            <div className="flex flex-col space-y-3">
              <div className="flex space-x-3">
                <MdKeyboardArrowRight className="w-4 h-4" />
                <span className="w-full">Home</span>
              </div>
              <div className="flex space-x-3">
                <MdKeyboardArrowRight className="w-4 h-4" />
                <span className="w-full"> About us</span>
              </div>
              <div className="flex space-x-3">
                <MdKeyboardArrowRight className="w-4 h-4" />
                <span className="w-full">Services</span>
              </div>
              <div className="flex space-x-3">
                <MdKeyboardArrowRight className="w-4 h-4" />
                <span className="w-full">Home</span>
              </div>
              <div className="flex space-x-3">
                <MdKeyboardArrowRight className="w-4 h-4" />
                <span className="w-full"> Terms of service</span>
              </div>
              <div className="flex space-x-3">
                <MdKeyboardArrowRight className="w-4 h-4" />
                <span className="w-full">Privacy policy</span>
              </div>
            </div>
          </div>
          <div className="">
            
            <p className="text-xl font-bold mb-3">Our Services</p>
            <div className="flex flex-col space-y-3">
              <div className="flex space-x-3">
                <MdKeyboardArrowRight className="w-4 h-4" />
                <span className="w-full">Web Design</span>
              </div>
              <div className="flex space-x-3">
                <MdKeyboardArrowRight className="w-4 h-4" />
                <span className="w-full">Web Development</span>
              </div>
              <div className="flex space-x-3">
                <MdKeyboardArrowRight className="w-4 h-4" />
                <span className="w-full">Product Management</span>
              </div>
              <div className="flex space-x-3">
                <MdKeyboardArrowRight className="w-4 h-4" />
                <span className="w-full">Marketing</span>
              </div>
              <div className="flex space-x-3">
                <MdKeyboardArrowRight className="w-4 h-4" />
                <span className="w-full"> Graphic Design</span>
              </div>
            </div>
          </div>
          <div className="">
          <p className="text-xl font-bold mb-3">Our Newsletter</p>
            <div className="felx flex-col space-y-3">
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <div className="flex items-center space-x-0">
              <input type="text" className="p-2 bg-white border-[1px] border-gray-500 rounded-l-md"></input>
              <button className="rounded-r-md p-2 bg-[#3fbbc0] text-center text-white border-[1px] border-gray-500">Subscribe</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}