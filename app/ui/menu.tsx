'use client'
import { animate, easeIn, easeInOut } from "motion";
import { motion } from "motion/react";
import { FaDna, FaEyeDropper, FaHeartbeat, FaTablets } from "react-icons/fa";

export default function Menu() {
  return (
    <section className="bg-gray-50 py-16 p-3">
      <div className="max-w-[1150px] mx-auto">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
          <motion.div
            initial={{ translateY: 80, opacity: 0 }}
            viewport={{ once: false }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, easings: easeIn }}
          >
            <div className="group p-8 py-16 rounded-md shadow-lg bg-white relative before:absolute before:content-[' '] before:top-full before:bottom-0 before:left-0 before:right-0 before:bg-[#d9f1f2] hover:before:top-0 before:transition-all before:duration-200 before:ease-in-out hover:before:bg-[#3fbbc0] before:-z-10 z-10 before:rounded-md"
            >
              <div className=""></div>
              <div className="flex flex-col space-y-2">
                <FaHeartbeat className=" w-12 h-12 group-hover:fill-white" color="#3FBBC0" />
                <span className="font-bold group-hover:text-white">Lorem Ipsum</span>
                <span className="group-hover:text-white">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ translateY: 80, opacity: 0 }}
            viewport={{ once: false }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, easings: easeIn }}
          >
            <div className="group p-8 py-16 rounded-md shadow-lg bg-white relative before:absolute before:content-[' '] before:top-full before:bottom-0 before:left-0 before:right-0 before:bg-[#d9f1f2] hover:before:top-0 before:transition-all before:duration-200 before:ease-in-out hover:before:bg-[#3fbbc0] before:-z-10 z-10 before:rounded-md"
            >
              <div className="absolute top-full -z-10 bottom-0 left-0 right-0 bg-[#3fbbc0] group-hover:hover:top-0"></div>
              <div className="flex flex-col space-y-2">
                <FaTablets className="w-12 h-12 group-hover:fill-white" color="#3FBBC0" />
                <span className="font-bold group-hover:text-white">Lorem Ipsum</span>
                <span className="group-hover:text-white">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ translateY: 80, opacity: 0 }}
            viewport={{ once: false }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, easings: easeIn }}
          >
            <div className="group p-8 py-16 rounded-md shadow-lg bg-white relative before:absolute before:content-[' '] before:top-full before:bottom-0 before:left-0 before:right-0 before:bg-[#d9f1f2] hover:before:top-0 before:transition-all before:duration-200 before:ease-in-out hover:before:bg-[#3fbbc0] before:-z-10 z-10 before:rounded-md"
            >
              <div className="absolute top-full -z-10 bottom-0 left-0 right-0 bg-[#3fbbc0] group-hover:hover:top-0"></div>
              <div className="flex flex-col space-y-2">
                <FaEyeDropper className="w-12 h-12 group-hover:fill-white" color="#3FBBC0" />
                <span className="font-bold group-hover:text-white">Lorem Ipsum</span>
                <span className="group-hover:text-white">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 80, opacity: 0 }}
            viewport={{ once: false }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, easings: easeIn }}
          >
            <div className="group p-8 py-16 rounded-md shadow-lg bg-white relative before:absolute before:content-[' '] before:top-full before:bottom-0 before:left-0 before:right-0 before:bg-[#d9f1f2] hover:before:top-0 before:transition-all before:duration-200 before:ease-in-out hover:before:bg-[#3fbbc0] before:-z-10 z-10 before:rounded-md"
            >
              <div className="absolute top-full -z-10 bottom-0 left-0 right-0 bg-[#3fbbc0] group-hover:hover:top-0"></div>
              <div className="flex flex-col space-y-2">
                <FaDna className="w-12 h-12 group-hover:fill-white" color="#3FBBC0" />
                <span className="font-bold group-hover:text-white">Lorem Ipsum</span>
                <span className="group-hover:text-white">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}