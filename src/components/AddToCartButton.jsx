import React from "react";
import { useCart } from "../Contexts/CartContext";
function AddToCartButton({ product }) {
  const { cartState, cartDispatch } = useCart();

  return (
    <>
      {cartState.items.findIndex((item) => item.id === product.id) === -1 ? (
        <button
          className="w-full max-w-sm bg-orange-400 p-2 text-white"
          onClick={() =>
            cartDispatch({
              type: "ADD_TO_CART",
              payload: { product: { ...product, quantity: 1 } },
            })
          }
        >
          Add To Cart
        </button>
      ) : (
        <button
          className="w-full  max-w-sm bg-slate-400 p-2 text-black"
          onClick={() =>
            cartDispatch({
              type: "REMOVE_FROM_CART",
              payload: { product },
            })
          }
        >
          Remove From Cart
        </button>
      )}
    </>
  );
}

export default AddToCartButton;
