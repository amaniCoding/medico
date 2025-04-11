'use client'
import { easeIn, motion } from "motion/react"
import Image from "next/image"
import { FaHeartPulse, FaWheelchair } from "react-icons/fa6"
import { GiBrainFreeze } from "react-icons/gi"
import { LiaTabletsSolid } from "react-icons/lia"
import { PiDnaFill, PiPulseFill } from "react-icons/pi"
export function Services() {
  return (
    <section className="p-3 py-16" id="services">
      <div className="max-w-[1150px] mx-auto">
        <motion.div
          initial={{ translateY: 110, opacity: 0 }}
          viewport={{ once: false }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, easings: easeIn }}
        >
          <p className="text-3xl font-bold pb-3 text-center uppercase">Services</p>
          <div className="flex items-center justify-center">
            <p className="border-b-[4px] border-b-[#3FBBC0] w-20 text-center"></p>
          </div>
          <p className="my-4 text-center">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </motion.div>
        <div className="grid md:grid-cols-3 grid-cols-1">
          <motion.div
            initial={{ translateY: 110, opacity: 0 }}
            viewport={{ once: false }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, easings: easeIn }}
          >
            <div className="p-3">
              <div className="flex flex-col space-y-3 items-center justify-center">
                <div className="shadow-xl hover:shadow-[#3FBBC0] p-3 w-20 h-20 flex items-center justify-center bg-white rounded-full">
                  <FaHeartPulse className="w-10 h-10" color="#3FBBC0" />
                </div>
                <p className="border-b-4 pb-3 text-center border-b-[#3FBBC0]">Lorem Ipsum</p>
                <p className="text-center text-black/80">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 110, opacity: 0 }}
            viewport={{ once: false }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, easings: easeIn }}
          >
            <div className="p-3">
              <div className="flex flex-col space-y-3 items-center justify-center">
                <div className="shadow-xl hover:shadow-[#3FBBC0] p-3 w-20 h-20 flex items-center justify-center bg-white rounded-full">
                  <LiaTabletsSolid className="w-10 h-10" color="#3FBBC0" />
                </div>
                <p className="border-b-4 pb-3 text-center border-b-[#3FBBC0]">Dolor Sitema</p>
                <p className="text-center text-black/80">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 110, opacity: 0 }}
            viewport={{ once: false }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, easings: easeIn }}
          >
            <div className="p-3">
              <div className="flex flex-col space-y-3 items-center justify-center">
                <div className="shadow-xl hover:shadow-[#3FBBC0] p-3 w-20 h-20 flex items-center justify-center bg-white rounded-full">
                  <PiDnaFill className="w-10 h-10" color="#3FBBC0" />
                </div>
                <p className="border-b-4 pb-3 text-center border-b-[#3FBBC0]">Sed ut perspiciatis</p>
                <p className="text-center text-black/80">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 110, opacity: 0 }}
            viewport={{ once: false }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, easings: easeIn }}
          >
            <div className="p-3">
              <div className="flex flex-col space-y-3 items-center justify-center">
                <div className="shadow-xl hover:shadow-[#3FBBC0] p-3 w-20 h-20 flex items-center justify-center bg-white rounded-full">
                  <PiPulseFill className="w-10 h-10" color="#3FBBC0" />
                </div>
                <p className="border-b-4 pb-3 text-center border-b-[#3FBBC0]">Magni Dolores</p>
                <p className="text-center text-black/80">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 110, opacity: 0 }}
            viewport={{ once: false }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, easings: easeIn }}
          >
            <div className="p-3">
              <div className="flex flex-col space-y-3 items-center justify-center">
                <div className="shadow-xl hover:shadow-[#3FBBC0] p-3 w-20 h-20 flex items-center justify-center bg-white rounded-full">
                  <FaWheelchair className="w-10 h-10" color="#3FBBC0" />
                </div>
                <p className="border-b-4 pb-3 text-center border-b-[#3FBBC0]">Nemo Enim</p>
                <p className="text-center text-black/80">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 110, opacity: 0 }}
            viewport={{ once: false }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6, easings: easeIn }}
          >
            <div className="p-3">
              <div className="flex flex-col space-y-3 items-center justify-center">
                <div className="shadow-xl hover:shadow-[#3FBBC0] p-3 w-20 h-20 flex items-center justify-center bg-white rounded-full">
                  <GiBrainFreeze className="w-10 h-10" color="#3FBBC0" />
                </div>
                <p className="border-b-4 pb-3 text-center border-b-[#3FBBC0]">Eiusmod Tempor</p>
                <p className="text-center text-black/80 my-4 py-5">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}