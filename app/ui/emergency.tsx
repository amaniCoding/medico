'use client'

import { easeIn, motion } from "motion/react"

export default function Emergency() {
  return (
    <section className="bg-[#3FBBC0] py-20 p-3">
      <div className="max-w-screen-lg mx-auto">
      <motion.div
            initial={{ scale: 0, opacity: 0 }}
            viewport={{ once: false }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, easings: easeIn }}
          >
        <div className="flex flex-col space-y-2 items-center justify-center">
          <p className="font-bold text-2xl text-center text-white">In an emergency? Need help now?</p>
          <p className="text-center text-white text-lg">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="py-2 px-3 w-72 text-center rounded-2xl border-2 border-white text-white hover:bg-white hover:text-[#3FBBC0] transition duration-300 ease-in-out">Make An Appointment</button>
        </div>
        </motion.div>
      </div>
    </section>
  )
}