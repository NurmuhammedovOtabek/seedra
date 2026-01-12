import React, { useState } from 'react';
import { Cliantro, CliantroPro, Corn, Spinach } from '../../../../assets';
import { Basket, Heart, Star, StarHelf } from '../../../../components';

function ProductGrid(props) {
    const [products, SetProducts] = useState([
      {
        id: 101,
        name: "Seedra Cilantro Seeds for Planting Indoor and Outdoor",
        image: CliantroPro,
        rating: 4.5,
        reviewsCount: 123,
        price: 12.56,
        isFavorite: false,
        category: "herbs",
      },
      {
        id: 102,
        name: "SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting",
        image: Corn,
        rating: 4.8,
        reviewsCount: 123,
        price: 12.56,
        isFavorite: false,
        category: "vegetables",
      },
      {
        id: 103,
        name: "SEEDRA Spinach Seeds for Indoor and Outdoor Planting",
        image: Spinach,
        rating: 4.2,
        reviewsCount: 123,
        price: 12.56,
        isFavorite: false,
        category: "vegetables",
      },
      {
        id: 104,
        name: "Seedra Cilantro Seeds for Planting Indoor and Outdoor",
        image: CliantroPro,
        rating: 4.5,
        reviewsCount: 123,
        price: 12.56,
        isFavorite: false,
        category: "herbs",
      },
      {
        id: 105,
        name: "SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting",
        image: Corn,
        rating: 4.8,
        reviewsCount: 123,
        price: 12.56,
        isFavorite: true,
        category: "vegetables",
      },
      {
        id: 106,
        name: "SEEDRA Spinach Seeds for Indoor and Outdoor Planting",
        image: Spinach,
        rating: 4.2,
        reviewsCount: 123,
        price: 12.56,
        isFavorite: false,
        category: "vegetables",
      },
    ]);
    const changeHeart = (id)=>{
        SetProducts(    
          products.map((data) =>
            data.id === id ? { ...data, isFavorite: !data.isFavorite } : data
          )
        );
    }
    
    return (
        <div className='container grid grid-cols-3 gap-7.5 mt-8 mb-14.25'>
            {products.map((data)=>{
                return (
                  <div
                    key={data.id}
                    className="p-7 w-full max-w-87.5 h-128 border-2 border-[#EFEFEF] rounded-lg relative"
                  >
                    <img
                      src={data.image}
                      alt=""
                      className="w-full max-w-73.5 h-73.5  rounded-b-xl object-contain"
                    />
                    <div className="flex gap-3 items-center mt-7">
                      <div className="flex">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <StarHelf width={16} height={16} />
                      </div>
                      <p className="font-normal text-[14px] text-[#70737C]">
                        ({data.reviewsCount})
                      </p>
                    </div>
                    <p className="text-[#1F2533] text-[16px] font-medium mt-1">
                      {data.name}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-[#1F2533] font-semibold text-[28px]">
                        ${data.price}
                      </p>
                      <button className="p-3 border border-[#EFEFEF] rounded-lg">
                        <Basket />
                      </button>
                    </div>
                    <div className="z-10 absolute top-3 right-3 p-3 border-[#EFEFEF] border bg-[#FFFFFF] rounded-[50%]" 
                    onClick={()=>{changeHeart(data.id)}}>
                      <Heart
                        color="#FFCF55"
                        color1={data.isFavorite ? "#FFCF55" : "#FFFFF"}
                      />
                    </div>
                  </div>
                );
            })}
        </div>
    );
}

export default ProductGrid;