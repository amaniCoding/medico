'use client'
import { easeIn, motion } from "motion/react"
import Image from "next/image"
import { FaRegCheckCircle } from "react-icons/fa"
export default function AboutUs() {
  return (
    <section className="p-3 py-16" id="about">
      <div className="max-w-[1150px] mx-auto">
        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          viewport={{ once: false }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, easings: easeIn }}
        >
          <p className="text-3xl font-bold pb-3 text-center uppercase">About Us</p>
          <div className="flex items-center justify-center">
            <p className="border-b-[4px] border-b-[#3FBBC0] w-20 my-2 text-center"></p>
          </div>
          <p className="my-3 text-center mb-14">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </motion.div>
        <div className="grid grid-cols-12 gap-6">
          <div className="md:col-span-6 col-span-12">
            <motion.div
              initial={{ translateY: 100, opacity: 0 }}
              viewport={{ once: false }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, easings: easeIn }}
            >
              <div className="p-1">
                <Image
                  alt="Medico developed by Amanuel Ferede in Next.js"
                  src={`/seldom.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
          <div className="md:col-span-6 col-span-12">
            <motion.div
              initial={{ translateY: 100, opacity: 0 }}
              viewport={{ once: false }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, easings: easeIn }}
            >
              <div className="">
                <p className="text-xl font-bold my-2">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</p>
                <p className="italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <div className="flex space-x-2 mb-2">
                  <FaRegCheckCircle className="w-6 h-6" color="#3FBBC0" />
                  <span className="w-full">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </div>
                <div className="flex space-x-2 mb-2">
                  <FaRegCheckCircle className="w-6 h-6" color="#3FBBC0" />
                  <span className="w-full">Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                </div>
                <div className="flex space-x-2 mb-2">
                  <FaRegCheckCircle className="w-6 h-6" color="#3FBBC0" />
                  <span className="w-full">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span>
                </div>
                <p className="my-3">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}