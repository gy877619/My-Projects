import React from "react";

function SignIn() {
  return (
    <>
      <div className="w-[90%] sm-[80%] mx-auto mt-[100px]">
        <div className="container px-5 py-20 mx-auto flex flex-wrap items-center  ">
          <div className="lg:w-3/5 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Get Started With your Account
            </h1>
            <p className="leading-relaxed font-light mt-4">
              Find Your Favourite Food On our Platform. Just one Step to order
              your Food
            </p>
          </div>

          <div className="lg:w-2/6 md:w-1/2 md:mt-0 md:ml-auto w-full mt-9 p-8 flex flex-col bg-gray-100 rounded-lg">
            <h2 className="font font-semibold my-3">Sign Up</h2>
            <div className=" mb-4">
              <label htmlFor="full-name" className="text-sm">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your Fulll name"
                className=" w-full border border-gray-300 rounded block text-sm p-2 mt-1"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded block text-sm p-2 mt-1"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="Mobile" className="text-sm">
                Mobile
              </label>
              <input
                type="text"
                placeholder="Enter your Mobile number"
                className=" w-full border border-gray-300 rounded block text-sm p-2 mt-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm">
                Password
              </label>
              <input
                type="text"
                placeholder="Enter your Password"
                className="w-full border border-gray-300 rounded block text-sm p-2 mt-1"
              />
            </div>
            <div className="flex justify-center">
              <button className=" text-white bg-indigo-500 border-0 py-1 px-8  mt-6 rounded">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
