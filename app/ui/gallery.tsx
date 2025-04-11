'use client'
import Image from "next/image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { easeIn, motion } from "motion/react";
export default function Gallery() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };
  return (
    <section className="py-16 p-3 galllery">
      <div className="max-w-[1150px] mx-auto">
        <motion.div
          initial={{ translateY: 80, opacity: 0 }}
          viewport={{ once: false }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, easings: easeIn }}
        >
          <p className="text-3xl font-bold pb-3 text-center uppercase">Gallery</p>
          <div className="flex items-center justify-center">
            <p className="border-b-[4px] border-b-[#3FBBC0] w-20 text-center"></p>
          </div>
          <p className="my-4 text-center p-6">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </motion.div>
      </div>
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ translateY: 110, opacity: 0 }}
          viewport={{ once: false }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, easings: easeIn }}
        >
          <Slider {...settings}>
            <div>
              <Image
                src={`/ga1.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="Amanuel Ferede Fullstack web developer"
                className="w-full h-full"
              />
            </div>
            <div>
              <Image
                src={`/ga2.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="Amanuel Ferede Fullstack web developer"
                className="w-full h-full"
              />
            </div>
            <div>
              <Image
                src={`/ga3.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="Amanuel Ferede Fullstack web developer"
                className="w-full h-full"
              />
            </div>
            <div>
              <Image
                src={`/ga4.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="Amanuel Ferede Fullstack web developer"
                className="w-full h-full"
              />
            </div>
            <div>
              <Image
                src={`/ga5.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="Amanuel Ferede Fullstack web developer"
                className="w-full h-full"
              />
            </div>
            <div>
              <Image
                src={`/ga6.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="Amanuel Ferede Fullstack web developer"
                className="w-full h-full"
              />
            </div>
            <div>
              <Image
                src={`/ga7.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="Amanuel Ferede Fullstack web developer"
                className="w-full h-full"
              />
            </div>
            <div>
              <Image
                src={`/ga8.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="Amanuel Ferede Fullstack web developer"
                className="w-full h-full"
              />
            </div>
          </Slider>
        </motion.div>
      </div>
    </section>
  )
}