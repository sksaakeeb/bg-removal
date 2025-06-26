import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/* Left Side */}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700">
          Remove the <br />{" "}
          <span className="text-indigo-600"> background </span> from <br />{" "}
          images for free.
        </h1>
        <p className="my-6 text-[15px] text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sed
          nesciunt minima quam expedita optio beatae quos nostrum inventore
          ipsum et.
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label
            className="inline-flex gap-3 py-3.5 p-5 rounded-full cursor-pointer bg-indigo-600"
            htmlFor="upload1"
          >
            <img width={20} src={assets.upload_btn_icon} alt="" />
            <p className="text-white text-sm">Upload your image</p>
          </label>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
