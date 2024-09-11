import React from "react";
import { mealData } from "../Data/Data";

const OurFood = ({handleClick}) => {
  return (
    <>
      <div className="w-[90%] mx-auto mt-[100px]">
        <div>
          <h2 className="text-center text-[#fbc531] text-3xl font-bold py-5">
            Our Food
          </h2>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 gap-2">
        {mealData.map((item) => (
          <div className="flex justify-center flex-col items-center" key={item.id}>
            <div className="my-5">
              <img
                src={item.img}
                alt=""
                className="w-[200px] h-[200px] object-cover rounded-lg"
              />
              <div className="flex flex-col justify-center items-center gap-0 p-2">
                <p className="text-base font-semibold uppercase">
                  {item.title}
                </p>
                <p className="text-sm font-semibold uppercase">₹ {item.price}</p>
                <button className="bg-black w-[100px] text-white rounded-md my-2 py-[8px] text-[15px] hover:text-[#fbc531]" onClick={() => handleClick(item)
                }>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurFood;
