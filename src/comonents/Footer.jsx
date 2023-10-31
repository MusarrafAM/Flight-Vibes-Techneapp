import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full px-4">
      <div className="max-w-[1340px] mx-auto">
        <div className="grid grid-cols-3">
          <div className="pr-[60px]">
            <h3 className="border-b-2 border-blue-800  text-blue-800 py-4 text-xl">
              Need Any Help
            </h3>
            <div className="border-l-4 border-black pl-3 mb-8 mt-4">
              <p>Call 24/7 for any help</p>
              <p>+4154 2231325631</p>
            </div>

            <div className="border-l-4 border-black pl-3 mb-8 mt-4">
              <p>Mail to our support team</p>
              <p>support@flightvibes.com</p>
            </div>

            <div className="border-l-4 border-black pl-3 mb-8 mt-4">
              <p>Connect us on</p>
              <div className="flex gap-4">
                <BsFacebook className="my-auto" />
                <BsInstagram className="my-auto" />
                <BsYoutube size={20} className="my-auto" />
              </div>
            </div>
          </div>
          <div className="pr-6">
            <h3 className="border-b-2 border-blue-800 clear-left text-blue-800 py-4 text-xl">
              Use Full Links
            </h3>
            <div className="grid grid-cols-2 py-4">
              <div>
                <p className="pb-1">Home</p>
                <p className="pb-1">Flights</p>
                <p className="pb-1">Hotels</p>
                <p className="pb-1">Flash Deals</p>
                <p className="pb-1">Destinations</p>
                <p className="pb-1">Promotions</p>
                <p className="pb-1">Help</p>
                <p className="pb-1">Sign In / Sign Up</p>
              </div>
              <div>
                <p className="pb-1">About</p>
                <p className="pb-1">Testimonials</p>
                <p className="pb-1">Rewards</p>
                <p className="pb-1">Blogs</p>
                <p className="pb-1">Meet the team</p>
                <p className="pb-1">Work with Us</p>
                <p className="pb-1">FAQ</p>
                <p className="pb-1">Privacy Policy</p>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 mt-4">
            <div className="visa ">
              <div className="text-white pt-4 px-4 flex">
                <p>We Accept</p>
                <div className="straight-line border-t-2 border-white h-[10px] w-[320px] mt-[13px] ml-4"></div>
              </div>
                <img
                  className=" p-4"
                  src="https://www.worldflightvibes.com/images/payment-icons/payment-methods-we-accept.svg"
                  alt=""
                />
            </div>
            <div>
              <h3 className="border-b-2 border-blue-800 clear-left text-blue-800 py-4 text-xl">
                Need Assistance
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent scelerisque urna nec pellentesque egestas. Nam felis
                felis, mollis et luctus et, iaculis vestibulum metus.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            scelerisque urna nec pellentesque egestas. Nam felis felis, mollis
            et luctus et, iaculis vestibulum metus. In hac habitasse platea
            dictumst. Suspendisse felis diam, feugiat nec mauris vitae, semper
            laoreet elit. Duis tristique et leo in scelerisque. Aenean elementum
            tristique nibh, sit amet tincidunt enim gravida posuere. Etiam quis
            sem luctus, placerat dolor nec, interdum risus. Cras vel ipsum non
            lorem mattis aliquam. Cras convallis metus sit amet urna tempor
            lobortis. Nam fermentum elementum faucibus. Proin nisi sem, posuere
            quis sapien nec, lacinia finibus erat. Cras eu felis a orci euismod
            semper. Aenean condimentum, felis in blandit suscipit, sapien felis
            auctor augue, et ullamcorper augue ex vel augue.
          </p>
        </div>

        <div className="poweredby flex justify-between border-t-2 border-blue-800 my-8 pt-4">
          <p className="">Powered by Techneapp</p>
          <p>
            @2023 vibes Group UK. All right reserved. Trading as Flight Vibes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
