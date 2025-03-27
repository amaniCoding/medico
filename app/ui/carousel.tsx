'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Caroucel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="galllery">
      <Slider {...settings}>
        <div className=" bg-no-repeat bg-cover bg-center h-screen bg-[url('/s1.jpg')]">
          <div className="flex items-center justify-center w-full h-full ">
            <div className="lg:w-1/2 w-full lg:px-0 px-3">
              <div className="w-full bg-white/65 border-t-4 border-t-[#3FBBC0] flex flex-col space-y-3 items-center p-5">
                <p className="text-3xl font-bold text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="text-center">Iusto eum quae facilis tempora nulla consequatur corporis distinctio.</p>
                <button className="block py-2 px-7 text-center bg-[#3FBBC0] text-white rounded-lg">Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-no-repeat bg-cover bg-center h-screen bg-[url('/s2.jpg')]">
          <div className="flex items-center justify-center w-full h-full ">
            <div className="lg:w-1/2 w-full lg:px-0 px-3">
              <div className="w-full bg-white/65 border-t-4 border-t-[#3FBBC0] flex flex-col space-y-3 items-center p-5">
                <p className="text-3xl font-bold text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="text-center">Iusto eum quae facilis tempora nulla consequatur corporis distinctio.</p>
                <button className="block py-2 px-7 text-center bg-[#3FBBC0] text-white rounded-lg">Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-no-repeat bg-cover bg-center h-screen bg-[url('/s3.jpg')]">
          <div className="flex items-center justify-center w-full h-full ">
            <div className="lg:w-1/2 w-full lg:px-0 px-3">
              <div className="w-full bg-white/65 border-t-4 border-t-[#3FBBC0] flex flex-col space-y-3 items-center p-5">
                <p className="text-3xl font-bold text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="text-center">Iusto eum quae facilis tempora nulla consequatur corporis distinctio.</p>
                <button className="block py-2 px-7 text-center bg-[#3FBBC0] text-white rounded-lg">Read More</button>
              </div>
            </div>
          </div>
        </div>




      </Slider>
    </section>
  )
}