import React, { useEffect, useState } from "react";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState();

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (
      ans += item.amount * item.price
    ));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <div className="w-[70%] mx-auto">
        <div className="py-20 mt-10 ">
          {/* <h2 className="flex justify-center mb-10 text-xl font-semibold">Your dishes</h2> */}
          {cart.map((item) => (
            <div
              className="mx-auto flex justify-between mb-6 border-b border-gray-600 pb-4 "
              key={item.id}
            >
              <div className="">
                <img
                  src={item.img}
                  alt=""
                  className="w-[90px] rounded-lg h-[90px] object-cover"
                />
                <p className=" w-[90px] font-semibold mt-2 tr">{item.title}</p>
              </div>

              <div className="w-[100px] gap-3 flex justify-center text-center pt-[100px] ">
                <button
                  className=" h-[20px] w-[20px] bg-gray-300 border-none rounded flex justify-center items-center"
                  onClick={() => handleChange(item, -1)}
                >
                  -
                </button>
                <span className=" h-[20px] w-[20px] bg-gray-300 border-none rounded flex justify-center items-center text-sm ">
                  {item.amount}
                </span>
                <button
                  className=" h-[20px] w-[20px] bg-gray-300  border-none rounded items-center flex justify-center"
                  onClick={() => handleChange(item, +1)}
                >
                  +
                </button>
              </div>

              <div className="w-[10s0px] gap-4 flex justify-end pr-3  pt-[100px] ">
                <span className=" h-[30px] border-none rounded flex justify-center items-center">
                  ₹ {item.price}
                </span>
                <button
                  className=" border-none w-[60px] h-[30px] p-4 bg-gray-300 rounded flex justify-center items-center"
                  onClick={() => {
                    handleRemove(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between">
            <span className="font-semibold text-xl">
              Total Price of your Cart
            </span>
            <span className="pr-11 text-xl font-semibold">Rs - {price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
