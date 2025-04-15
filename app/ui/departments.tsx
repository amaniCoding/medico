'use client'
import Image from "next/image"
import { departments } from "../libs/placeholder-data"
import { useEffect, useRef, useState } from "react"
import styles from '../custome-styles/side-bar.module.css'
import { Department } from "../types/types"
import { easeIn } from "motion"
import { motion } from "motion/react"

export default function Departments() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [department, setDepartment] = useState<Department[]>(departments)
  const opacity = useRef<HTMLDivElement>(null);

  const handelClick = (i: number) => {
    setActiveIndex(i);
    console.log(i);
  }

  useEffect(() => {
    opacity.current?.classList.add(styles.myAnimation);
    opacity.current?.addEventListener("animationend", () => {
      opacity.current?.classList.remove(styles.myAnimation);
    });
    opacity.current?.classList.add(styles.myAnimation);

    return () => opacity.current?.removeEventListener("animationend", () => {
      opacity.current?.classList.remove(styles.myAnimation);
    })
  }, [activeIndex])
  return (
    <section className="p-3 py-16" id="departments">
      <div className="max-w-[1150px] mx-auto">
        <motion.div
          initial={{ translateY: 80, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, easings: easeIn }}
        >
          <p className="text-3xl font-bold pb-3 text-center uppercase">Departments</p>
          <div className="flex items-center justify-center">
            <p className="border-b-[4px] border-b-[#3FBBC0] w-20 text-center"></p>
          </div>
          <p className="my-4 py-5 text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </motion.div>
        <motion.div
          initial={{ translateY: 110, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, easings: easeIn }}
        >
          <div className="grid grid-cols-12 gap-4">
            <div className="md:col-span-5 col-span-12">
              <div className="p-2">
                {
                  department.map((el, i) => {
                    return (
                      <div className={`felx flex-col space-y-2 ${activeIndex !== i ? 'border-l-4 border-l-white hover:border-l-gray-300' : ''} hover:bg-slate-50 group cursor-pointer p-3 ${activeIndex === i ? 'bg-[#d1eeef] border-l-4 border-l-[#3FBBC0]' : ''}`} key={i} onClick={() => { handelClick(i) }}>
                        <p className={`font-bold text-lg text-[#495057] group-hover:text-[#3FBBC0] ${activeIndex === i ? 'text-[#3FBBC0]' : 'text-black'} `}>{el.name}</p>
                        <p>{el.subName}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="md:col-span-7 col-span-12">
              <div className="p-2">
                {
                  <div ref={opacity}>
                    <div className="felx flex-col space-y-2">
                      <p className="font-bold text-lg text-[#3FBBC0]">{department[activeIndex].name}</p>
                      <div className="grid grid-cols-12 gap-3">
                        <div className="md:col-span-5 col-span-12">
                          <Image
                            src={`/${department[activeIndex].subCat.photo}`}
                            width={0}
                            height={0}
                            sizes="100vh"
                            alt="Amanuel Ferede Fullstack web developer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:col-span-7 col-span-12">
                          <p className="italic text-[#777777] text-lg">{department[activeIndex].subCat.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}