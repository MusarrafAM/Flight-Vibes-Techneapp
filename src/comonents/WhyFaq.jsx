import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

const WhyFaq = () => {
  return (
    <div className="h-screen px-4 relative ">
      <section>
        <div className="virtical-bar top-[-10%] mx-auto ml-[10%] w-[300px] h-[450px] skew-x-[15deg] border-4 border-white absolute z-50 ">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGVyZmFsbHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>

        <div className="ml-[32%] ">
          <h2 className="pt-20 font-bold text-3xl">
            Why Book Flights with Flight vibes
          </h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nunc
            sapien, accumsan ut lectus quis, consequat porttitor velit. Nullam
            consequat volutpat turpis, vel accumsan risus placerat at. Morbi
            ullamcorper tempor massa non facilisis. Suspendisse sed mauris
            turpis. Praesent ac felis nec sem hendrerit ornare. Quisque quam
            metus, consectetur a malesuada vitae, semper at felis. Quisque eu
            ultrices urna. Duis a tellus ac magna imperdiet maximus. Vestibulum
            porttitor neque ut neque molestie, eu tincidunt nibh imperdiet.
          </p>
          <ul className="ml-[30px]">
            <li className="flex items-center">
              <BsArrowRightCircle className="text-purple-400 mr-2" />
              Options are endless
            </li>
            <li className="flex items-center">
              <BsArrowRightCircle className="text-purple-400 mr-2" />
              Options are endless
            </li>
            <li className="flex items-center">
              <BsArrowRightCircle className="text-purple-400 mr-2" />
              Options are endless
            </li>
            <li className="flex items-center">
              <BsArrowRightCircle className="text-purple-400 mr-2" />
              Options are endless
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-[1240px] mx-auto my-[100px]">
        <h1 className="font-bold text-2xl mb-6">Frequently asked questions</h1>
        <div className="grid grid-cols-2">
          <div className="left-row">
            <div className="flex items-center justify-between h-[50px] bg-gray-200 px-5 mx-2 my-1">
              What is the best time to buy plane tickets?
              <AiOutlineDown />
            </div>
            <div className="flex items-center justify-between h-[50px] bg-gray-200 px-5 mx-2 my-1">
              What is the best time to buy plane tickets?
              <AiOutlineDown />
            </div>
            <div className="flex items-center justify-between h-[50px] bg-gray-200 px-5 mx-2 my-1">
              What is the best time to buy plane tickets?
              <AiOutlineDown />
            </div>
          </div>
          <div className="right-row">
            <div className="flex items-center justify-between h-[50px] bg-gray-200 px-5 mx-2 my-1">
              What is the best time to buy plane tickets?
              <AiOutlineDown />
            </div>
            <div className="flex items-center justify-between h-[50px] bg-gray-200 px-5 mx-2 my-1">
              What is the best time to buy plane tickets?
              <AiOutlineDown />
            </div>
            <div className="flex items-center justify-between h-[50px] bg-gray-200 px-5 mx-2 my-1">
              What is the best time to buy plane tickets?
              <AiOutlineDown />
            </div>
          </div>
        </div>
        <button className="w-[150px] h-[40px] bg-blue-600 text-white ml-[42%] mt-2">
          More FAQ
        </button>
      </section>
    </div>
  );
};

export default WhyFaq;
