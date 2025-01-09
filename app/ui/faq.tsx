'use client'
import { faqs } from '@/app/libs/placeholder-data'
import { useState } from "react"
import { Faq } from '../types/types';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';


export default function FAQ() {
  const [faq, setfaq] = useState<Faq[]>(faqs);
  const [currentIndexNumber, setCurrentIndexNumber] = useState<number | null>(null);
  const [showCollapse, setShowCollapse] = useState<boolean>(false);
  const handelClick = (indexNumber: number) => {
    setCurrentIndexNumber(indexNumber);
    setShowCollapse(!showCollapse);
  }
  return (
    <section className="p-6 bg-[#f7fcfc]">
      <div className="max-w-[1150px] mx-auto testimonials">
        <p className="text-3xl font-bold pb-3 text-center uppercase">Frequently Asked Questioins</p>
        <div className="flex items-center justify-center">
          <p className="border-b-[4px] border-b-[#3FBBC0] w-20 text-center"></p>
        </div>
        <p className="my-4 text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

        <div>
          {
            faq.map((el, i) => {
              return (
                <div key={i} className='flex flex-col '>
                  <div className='flex space-x-0 items-center cursor-pointer group mt-7' onClick={() => {handelClick(i)}}>
                    
                    {
                      currentIndexNumber === i ? showCollapse === true ? <MdKeyboardArrowUp className='w-7 h-7 group-hover:text-[#3fbbc0]' /> : <MdKeyboardArrowDown className='w-7 h-7 group-hover:text-[#3fbbc0]' /> : <MdKeyboardArrowDown className='w-7 h-7 group-hover:text-[#3fbbc0]' />
                    }
                    <p className='w-full text-[#343A40] group-hover:text-[#3fbbc0] text-lg'>{el.menu}</p>
                    
                  </div>
                  <div className={`ml-10 transition-all duration-300 ease-in-out overflow-hidden ${currentIndexNumber === i && showCollapse === true ?'h-14' : 'h-0' }`}>
                    <p className='text-[#444444] mt-2'>{el.subMenu}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}