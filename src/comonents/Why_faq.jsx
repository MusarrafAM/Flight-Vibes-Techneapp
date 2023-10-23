import React from "react";
import {BsArrowRightCircle} from "react-icons/bs"

const Why_faq = () => {
  return (
    <div className="h-screen relative">
      <section>
        <div className="virtical-bar top-[-10%] mx-auto ml-[10%] w-[300px] h-[450px] bg-red-300 skew-x-[15deg] border-4 border-white absolute z-50 ">
            
        </div>

        <div className="ml-[32%] ">
          <h2 className="pt-20 font-bold text-3xl">Why Book Flights with Flight vibes</h2>
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
            <li className="flex items-center"><BsArrowRightCircle className="text-purple-400 mr-2"/>Options are endless</li>
            <li className="flex items-center"><BsArrowRightCircle className="text-purple-400 mr-2"/>Options are endless</li>
            <li className="flex items-center"><BsArrowRightCircle className="text-purple-400 mr-2"/>Options are endless</li>
            <li className="flex items-center"><BsArrowRightCircle className="text-purple-400 mr-2"/>Options are endless</li>
          </ul>
        </div>
      </section>

      <section></section>
    </div>
  );
};

export default Why_faq;
