import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { SwiperFoto } from "../../../../assets";
import { Star, StarHelf } from "../../../../components";

const testimonials = [
  {
    name: "Carla Sammontes-Diego",
    date: "12.09.2021",
    text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
    img: SwiperFoto
  },
  {
    name: "Carla Sammontes-Diego",
    date: "12.09.2021",
    img: SwiperFoto,
    text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
  },
  {
    name: "Carla Sammontes-Diego",
    date: "12.09.2021",
    img: SwiperFoto,
    text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
  },
];



export default function TestimonialSwiper() {
  return (
    <div className="w-full py-16 mb-22.5">
      <h2 className="text-2xl font-semibold text-center mb-10">
        What our clients say
      </h2>

      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        centeredSlides
    initialSlide={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        className="w-full max-w-360 mx-auto"
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div
                className={`p-6 rounded-2xl bg-white transition-all duration-300 shadow
                ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-40"}`}
              >
                <div className="flex items-center gap-6 mb-4">
                  <img
                    src={item.img}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.date}</p>
                  </div>
                </div>

                <div className="flex">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <StarHelf width={16} height={16} />
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
