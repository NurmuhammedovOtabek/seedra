import React from "react";
import { Barg, Toplam } from "../../../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function CategoryFilter(props) {
  const data = [
    { icon: <Barg />, label: "ALL" },
    { icon: <Toplam />, label: "BUNDLES" },
    { icon: <Barg />, label: "HERBS" },
    { icon: <Barg />, label: "VEGETABLES" },
    { icon: <Barg />, label: "FRUITS" },
    { icon: <Barg />, label: "SUPPLIES" },
    { icon: <Barg />, label: "FLOWERS" },
  ];
  return (
    <div>
      <div className="hidden container mt-10 lg:flex gap-3 items-center w-full justify-between">
        {data.map((item, i) => (
          <div
            key={i}
            className="h-18 rounded-lg border-2 border-[#EFEFEF] pt-5.5 pb-5.5 pl-4 pr-7.5 flex gap-2 items-center hover:border-[#359740] cursor-pointer"
          >
            {item.icon}
            <span className="font-normal text-[14px] ">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="lg:hidden mt-10">
        <Swiper spaceBetween={12} slidesPerView="auto">
          {data.map((item, i) => (
            <SwiperSlide key={i} className="w-auto!">
              <div
                className="h-18 rounded-lg border-2 border-[#EFEFEF]
          pt-5.5 pb-5.5 pl-4 pr-7.5
          flex gap-2 items-center
          hover:border-[#359740] cursor-pointer
        "
              >
                {item.icon}
                <span className="font-normal text-[14px]">{item.label}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CategoryFilter;
