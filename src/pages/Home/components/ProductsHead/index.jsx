import React from 'react';

function ProductsHead(props) {
    return (
      <div className="container flex items-center justify-between mt-12">
        <h3 className="font-semibold lg:text-4xl text-[22px] text-[#1F2533]">
          Our products.
        </h3>
        <button className="text-[#359740] lg:max-w-38 max-w-31 w-full lg:h-13 h-12 rounded-lg border border-[#EFEFEF]">
          View all (12)
        </button>
      </div>
    );
}

export default ProductsHead;