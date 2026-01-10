import Image from "next/image";
import WorkImage from "../assets/images/Work.webp";
const SignUp = () => {
  return (
    <div className=" lg:py-6 p-6 flex flex-col md:flex-row items-center gap-4">
      <div className=" md:w-1/6   flex flex-col gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <p className="text-2xl text-blue-600 hover:underline cursor-pointer ">
            Sign Up
          </p>
          <p>Montes Vivamus Curve Quisque Et Primis Pretium Nullam.</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <p className="text-2xl font-semibold hover:underline cursor-pointer">
            Get Access
          </p>
          <p>Access To Question Bank Of Over 2000 Questions</p>
        </div>
      </div>

      <div className=" md:w-3/6 ">
        <Image
          src={WorkImage}
          height={400}
          width={600}
          className="h-96 w-full object-cover rounded-lg"
          alt="image"
        />
      </div>
      <div className=" md:w-2/6 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <p className="text-2xl font-semibold hover:underline cursor-pointer">
            Practice Question
          </p>
          <p>
            Plecare For The MLA Exam in Multiplie Modes Of Revision And Track
            Your Progres With Your Personalised Dashboant
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <p className="text-2xl font-semibold hover:underline cursor-pointer">
            Get Result
          </p>
          <p>Compare Your Results With Your Peers With Advanced Analytics</p>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
