/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import AmountButtons from "./AmountButtons";

import { Product } from "../types";

const AddToCart: React.FC<Product> = ({ id, stock, colors }) => {
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const increase = () => {
    setAmount((prev) => {
      let temp = prev + 1;
      if (temp > stock) {
        temp = stock;
      }
      return temp;
    });
  };
  const decrease = () => {
    setAmount((prev) => prev - 1);
  };
  return (
    <div className="mt-8">
      <div className="grid grid-cols-[125px,1fr] items-center mb-4">
        <span className="font-bold">Colors:</span>
        <div className="flex">
          {colors.map((color, i) => {
            return (
              <button
                key={i}
                className={`w-6 h-6 ${
                  mainColor === colors[i] ? "opacity-100" : null
                } rounded-full mr-2 border-none cursor-pointer opacity-50 flex items-center justify-center`}
                onClick={() => setMainColor(colors[i])}
                style={{
                  backgroundColor: color,
                }}
              >
                {mainColor === color ? (
                  <FaCheck className="text-white" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-8">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className="mt-4 py-[0.375rem] px-[0.75rem] tracking-wider inline-block font-semibold border-transparent text-base cursor-pointer bg-green-950/80 rounded-md text-green-300/80 hover:bg-green-400 hover:text-green-950/80"
        >
          Add To Cart
        </Link>
      </div>
    </div>
  );
};
export default AddToCart;
