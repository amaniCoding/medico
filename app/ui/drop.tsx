'use client'
import { easeIn, motion } from "motion/react"
import Image from "next/image"
import { FiShield } from "react-icons/fi"
import { GrCube } from "react-icons/gr"
import { LuNewspaper } from "react-icons/lu"
import { TfiGallery } from "react-icons/tfi"

export default function Drop() {
  return (
    <section className="py-6">
      <div className="max-w-[1150px] mx-auto">
        <div className="grid grid-cols-12 gap-3">
          <div className="md:col-span-6 col-span-12 order-last">
            <div className="p-4">
              <motion.div
                initial={{ translateY: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.5, easings: easeIn }}
              >
                <div className="flex space-x-4 my-10">
                  <LuNewspaper className="w-12 h-12" color="#3FBBC0" />
                  <div className="flex flex-col space-y-2">
                    <span className="font-bold text-lg">Est labore ad</span>
                    <span className="text-[#848484]">Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ translateY: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1, easings: easeIn }}
              >
                <div className="flex space-x-4 my-10">
                  <GrCube className="w-12 h-12" color="#3FBBC0" />
                  <div className="flex flex-col space-y-2">
                    <span className="font-bold text-lg">Harum esse qui</span>
                    <span className="text-[#848484]">Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ translateY: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, easings: easeIn }}
              >
                <div className="flex space-x-4 my-10">
                  <TfiGallery className="w-12 h-12" color="#3FBBC0" />
                  <div className="flex flex-col space-y-2">
                    <span className="font-bold text-lg">Aut occaecati</span>
                    <span className="text-[#848484]">Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ translateY: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3, easings: easeIn }}
              >
                <div className="flex space-x-4 my-10">
                  <FiShield className="w-12 h-12" color="#3FBBC0" />
                  <div className="flex flex-col space-y-2">
                    <span className="font-bold text-lg">Beatae veritatis</span>
                    <span className="text-[#848484]">Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12">
            <div>
              <motion.div
                initial={{ translateY: 130, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.5, easings: easeIn }}
              >
                <Image
                  src={`/lab.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="Amanuel Ferede Fullstack web developer"
                  className="w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}