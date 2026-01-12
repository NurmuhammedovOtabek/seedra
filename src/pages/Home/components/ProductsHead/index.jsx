import React from 'react';

function ProductsHead(props) {
    return (
      <div className="container flex items-center justify-between mt-12">
        <h3 className="font-semibold text-4xl text-[#1F2533]">Our products.</h3>
        <button className="text-[#359740] max-w-38 w-full h-13 rounded-lg border border-[#EFEFEF]">
          View all (12)
        </button>
      </div>
    );
}

export default ProductsHead;