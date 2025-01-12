'use client'
import Image from "next/image"
import { FaRegCheckCircle } from "react-icons/fa"
export default function AboutUs() {
  return (
    <section className="p-3">
      <div className="max-w-[1150px] mx-auto">
        <p className="text-3xl font-bold pb-3 text-center uppercase">About Us</p>
        <div className="flex items-center justify-center">
          <p className="border-b-[4px] border-b-[#3FBBC0] w-20 text-center"></p>
        </div>
        <p className="mt-3">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <div className="grid grid-cols-12 gap-3">
          <div className="md:col-span-6 col-span-12">
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
          </div>
          <div className="md:col-span-6 col-span-12">
            <div className="p-5">
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
          </div>
        </div>
      </div>
    </section>
  )
}