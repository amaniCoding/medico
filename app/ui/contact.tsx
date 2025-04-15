'use client'

import { easeIn, motion } from "motion/react"
import { HiOutlineLocationMarker } from "react-icons/hi"


export default function Contact() {
  return (
    <section className="p-3 py-16" id="contact">
      <div className="max-w-[1150px] mx-auto testimonials">
        <motion.div
          initial={{ translateY: 80, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, easings: easeIn }}
        >
          <p className="text-3xl font-bold pb-3 text-center uppercase">Contact</p>
          <div className="flex items-center justify-center">
            <p className="border-b-[4px] border-b-[#3FBBC0] w-20 text-center"></p>
          </div>
          <p className="my-4 text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </motion.div>
        <div className="grid grid-cols-12 gap-6 p-6 shadow-gray-50">
          <div className="md:col-span-6 col-span-12">
            <motion.div
              initial={{ translateY: 110, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, easings: easeIn }}
            >

              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12 shadow-lg">
                  <div className="p-6 w- flex flex-col space-y-4 items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-[#3FBBC0] flex items-center justify-center border-dotted"><HiOutlineLocationMarker className="w-8 h-8 stroke-[#3FBBC0]" /></div>

                    <span className="font-bold text-lg">Our Address</span>
                    <span>A108 Adam Street, New York, NY 535022</span>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>

          <div className="md:col-span-6 col-span-12 shadow-lg p-6">
            <motion.div
              initial={{ translateY: 110, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, easings: easeIn }}
            >
              <div>
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
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}