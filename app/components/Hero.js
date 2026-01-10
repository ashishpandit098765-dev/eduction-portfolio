import Image from "next/image";
import GirlImage from "../assets/images/Girl.webp";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center  px-4 lg:pl-64 lg:pr-32 gap-16 mt-16">
      <div className="w-full">
        <p className=" text-4xl py-3 ">
          Take{" "}
          <samp
            className="text-blue-700  font-bold
                "
          >
            {" "}
            student experience
          </samp>{" "}
          to the next level.
        </p>
        <p className="antialiased py-3">
          Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting
          Industry.Lorem Ipsum Has Been The Industrys Standerd Dummy.{" "}
        </p>
        <button className=" bg-blue-500 text-white p-2 border rounded-lg cursor-pointer  w-1/6 ">
          Join now
        </button>
      </div>

      <div className="w-full p-4">
        <Image className=" w-full rounded-2xl" src={GirlImage} alt="Image" />
      </div>
    </div>
  );
};

export default Hero;
