'use client'
import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="p-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between space-x-3">
          <div className="flex items-center space-x-2">
            <Image src={`/logo.png`}
            width={160}
            height={160}
            alt="Medico developed by Amanuel Ferede"
            className="rounded-full"
            />
            <span className="font-bold text-white">MEDICIO</span>
          </div>
          <div className="md:flex items-center space-x-6 hidden">
            <Link className="font-semibold text-gray-400 text-sm"
            href={`/`}
            >Home</Link>
             <Link className="font-semibold text-gray-400 text-sm"
            href={`/`}
            >ABOUT</Link>
             <Link className="font-semibold text-gray-400 text-sm"
            href={`/`}
            >SERVICES</Link>
             <Link className="font-semibold text-gray-400 text-sm"
            href={`/`}
            >DEPARTMENTS</Link>
             <Link className="font-semibold text-gray-400 text-sm"
            href={`/`}
            >DOCTORS</Link>
             <Link className="font-semibold text-gray-400 text-sm"
            href={`/`}
            >CONTACT</Link>
            <button className="py-2 px-3 text-center bg-[#3FBBC0] text-white">Make an apointment</button>
          </div>
        </div>
      </div>
    </nav>
  )
}