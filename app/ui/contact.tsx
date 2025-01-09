'use client'

import { FiPhoneCall } from "react-icons/fi"
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi"
import { MdOutlineEmail, MdOutlineMail } from "react-icons/md"

export default function Contact() {
  return (
    <section className="py-6">
      <div className="max-w-[1150px] mx-auto testimonials">
        <p className="text-3xl font-bold pb-3 text-center uppercase">Contact</p>
        <div className="flex items-center justify-center">
          <p className="border-b-[4px] border-b-[#3FBBC0] w-20 text-center"></p>
        </div>
        <p className="my-4 text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <div className="grid grid-cols-12 gap-6 p-6 shadow-gray-50">
          <div className="md:col-span-6 col-span-12">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-12 shadow-lg">
                <div className="p-6 w- flex flex-col space-y-4 items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-[#3FBBC0] flex items-center justify-center border-dotted"><HiOutlineLocationMarker className="w-8 h-8 stroke-[#3FBBC0]" /></div>

                  <span className="font-bold text-lg">Our Address</span>
                  <span>A108 Adam Street, New York, NY 535022</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-7">
              <div className="md:col-span-6 col-span-12 shadow-lg">
                <div className="p-6 w- flex flex-col space-y-2 items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-[#3FBBC0] flex items-center justify-center border-dotted">
                    <HiOutlineMail className="w-8 h-8 stroke-[#3FBBC0]" />
                  </div>
                  <span className="font-bold text-lg">Email Us</span>
                  <span>info@example.com</span>
                  <span>contact@example.com</span>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12 shadow-lg">
                <div className="p-6 w- flex flex-col space-y-2 items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-[#3FBBC0] flex items-center justify-center border-dotted">
                    <FiPhoneCall className="w-8 h-8 stroke-[#3FBBC0]" />
                  </div>
                  <span className="font-bold text-lg">Email Us</span>
                  <span>+1 5589 55488 55</span>
                  <span>+1 6678 254445 41</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12 shadow-lg p-6">
            <div className="grid grid-cols-12 gap-3">
              <div className="md:col-span-6 col-span-12">
                <input type="text" className="p-3 block w-full border-[1px] border-[#ced4da] placeholder:text-[#495057 rounded-md" placeholder="Your Name"></input>
              </div>
              <div className="md:col-span-6 col-span-12">
                <input type="text" className="p-3 block w-full border-[1px] border-[#ced4da] placeholder:text-[#495057 rounded-md" placeholder="Your Email"></input>
              </div>
            </div>
            <div className="grid grid-cols-12 mt-5">
              <div className="col-span-12">
                <textarea className="p-3 w-full block border-[1px] border-[#ced4da] placeholder:text-[#495057 rounded-md" placeholder="Message" rows={5}></textarea>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center">
              <button className="py-3 px-16 bg-[#3FBBC0] text-center text-white rounded-md">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}