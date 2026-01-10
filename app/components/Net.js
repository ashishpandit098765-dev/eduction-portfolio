import Image from "next/image";
import NetImage from "../assets/images/Net.webp";

const Net = () => {
  return (
    <div className="bg-white py-6 px-6 ">
      <Image className=" p-8 " src={NetImage} alt="image" />
    </div>
  );
};
export default Net;
