'use client'
import { FaUserDoctor } from "react-icons/fa6";
import { IoFlask } from "react-icons/io5";
import { TbBuildingHospital } from "react-icons/tb";
import { TfiCup } from "react-icons/tfi";

export default function Counter() {
  return (
    <section className="py-6">
      <div className="max-w-[1150px] mx-auto">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-"
        >
          <div className="p-6 rounded-lg bg-white shadow-xl">
            <div className="flex space-x-3 mb-5">
            <FaUserDoctor  className="w-10 h-10" color="#3FBBC0" />
            <span className="text-4xl font-bold">85</span>
            </div>
            <p><span className="font-bold">Doctors</span><span>consequuntur quae qui deca rode</span></p>
            <p>Read More<span className="font-bold"> &raquo;</span></p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-xl">
            <div className="flex space-x-3 mb-5">
            <TbBuildingHospital   className="w-10 h-10" color="#3FBBC0" />
            <span className="text-4xl font-bold">18</span>
            </div>
            <p><span className="font-bold">Departments </span><span>consequuntur quae qui deca rode</span></p>
            <p>Read More<span className="font-bold"> &raquo;</span></p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-xl">
            <div className="flex space-x-3 mb-5">
            <IoFlask   className="w-10 h-10" color="#3FBBC0" />
            <span className="text-4xl font-bold">8</span>
            </div>
            <p><span className="font-bold">Research Lab </span><span>consequuntur quae qui deca rode</span></p>
            <p>Read More<span className="font-bold"> &raquo;</span></p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-xl">
            <div className="flex space-x-3 mb-5">
            <TfiCup   className="w-10 h-10" color="#3FBBC0" />
            <span className="text-4xl font-bold">150</span>
            </div>
            <p><span className="font-bold">Awards  </span><span>consequuntur quae qui deca rode</span></p>
            <p>Read More<span className="font-bold"> &raquo;</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}