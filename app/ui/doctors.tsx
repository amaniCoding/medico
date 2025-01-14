'use client'
import Image from "next/image"
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { TiSocialFacebook } from "react-icons/ti"
export default function Doctors() {
  return (
    <section className="p-3 bg-[#f7fcfc]">
      <div className="max-w-[1150px] mx-auto">
      <p className="text-3xl font-bold p-3 text-center uppercase">Doctors</p>
        <div className="flex items-center justify-center">
          <p className="border-b-[4px] border-b-[#3FBBC0] w-20 text-center"></p>
        </div>
        <p className="my-4 text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-7">
          <div className="">
            <div className="w-full relative group">
              <Image
                src={`/d1.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="Amanuel Ferede Fullstack web developer"
                className="w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center space-x-6 justify-center py-2 px-7 bg-transparent group-hover:bg-white/85 opacity-0 group-hover:opacity-100">
                <FaTwitter className="w-6 h-6 stroke-black hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                <TiSocialFacebook className="w-6 h-6 stroke-black hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                <FaInstagram className="w-6 h-6 stroke-black hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                <FaLinkedin className="w-6 h-6 stroke-black hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
              </div>
            </div>
            <div className="p-4">
              <p className="font-bold text-lg text-center">Walter White</p>
              <p className="text-center text-gray-500">Chief Medical Officer</p>
            </div>
          </div>
          <div className="">
            <div className="w-full relative group">
              <Image
                src={`/d2.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="Amanuel Ferede Fullstack web developer"
                className="w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center space-x-6 justify-center py-2 px-7 bg-transparent group-hover:bg-white/85 opacity-0 group-hover:opacity-100">
                <FaTwitter className="w-6 h-6 stroke-black hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                <TiSocialFacebook className="w-6 h-6 stroke-black hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                <FaInstagram className="w-6 h-6 stroke-black hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                <FaLinkedin className="w-6 h-6 stroke-black hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
              </div>
            </div>
            <div className="p-4">
              <p className="font-bold text-lg text-center">Sarah Jhonson</p>
              <p className="text-center text-gray-500">Anesthesiologist</p>
            </div>
          </div>
          <div className="">
            <div className="w-full relative group">
              <Image
                src={`/d3.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="Amanuel Ferede Fullstack web developer"
                className="w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center space-x-6 justify-center py-2 px-7 bg-transparent group-hover:bg-white/85 opacity-0 group-hover:opacity-100">
                <FaTwitter className="w-6 h-6 stroke-black hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                <TiSocialFacebook className="w-6 h-6 stroke-black hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                <FaInstagram className="w-6 h-6 stroke-black hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                <FaLinkedin className="w-6 h-6 stroke-black hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
              </div>
            </div>
            <div className="p-4">
              <p className="font-bold text-lg text-center">William Anderson</p>
              <p className="text-center text-gray-500">Cardiology</p>
            </div>
          </div>
          <div className="">
            <div className="w-full relative group">
              <Image
                src={`/d4.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="Amanuel Ferede Fullstack web developer"
                className="w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center space-x-6 justify-center py-2 px-7 bg-transparent group-hover:bg-white/85 opacity-0 group-hover:opacity-100">
                <FaTwitter className="w-6 h-6 stroke-black hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                <TiSocialFacebook className="w-6 h-6 stroke-black hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                <FaInstagram className="w-6 h-6 stroke-black hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
                <FaLinkedin className="w-6 h-6 stroke-black hover:stroke-[#3FBBC0] transition duration-300 ease-in-out" />
              </div>
            </div>
            <div className="p-4">
              <p className="font-bold text-lg text-center">Amanda Jepson</p>
              <p className="text-center text-gray-500">Neurosurgeon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}