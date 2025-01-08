'use client'
import { FaDna, FaEyeDropper, FaHeartbeat, FaTablets } from "react-icons/fa";

export default function Menu() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-[1150px] mx-auto">
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5 gap-10">
          <div className="p-4 rounded-md shadow-lg bg-white">
            <div className="flex flex-col space-y-2">
              <FaHeartbeat className="w-12 h-12" color="#3FBBC0" />
              <span className="font-bold">Lorem Ipsum</span>
              <span>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</span>
            </div>
          </div>
          <div className="p-4 rounded-md shadow-lg bg-white">
            <div className="flex flex-col space-y-2">
              <FaTablets className="w-12 h-12" color="#3FBBC0" />
              <span className="font-bold">Lorem Ipsum</span>
              <span>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</span>
            </div>
          </div>
          <div className="p-4 rounded-md shadow-lg bg-white">
            <div className="flex flex-col space-y-2">
              <FaEyeDropper className="w-12 h-12" color="#3FBBC0" />
              <span className="font-bold">Lorem Ipsum</span>
              <span>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</span>
            </div>
          </div>
          <div className="p-4 rounded-md shadow-lg bg-white">
            <div className="flex flex-col space-y-2">
              <FaDna className="w-12 h-12" color="#3FBBC0" />
              <span className="font-bold">Lorem Ipsum</span>
              <span>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}