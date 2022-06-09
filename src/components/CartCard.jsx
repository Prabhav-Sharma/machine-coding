import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useCart } from "../Contexts/CartContext";
import { AddToCartButton } from ".";

function CartCard({ product, showActionButtons = true }) {
  const { companyName, name, price, img, MRP, discount, quantity } = product;

  const { cartDispatch } = useCart();
  return (
    <div className="flex flex-row p-4 bg-white gap-1">
      <div className="flex flex-col justify-between items-center">
        <img className="w-36" src={img} alt={name} />
        {showActionButtons && (
          <span className="flex flex-row gap-0 items-center self-center justify-center">
            <AiOutlinePlusCircle
              className="text-3xl bg-white p-1 rounded-full cursor-pointer"
              onClick={() =>
                cartDispatch({
                  type: "INCREASE_QUANTITY",
                  payload: { product },
                })
              }
            />
            <p className="w-16 flex items-center justify-center bg-white p-1.5 border border-gray-400 border-solid cursor-pointer ">
              {quantity}
            </p>
            <AiOutlineMinusCircle
              className={`text-3xl bg-white p-1 rounded-full ${
                quantity <= 1 && "cursor-not-allowed text-gray-500"
              }`}
              onClick={() => {
                if (quantity <= 1) {
                  return;
                }
                cartDispatch({
                  type: "DECREASE_QUANTITY",
                  payload: { product },
                });
              }}
            />
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 items-start grow">
        <div className="flex flex-row justify-between w-full">
          <p className="font-weight-600 whitespace-nowrap">{name}</p>
          <p>
            Delivery by Wed, Jan 6 |
            <span className="text-green-400 mx-1">Free</span>
            <span className="line-through mx-1">₹80</span>
          </p>
        </div>
        <p className="text-gray-600 text-sm">Size: L</p>
        <span className=" flex flex-row items-start gap-1">
          <p className="text-gray-600 text-sm">Seller: {companyName} </p>
          <img
            className="h-6"
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
            alt="flipkart-assured"
          />
        </span>
        <span className="flex flex-row items-center justify-between gap-3">
          <p className="font-semibold">₹{price}</p>
          <p className="text-gray-500 line-through text-sm">₹{MRP}</p>
          <p className="text-green-700 text-sm font-medium">{discount}% off</p>
        </span>
        {showActionButtons ? (
          <span className="flex flex-row items-center gap-4">
            <button
              className="border-none bg-transparent font-normal"
              onClick={() =>
                cartDispatch({ type: "SAVE_FOR_LATER", payload: { product } })
              }
            >
              SAVE FOR LATER
            </button>
            <button
              className="border-none bg-transparent font-normal"
              onClick={() =>
                cartDispatch({ type: "REMOVE_FROM_CART", payload: { product } })
              }
            >
              REMOVE
            </button>
          </span>
        ) : (
          <AddToCartButton product={product} />
        )}
      </div>
    </div>
  );
}

export default CartCard;
