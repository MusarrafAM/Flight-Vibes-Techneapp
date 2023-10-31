import React from "react";

const Members = () => {
  return (
    <div className="w-full pt-[100px]">
      <div className="mx-auto w-full  bg-purple-200 text-center py-6">
        <h1 className="pt-4 text-purple-600 text-2xl">Members Only</h1>
        <p className="pb-1">
          Recieve tailered offers, tips & travel ideas from World Flight Vibes.
          Don't worry, we
        </p>
        <p className="pb-1">
          don't spam and you can opt out at any time. Learn More
        </p>
        <div className="my-4">
          <input
            className="py-4 pl-6 bg-blue-100 w-[450px] mr-6"
            type="text"
            placeholder="Jhone@example.com"
          />
          <button className="bg-purple-500 text-sm py-4 px-10 rounded text-white">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="w-full h-[140px] bg-black text-white flex items-center pl-[88px] justify-between">
        Booking is safe with us! We are best in industry
        <div className="flex">
          <div>
            <img
              className="w-[100px] h-[100px] object-cover mx-4"
              src="https://www.worldflightvibes.com/images/others/ATOL_White.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[100px] h-[100px] object-cover mx-4"
              src="https://www.worldflightvibes.com/images/others/travel_aware_sherpa.svg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[100px] h-[100px] object-cover mx-4"
              src="https://cdn.worldflightvibes.com/images/footer/financial-protection.png?height=84&width=84&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[100px] h-[100px] object-cover mx-4"
              src="https://cdn.worldflightvibes.com/images/footer/Flexible-payment-white.svg?height=78&width=auto&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
