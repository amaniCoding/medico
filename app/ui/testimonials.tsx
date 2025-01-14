'use client'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          slidesToScroll: 2,
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
    <section className="p-3 mb-10">
      <div className="max-w-[1150px] mx-auto testimonials">
        <p className="text-3xl font-bold pb-3 text-center uppercase">Testimonials</p>
        <div className="flex items-center justify-center">
          <p className="border-b-[4px] border-b-[#3FBBC0] w-20 text-center"></p>
        </div>
        <p className="my-4 text-center text-[#444444]"> Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas. </p>



        <div className="slider-container">
          <Slider {...settings}>

            <div className="">
              <div className="relative p-6 bg-[#F7FCFC]">
                <p className="italic text-lg text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, omnis sed modi aut eos ab illo totam officiis eum obcaecati necessitatibus reiciendis quod excepturi quos quae autem et similique deserunt.</p>

                <div className="w-48 absolute -bottom-28 left-0 z-20">
                  <Image
                    src={`/tes-1.jpg`}
                    width={80}
                    height={80}

                    alt="Amanuel Ferede Fullstack web developer"
                    className="rounded-full border-4 border-white block"
                  />
                  <p className="font-bold text-xl w-full">Sarah Willson</p>
                  <p className="text-black/50 w-full">Designer</p>
                </div>
              </div>

            </div>
            <div className="md:p-0 p-5">
              <div className="relative p-6 bg-[#F7FCFC]">
                <p className="italic text-lg text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, omnis sed modi aut eos ab illo totam officiis eum obcaecati necessitatibus reiciendis quod excepturi quos quae autem et similique deserunt.</p>

                <div className="w-48 absolute -bottom-28 left-0 z-20">
                  <Image
                    src={`/tes-2.jpg`}
                    width={80}
                    height={80}

                    alt="Amanuel Ferede Fullstack web developer"
                    className="rounded-full border-4 border-white block"
                  />
                  <p className="font-bold text-xl w-full">Sarah Willson</p>
                  <p className="text-black/50 w-full">Designer</p>
                </div>
              </div>

            </div>
            <div className=" md:p-0 p-5">
              <div className="relative p-6 bg-[#F7FCFC]">
                <p className="italic text-lg text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, omnis sed modi aut eos ab illo totam officiis eum obcaecati necessitatibus reiciendis quod excepturi quos quae autem et similique deserunt.</p>

                <div className="w-48 absolute -bottom-28 left-0 z-20">
                  <Image
                    src={`/tes-3.jpg`}
                    width={80}
                    height={80}

                    alt="Amanuel Ferede Fullstack web developer"
                    className="rounded-full border-4 border-white block"
                  />
                  <p className="font-bold text-xl w-full">Sarah Willson</p>
                  <p className="text-black/50 w-full">Designer</p>
                </div>
              </div>

            </div>
            <div className=" md:p-0 p-5">
              <div className="relative p-6 bg-[#F7FCFC]">
                <p className="italic text-lg text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, omnis sed modi aut eos ab illo totam officiis eum obcaecati necessitatibus reiciendis quod excepturi quos quae autem et similique deserunt.</p>

                <div className="w-48 absolute -bottom-28 left-0 z-20">
                  <Image
                    src={`/tes-4.jpg`}
                    width={80}
                    height={80}

                    alt="Amanuel Ferede Fullstack web developer"
                    className="rounded-full border-4 border-white block"
                  />
                  <p className="font-bold text-xl w-full">Sarah Willson</p>
                  <p className="text-black/50 w-full">Designer</p>
                </div>
              </div>

            </div>
            <div className=" md:p-0 p-5">
              <div className="relative p-6 bg-[#F7FCFC]">
                <p className="italic text-lg text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, omnis sed modi aut eos ab illo totam officiis eum obcaecati necessitatibus reiciendis quod excepturi quos quae autem et similique deserunt.</p>

                <div className="w-48 absolute -bottom-28 left-0 z-20">
                  <Image
                    src={`/tes-5.jpg`}
                    width={80}
                    height={80}

                    alt="Amanuel Ferede Fullstack web developer"
                    className="rounded-full border-4 border-white block"
                  />
                  <p className="font-bold text-xl w-full">Sarah Willson</p>
                  <p className="text-black/50 w-full">Designer</p>
                </div>
              </div>

            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}