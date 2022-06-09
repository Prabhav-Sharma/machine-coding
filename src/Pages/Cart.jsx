import React from "react";
import { CartCard } from "../components";
import { useCart } from "../Contexts/CartContext";

function Cart() {
  const {
    cartState: { items, quantity, value, saveForLater },
  } = useCart();

  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col gap-2 p-2 grow bg-white">
        <span className="flex flex-row justify-between">
          <h3 className="font-medium">Cart Item(s) ({quantity})</h3>
          <h3 className="font-medium">Cart Value ₹{value}</h3>
        </span>
        {items.map((item) => (
          <CartCard key={item.id} product={item} />
        ))}
        <button className="w-64 bg-orange-500 p-2 max-w-sm text-white self-end">
          Place Order
        </button>

        {saveForLater.length !== 0 && (
          <>
            <h3>Saved for Later ({saveForLater.length})</h3>
            {saveForLater.map((item) => (
              <CartCard
                key={item.id}
                product={item}
                showActionButtons={false}
              />
            ))}
          </>
        )}
      </div>
      <div className="flex flex-col bg-white w-64 p-2 h-max gap-3">
        <h2 className="text-gray-400 text-md border-b-slate-300 border border-solid border-t-0 border-x-0 mb-3">
          PRICE DETAILS
        </h2>
        <span className="flex flex-row justify-between">
          <p className="text-sm font-normal">Price ({quantity} items)</p>
          <p className="text-sm font-normal">₹{value}</p>
        </span>
        <span className="flex flex-row justify-between">
          <p className="text-sm font-normal">Discount</p>
          <p className="text-sm font-normal">
            ₹{items.reduce((acc, curr) => acc + curr.MRP, 0) - value}
          </p>
        </span>
        <span className="flex flex-row justify-between">
          <p className="text-sm font-normal">Delivery Charges </p>
          <p className="text-sm font-normal text-green-500">FREE</p>
        </span>
        <span className="flex flex-row justify-between border-b-slate-300 border border-dotted border-t-0 border-x-0 ">
          <p className=" font-medium">Total Amount </p>
          <p className=" font-medium text-green-500">₹{value}</p>
        </span>
        <h4 className="text-sm font-semibold text-green-500">
          You will save ₹
          {items.reduce((acc, curr) => acc + curr.MRP, 0) - value} on this order{" "}
        </h4>
      </div>
    </div>
  );
}

export default Cart;
