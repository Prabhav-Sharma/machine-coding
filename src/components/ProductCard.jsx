import React from "react";
import { AddToCartButton } from "./index";

function ProductCard({ product }) {
  const { companyName, name, price, img, MRP, discount } = product;

  return (
    <div className="flex flex-col gap-2 w-64 bg-white text-black">
      <img src={img} className="w-full h-80 object-cover" alt="product" />
      <div className="flex flex-col p-1">
        <p className="text-gray-600 text-sm">{companyName}</p>

        <span className="flex flex-row justify-between">
          <p className="font-weight-500 text-ellipsis overflow-hidden w-9/12 whitespace-nowrap">
            {name}
          </p>
          <img
            className="h-6"
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
            alt="flipkart-assured"
          />
        </span>
        <span className="flex flex-row items-center justify-start gap-3">
          <p className="font-semibold">₹{price}</p>
          <p className="text-gray-500 line-through text-sm">₹{MRP}</p>
          <p className="text-green-700 text-sm font-medium">{discount}% off</p>
        </span>
      </div>
      <AddToCartButton product={product} />
    </div>
  );
}

export default ProductCard;
