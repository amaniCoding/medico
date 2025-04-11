'use client'
import { easeIn, motion } from "motion/react";
import CountUp from "react-countup";
import { FaUserDoctor } from "react-icons/fa6";
import { IoFlask } from "react-icons/io5";
import { TbBuildingHospital } from "react-icons/tb";
import { TfiCup } from "react-icons/tfi";

export default function Counter() {
  return (
    <section className="py-14 p-3">
      <div className="max-w-[1150px] mx-auto">
        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          viewport={{ once: false }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, easings: easeIn }}
        >
          <div className="grid md:grid-cols-4 grid-cols-1 gap-6"
          >
            <div className="p-6 bg-white shadow-lg py-11">
              <div className="flex space-x-3 items-center">
                <FaUserDoctor className="w-16 h-16" color="#3FBBC0" />
                <div className="flex flex-col space-y-2">
                  <CountUp enableScrollSpy duration={10} end={85} className="text-3xl font-semibold" />
                  <p className="font-bold">Doctors</p>
                </div>
              </div>

            </div>
            <div className="p-6 bg-white shadow-lg py-11">
              <div className="flex space-x-3 items-center">
                <TbBuildingHospital className="w-16 h-16" color="#3FBBC0" />
                <div className="flex flex-col space-y-2">
                  <CountUp enableScrollSpy duration={10} end={18} className="text-3xl font-semibold"/>
                  <p className="font-bold">Departments</p>
                </div>
              </div>

            </div>
            <div className="p-6 bg-white shadow-lg py-11">
              <div className="flex space-x-3 items-center">
                <IoFlask className="w-16 h-16" color="#3FBBC0" />
                <div className="flex flex-col space-y-2">
                  <CountUp enableScrollSpy duration={10} end={8} className="text-3xl font-semibold" />
                  <p className="font-bold">Research Lab</p>
                </div>
              </div>

            </div>
            <div className="p-6 bg-white shadow-lg py-11">
              <div className="flex space-x-3 items-center">
                <TfiCup className="w-16 h-16" color="#3FBBC0" />
                <div className="flex flex-col space-y-2">
                  <CountUp enableScrollSpy duration={10} end={150} className="text-3xl font-semibold" />
                  <p className="font-bold">Awards</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}