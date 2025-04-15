'use client'
import { easeIn, motion } from "motion/react"
import Image from "next/image"
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { TiSocialFacebook } from "react-icons/ti"
export default function Doctors() {
  return (
    <section className="p-3 py-16 bg-[#f7fcfc]" id="doctors">
      <div className="max-w-[1150px] mx-auto">
        <motion.div
          initial={{ translateY: 80, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, easings: easeIn }}
        >
          <p className="text-3xl font-bold p-3 text-center uppercase">Doctors</p>
          <div className="flex space-x-3 items-center justify-center">
            <p className="border-b-[4px] border-b-[#3FBBC0] w-20 text-center"></p>
          </div>
          <p className="my-4 text-center py-5">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </motion.div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-7">
          <motion.div
            initial={{ translateY: 110, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, easings: easeIn }}
          >
            <div className="bg-white shadow-lg rounded-lg">
              <div className="w-full relative group">
                <Image
                  src={`/d1.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="Amanuel Ferede Fullstack web developer"
                  className="w-full h-full"
                />
                <div className="absolute bottom-11 opacity-0 group-hover:opacity-100 group-hover:bottom-3 transition-all duration-300 ease-in-out left-0 right-0 flex space-x-3 items-center justify-center bg-transparent">
                  <FaTwitter className="w-9 h-9 cursor-pointer hover:bg-[#3FBBC0] hover:fill-white rounded-md bg-white/70  p-2 transition duration-300 ease-in-out" />
                  <TiSocialFacebook className="w-9 h-9 cursor-pointer hover:bg-[#3FBBC0] hover:fill-white rounded-md bg-white/70  p-2 transition duration-300 ease-in-out" />
                  <FaInstagram className="w-9 h-9 cursor-pointer hover:bg-[#3FBBC0] hover:fill-white rounded-md bg-white/70  p-2 transition duration-300 ease-in-out" />
                  <FaLinkedin className="w-9 h-9 cursor-pointer hover:bg-[#3FBBC0] hover:fill-white rounded-md bg-white/70  p-2 transition duration-300 ease-in-out" />
                </div>
              </div>
              <div className="p-4">
                <p className="font-bold text-lg">Walter White</p>
                <p className="text-gray-500">Chief Medical Officer</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 110, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, easings: easeIn }}
          >
            <div className="bg-white shadow-lg rounded-lg">
              <div className="w-full relative group">
                <Image
                  src={`/d2.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="Amanuel Ferede Fullstack web developer"
                  className="w-full h-full"
                />
                <div className="absolute bottom-11 opacity-0 group-hover:opacity-100 group-hover:bottom-3 transition-all duration-300 ease-in-out left-0 right-0 flex space-x-3 items-center justify-center bg-transparent">
                  <FaTwitter className="w-9 h-9 cursor-pointer hover:bg-[#3FBBC0] hover:fill-white rounded-md bg-white/70  p-2 transition duration-300 ease-in-out" />
                  <TiSocialFacebook className="w-9 h-9 cursor-pointer hover:bg-[#3FBBC0] hover:fill-white rounded-md bg-white/70  p-2 transition duration-300 ease-in-out" />
                  <FaInstagram className="w-9 h-9 cursor-pointer hover:bg-[#3FBBC0] hover:fill-white rounded-md bg-white/70  p-2 transition duration-300 ease-in-out" />
                  <FaLinkedin className="w-9 h-9 cursor-pointer hover:bg-[#3FBBC0] hover:fill-white rounded-md bg-white/70  p-2 transition duration-300 ease-in-out" />
                </div>
              </div>
              <div className="p-4">
                <p className="font-bold text-lg">Sarah Jhonson</p>
                <p className="text-gray-500">Anesthesiologist</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 110, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, easings: easeIn }}
          >
            <div className="bg-white shadow-lg rounded-lg">
              <div className="w-full relative group">
                <Image
                  src={`/d3.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="Amanuel Ferede Fullstack web developer"
                  className="w-full h-full"
                />
                <div className="absolute bottom-11 opacity-0 group-hover:opacity-100 group-hover:bottom-3 transition-all duration-300 ease-in-out left-0 right-0 flex space-x-3 items-center justify-center bg-transparent">
                  <FaTwitter className="w-9 h-9 cursor-pointer hover:bg-[#3FBBC0] hover:fill-white rounded-md bg-white/70  p-2 hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                  <TiSocialFacebook className="w-9 h-9 cursor-pointer hover:bg-[#3FBBC0] hover:fill-white rounded-md bg-white/70  p-2 hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                  <FaInstagram className="w-9 h-9 cursor-pointer hover:bg-[#3FBBC0] hover:fill-white rounded-md bg-white/70  p-2 hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                  <FaLinkedin className="w-9 h-9 cursor-pointer hover:bg-[#3FBBC0] hover:fill-white rounded-md bg-white/70  p-2 hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                </div>
              </div>
              <div className="p-4">
                <p className="font-bold text-lg">William Anderson</p>
                <p className="text-gray-500">Cardiology</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 110, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, easings: easeIn }}
          >
            <div className="bg-white shadow-lg rounded-lg">
              <div className="w-full relative group">
                <Image
                  src={`/d4.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="Amanuel Ferede Fullstack web developer"
                  className="w-full h-full"
                />
                <div className="absolute bottom-11 opacity-0 group-hover:opacity-100 group-hover:bottom-3 transition-all duration-300 ease-in-out left-0 right-0 flex space-x-3 items-center justify-center bg-transparent">
                  <FaTwitter className="w-9 h-9 cursor-pointer hover:bg-[#3FBBC0] hover:fill-white rounded-md bg-white/70  p-2 hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                  <TiSocialFacebook className="w-9 h-9 cursor-pointer hover:bg-[#3FBBC0] hover:fill-white rounded-md bg-white/70  p-2 hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                  <FaInstagram className="w-9 h-9 cursor-pointer hover:bg-[#3FBBC0] hover:fill-white rounded-md bg-white/70  p-2 hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                  <FaLinkedin className="w-9 h-9 cursor-pointer hover:bg-[#3FBBC0] hover:fill-white rounded-md bg-white/70  p-2 hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                </div>
              </div>
              <div className="p-4">
                <p className="font-bold text-lg">Amanda Jepson</p>
                <p className="text-gray-500">Neurosurgeon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}