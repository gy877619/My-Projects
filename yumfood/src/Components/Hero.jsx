import { React, useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  const imgData = [
    {
      url: "https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];
  const [slider, setSlider] = useState(0);

  const handlePlus = () => {
    setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
  };
  const handleMinus = () => {
    setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
  };

  useEffect(() => {
    const clearInt = setInterval(() => {
      handlePlus();
    }, 2000);

    return () => clearInterval(clearInt);
  }, [slider]);

  return (
    <>
      <div className="mt-[100px]">
        <div className="w-[90%] mx-auto h-[80vh] my-5 relative">
          {imgData.map((item, i) => (
            <div key={i} className={`${slider === i ? "block" : "hidden"}`}>
              <img
                src={item.url}
                alt=""
                className="w-full h-[80vh] rounded-2xl object-cover"
              />
            </div>
          ))}
          <div className="w-full h-[80vh] bg-black absolute top-0 rounded-2xl opacity-50"></div>
          <div className="absolute w-full top-[50%] text-center font-semibold text-white text-[25px] flex justify-center opacity-80">
            <p>
              Welcome to the world of tasty and fresh food.
            </p>
          </div>
          <div className="flex justify-between w-full px-5 absolute top-[50%] text-white">
            <FaAngleLeft
              size={35}
              className="cursor-pointer"
              onClick={handleMinus}
            />
            <FaAngleRight
              size={35}
              className="cursor-pointer"
              onClick={handlePlus}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
