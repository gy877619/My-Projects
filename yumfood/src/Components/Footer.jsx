import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-black text-white ">
        <div className="grid grid-cols-2 md:grid-cols-4 py-10 pl-6">
          <div>
            <p className="font-[800] text-[25px] mb-3">
              yum<span className="text-[#fbc531] ">Food</span>
            </p>
            <p className="text-[16px] text-[gray]">
              © 2024 Bundl Technologies Pvt. Ltd
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-3 text-[18px]">Company</h2>
            <p className="text-[16px] text-[gray] mb-3">Careers</p>
            <p className="text-[16px] text-[gray] mb-3">Team</p>
            <p className="text-[16px] text-[gray] mb-3">Yumfood One</p>
            <p className="text-[16px] text-[gray] mb-3">Yumfood Instamart</p>
            <p className="text-[16px] text-[gray] mb-3">Yumfood Genie</p>
          </div>

          <div>
            <h2 className="font-bold mb-3 text-18px]">Contact us</h2>
            <p className="text-[16px] text-[gray] mb-3">Help & Support</p>
            <p className="text-[16px] text-[gray] mb-3">Partner with us</p>
            <p className="text-[16px] text-[gray] mb-3">Ride with us</p>
          </div>

          <div>
            <h2 className="font-bold mb-3 text-[18px]">We deliver to:</h2>
            <p className="text-[16px] text-[gray] mb-3">Bangalore</p>
            <p className="text-[16px] text-[gray] mb-3">Gurgaon</p>
            <p className="text-[16px] text-[gray] mb-3">Hyderabad</p>
            <p className="text-[16px] text-[gray] mb-3">Delhi</p>
            <p className="text-[16px] text-[gray] mb-3">Mumbai</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
