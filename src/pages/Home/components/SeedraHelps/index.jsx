import React from "react";
import { GirlPoteto,} from "../../../../assets";
function SeedreHelps(props) {
  return (
    <div className="container flex lg:flex-row flex-col justify-between mt-15.75 max-lg:mt-9 mb-24">
      <div>
        <h1 className="font-semibold text-[#1F2533] text-4xl">
          Seedra helps to grow fast and efficiant
        </h1>
        <p className="mt-7.75 font-light text-[16px] text-[#1F2533 ] max-w-130.25 w-full">
          SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional
          instructions created by PhD Helga George <br />
          <br /> Be sure of our quality - the freshest batches of this season.
          Non-GMO, Heirloom - our seeds were tested and have the best
          germination ratings. Your easy growing experience is our guarantee
          Spinach commom culinary uses: salads, soups, smoothies, lasagne,
          pizza, pies, risotto, and more <br />
          <br /> Proudly sourced in the USA - our garden seeds are grown,
          harvested, and packaged in the USA. We support local farmers and are
          happy to produce this American-made product
        </p>
      </div>
      <div
        className="lg:w-132 w-80.5 lg:h-131.75 h-80.5 rounded-full p-3.5 max-lg:mx-auto max-lg:mt-5.25
    bg-[linear-gradient(220deg,#359740,rgba(207,233,195,0.7)_63%,rgb(255,255,255)_73%)]"
      >
        <img
          src={GirlPoteto}
          alt=""
          className="w-full h-full p-3  rounded-full object-cover bg-white"
        />
      </div>
    </div>
  );
}

export default SeedreHelps;
