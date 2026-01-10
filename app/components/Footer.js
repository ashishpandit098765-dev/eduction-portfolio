import Image from "next/image";
import BoyImage from "../assets/images/Boy.webp";

const Footer = () => {
  return (
    <footer className=" py-20 px-6 md:px-48 bg-gray-800">
      <div className=" py-6 p-4 flex md:flex-row flex-col justify-center gap-4 ">
        <div className="w-1/5">
          <Image src={BoyImage} alt="image" className=" rounded-full w-12" />
        </div>

        <div className="w-1/5">
          <p className=" text-lg py-6 text-gray-500">My Account</p>
          <div className=" text-white text-xs ">
            <p className="py-1 hover:underline cursor-pointer">Sign in</p>
            <p className="py-1 hover:underline cursor-pointer ">Deshbord</p>
            <p className="py-1 hover:underline  cursor-pointer">
              Monitor Progres
            </p>
            <p className="py-1 hover:underline  cursor-pointer">
              Compare Success
            </p>
            <p className="py-1 hover:underline  cursor-pointer">My Topics</p>
          </div>
        </div>

        <div className="w-1/5">
          <p className="text-lg py-6 text-gray-500">About SBA</p>
          <div className="text-white text-xs ">
            <p className="py-1 hover:underline cursor-pointer">
              Company information
            </p>
            <p className="py-1 hover:underline cursor-pointer">Resources</p>
            <p className="py-1 hover:underline cursor-pointer">Our Success</p>
            <p className="py-1 hover:underline cursor-pointer">
              Meet The Experts
            </p>
          </div>
        </div>

        <div className="w-2/5">
          <p className="text-lg py-6 text-gray-500">Support</p>
          <p className=" text-white text-xs py-1 hover:underline cursor-pointer">
            Contect Us
          </p>
          <p className="text-gray-500"> New Sletter</p>
          <p className="text-white text-xs py-6 hover:underline cursor-pointer">
            Join our Mailling List To Stay Up To Date With World
          </p>

          <div className="flex gap-50 border border-white p-2">
            <p className="text-gray-500 text-lg ">Email Address</p>
            <button className="text-black p-2 bg-white rounded-lg cursor-pointer  ">
              Subscribe{" "}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
