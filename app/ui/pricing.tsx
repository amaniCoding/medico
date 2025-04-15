'use client'

import { easeIn, motion } from "motion/react"

export default function Pricing() {
  return (
    <section className="py-16 p-3">
      <div className="max-w-[1150px] mx-auto testimonials">
        <motion.div
          initial={{ translateY: 80, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, easings: easeIn }}
        >
          <p className="text-3xl font-bold pb-3 text-center uppercase">Pricing</p>
          <div className="flex items-center justify-center">
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
            <div className="rounded-xl shadow-lg">
              <div className="bg-[#F8F8F8] py-4">
                <p className="text-center">Free</p>
              </div>
              <div className="py-4">
                <p className="mb-4 text-center"> <sup className="text-lg font-bold text-[#3FBBC0]">$</sup><span className="font-bold text-4xl text-[#3FBBC0]">0</span> <span className="text-[#BABABA] text-lg">/ month</span></p>
                <p className="mb-4 text-center">Aida dere</p>
                <p className="mb-4 text-center">Nec feugiat nisl</p>
                <p className="mb-4 text-center">Nulla at volutpat dola</p>
                <p className="mb-4 text-center">Pharetra massa</p>
                <p className="mb-4 text-center line-through text-[#cccccc]">Massa ultricies mi</p>
              </div>
              <div className="h-[75] p-3 bg-[#F8F8F8] flex items-center justify-center">
                <button className="px-8 py-2 font-bold bg bg-[#3FBBC0] text-center text-white rounded-md">Buy Now</button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 110, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, easings: easeIn }}
          >
            <div className="rounded-xl shadow-lg">
              <div className="bg-[#F8F8F8] py-4">
                <p className="text-center">Business</p>
              </div>
              <div className="py-4">
                <p className="mb-4 text-center"> <sup className="text-lg font-bold text-[#3FBBC0]">$</sup><span className="font-bold text-4xl text-[#3FBBC0]">19</span> <span className="text-[#BABABA] text-lg">/ month</span></p>
                <p className="mb-4 text-center">Aida dere</p>
                <p className="mb-4 text-center">Nec feugiat nisl</p>
                <p className="mb-4 text-center">Nulla at volutpat dola</p>
                <p className="mb-4 text-center">Pharetra massa</p>
                <p className="mb-4 text-center line-through text-[#cccccc]">Massa ultricies mi</p>
              </div>
              <div className="h-[75] p-3 bg-[#F8F8F8] flex items-center justify-center">
                <button className="px-8 py-2 font-bold bg bg-[#3FBBC0] text-center text-white rounded-md">Buy Now</button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 110, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, easings: easeIn }}
          >
            <div className="rounded-xl shadow-lg">
              <div className="bg-[#3FBBC0] py-4">
                <p className="text-center text-white">Developer</p>
              </div>
              <div className="py-4">
                <p className="mb-4 text-center"> <sup className="text-lg font-bold text-[#3FBBC0]">$</sup><span className="font-bold text-4xl text-[#3FBBC0]">29</span> <span className="text-[#BABABA] text-lg">/ month</span></p>
                <p className="mb-4 text-center">Aida dere</p>
                <p className="mb-4 text-center">Nec feugiat nisl</p>
                <p className="mb-4 text-center">Nulla at volutpat dola</p>
                <p className="mb-4 text-center">Pharetra massa</p>
                <p className="mb-4 text-center line-through text-[#cccccc]">Massa ultricies mi</p>
              </div>
              <div className="h-[75] p-3 bg-[#F8F8F8] flex items-center justify-center">
                <button className="px-8 py-2 font-bold bg bg-[#3FBBC0] text-center text-white rounded-md">Buy Now</button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 110, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, easings: easeIn }}
          >
            <div className="rounded-xl shadow-lg">
              <div className="bg-[#F8F8F8] py-4">
                <p className="text-center">Ultimate</p>
              </div>
              <div className="py-4">
                <p className="mb-4 text-center"> <sup className="text-lg font-bold text-[#3FBBC0]">$</sup><span className="font-bold text-4xl text-[#3FBBC0]">49</span> <span className="text-[#BABABA] text-lg">/ month</span></p>
                <p className="mb-4 text-center">Aida dere</p>
                <p className="mb-4 text-center">Nec feugiat nisl</p>
                <p className="mb-4 text-center">Nulla at volutpat dola</p>
                <p className="mb-4 text-center">Pharetra massa</p>
                <p className="mb-4 text-center line-through text-[#cccccc]">Massa ultricies mi</p>
              </div>
              <div className="h-[75] p-3 bg-[#F8F8F8] flex items-center justify-center">
                <button className="px-8 py-2 font-bold bg bg-[#3FBBC0] text-center text-white rounded-md">Buy Now</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}