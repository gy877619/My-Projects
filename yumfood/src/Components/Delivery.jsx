import React from "react";

const Delivery = () => {
  return (
    <>
      <div className="w-full py-16 px-4">
        <h2 className="text-[#fbc531] font-bold text-2xl text-center">
          Quick Delivery App
        </h2>

        <div className="grid grid-cols-2 w-[70%] mx-auto my-10 gap-10">
          <img
            src="https://yc-forum-uploads-bookface-production.s3.us-west-2.amazonaws.com/user_uploads/741494/6447f895-8407-42e9-83a3-3888319ee070?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQC4NIECAK4EL6K7S%2F20240826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240826T095607Z&X-Amz-Expires=600000&X-Amz-SignedHeaders=host&X-Amz-Signature=1ad56134835506078b3eeef8f495d2e3f1989b4eed0213dd1e8438faff7c2af6"
            alt=""
            className="w-[500px]"
          />

          <div className="flex flex-col justify-center">
            <p className="text-[green] font-bold text-[25px] md:text-[30px]">Get the App</p>

            <h2 className="sm:text-2xl md:text-3xl lg:text-5xl font-bold py-2">
              The Fastest Food delivery in the World
            </h2>

            <button className="bg-black w-[100px] md:w-[200px] text-white rounded-md my-6 p-2 md:p-3 text-15px md:text-[20px] hover:text-[#fbc531] font-semibold">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Delivery;
