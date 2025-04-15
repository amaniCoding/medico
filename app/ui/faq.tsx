'use client'
import { faqs } from '@/app/libs/placeholder-data'
import { useState } from "react"
import { Faq } from '../types/types';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { easeIn, motion } from 'motion/react';


export default function FAQ() {
  const [faq, setfaq] = useState<Faq[]>(faqs);

  const handelClick = (indexNumber: number) => {
    const newFaqs = faq.map((el, i) => {
      if(indexNumber === i) {
        return {...el, isCollapsed: !el.isCollapsed};
      } else {
        return el;
      }
    });
    setfaq(newFaqs);
  }
  return (
    <section className="p-3 py-16 bg-[#f7fcfc]">
      <div className="max-w-[1000px] mx-auto testimonials">
        <motion.div
          initial={{ translateY: 80, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, easings: easeIn }}
        >
          <p className="text-3xl font-bold pb-3 text-center uppercase">Frequently Asked Questioins</p>
          <div className="flex items-center justify-center">
            <p className="border-b-[4px] border-b-[#3FBBC0] w-20 text-center"></p>
          </div>
          <p className="my-4 text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </motion.div>
        <motion.div
          initial={{ translateY: 110, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, easings: easeIn }}
        >
          <div>
            {
              faq.map((el, i) => {
                return (
                  <div key={i} className={`bg-white py-5 px-4 my-4 border rounded-lg border-gray-200 ${el.isCollapsed ? 'border border-[#3fbbc0]' : 'border-none border-transparent'}`}>
                    <div className='flex items-center justify-between cursor-pointer group' onClick={() => { handelClick(i) }}>

                      
                      <p className={` group-hover:text-[#3fbbc0] ${el.isCollapsed ? 'text-[#3fbbc0]' : 'text-[#343A40]'}`}>{el.menu}</p>
                      {
                        el.isCollapsed ? <MdKeyboardArrowRight className='w-7 h-7 group-hover:text-[#3fbbc0] rotate-90 transition-all duration-300 ease-in-out' /> : <MdKeyboardArrowRight className='w-7 h-7 group-hover:text-[#3fbbc0] rotate-0 transition-all duration-300 ease-in-out' />
                      }
                    </div>
                    <p className={`transition-all overflow-y-hidden duration-300 ease-in-out  ${el.isCollapsed ? 'h-20 opacity-100' : 'h-0 opacity-0'}`}>{el.subMenu}</p>
                    
                  </div>
                )
              })
            }
          </div>
        </motion.div>
      </div>
    </section>
  )
}