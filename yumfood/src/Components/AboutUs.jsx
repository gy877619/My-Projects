import React from "react";

const AboutUs = () => {
  return (
    <div className="w-[90%] mx-auto items-center mt-[100px]">
      <div className="flex justify-center py-[100px] gap-10">
        <div className="h-[390px] w-[500px]">
          <h1 className="text-[50px] font-semibold">Who are we?</h1>
          <p className="font-thin text-[16.3px] pt-5">
            Launched in 2010, Our technology platform connects customers,
            restaurant partners and delivery partners, serving their multiple
            needs. Customers use our platform to search and discover
            restaurants, read and write customer generated reviews and view and
            upload photos, order food delivery, book a table and make payments
            while dining-out at restaurants. On the other hand, we provide
            restaurant partners with industry-specific marketing tools which
            enable them to engage and acquire customers to grow their business
            while also providing a reliable and efficient last mile delivery
            service. We also operate a one-stop procurement solution, Hyperpure,
            which supplies high quality ingredients and kitchen products to
            restaurant partners. We also provide our delivery partners with
            transparent and flexible earning opportunities.
          </p>
        </div>
        <div className="flex justify-center h-[320px] mt-4 ml-5">
          <div>
            <img
              src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp"
              alt=""
              className="w-[530px] rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
