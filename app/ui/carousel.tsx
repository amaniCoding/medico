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
        <div className="flex items-center justify-center bg-no-repeat bg-center h-screen bg-[url('/s1.jpg')] content-center">
          <div className="max-w-screen-lg bg-white/95 md:mx-auto mx-10 border-t-4 border-t-[#3FBBC0] p-5 content-center">
            <div className="w-full flex flex-col space-y-3 items-center p-5">
              <p className="text-3xl font-bold text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p className="text-center">Iusto eum quae facilis tempora nulla consequatur corporis distinctio, quis rem mollitia earum dolores similique, nesciunt repudiandae velit iure cumque, repellendus architecto.</p>
              <button className="block py-2 px-7 text-center bg-[#3FBBC0] text-white rounded-lg">Read More</button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-no-repeat bg-center h-screen bg-[url('/s2.jpg')] content-center">
          <div className="max-w-screen-lg bg-white/95 mx-auto border-t-4 border-t-[#3FBBC0] p-5 content-center">
            <div className="w-full flex flex-col space-y-3 items-center p-5">
              <p className="text-3xl font-bold text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p className="text-center">Iusto eum quae facilis tempora nulla consequatur corporis distinctio, quis rem mollitia earum dolores similique, nesciunt repudiandae velit iure cumque, repellendus architecto.</p>
              <button className="block py-2 px-7 text-center bg-[#3FBBC0] text-white rounded-lg">Read More</button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-no-repeat bg-center h-screen bg-[url('/s3.jpg')] content-center">
          <div className="max-w-screen-lg bg-white/95 mx-auto border-t-4 border-t-[#3FBBC0] p-5 content-center">
            <div className="w-full flex flex-col space-y-3 items-center p-5">
              <p className="text-3xl font-bold text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p className="text-center">Iusto eum quae facilis tempora nulla consequatur corporis distinctio, quis rem mollitia earum dolores similique, nesciunt repudiandae velit iure cumque, repellendus architecto.</p>
              <button className="block py-2 px-7 text-center bg-[#3FBBC0] text-white rounded-lg">Read More</button>
            </div>
          </div>
        </div>

      </Slider>
    </section>
  )
}