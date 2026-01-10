import Image from "next/image";
import studentImage from "../assets/images/student.png";
import SuccessImage from "../assets/images/Success.png";
import QuestionImage from "../assets/images/Question.png";
import ExpertsImage from "../assets/images/Experts.png";
import ExperienceImage from "../assets/images/Experience.png";

const OurSuccess = () => {
  return (
    <div>
      <div className="bg-white  ">
        <p className="text-3xl font-semibold antialiased py-6 text-center ">
          Our success
        </p>
      </div>
      <div className="bg-white flex flex-col md:flex-row gap-32 justify-center  p-6 lg:py-6 ">
        <div>
          <Image className="w-24 " src={studentImage} alt="Image" />
          <p className="text-4xl font-semibold ">15K</p>
          <p className="font-semibold">Number of student</p>
        </div>

        <div>
          <Image className="w-24.5" src={SuccessImage} alt="Image" />
          <p className="text-4xl font-semibold">75%</p>
          <p className="font-semibold">Percentage of Success</p>
        </div>

        <div>
          <Image className="w-29.5" src={QuestionImage} alt="Image" />
          <p className="text-4xl font-semibold">35</p>
          <p className="font-semibold">Number of Question</p>
        </div>

        <div>
          <Image className="w-32" src={ExpertsImage} alt="Image" />
          <p className="text-4xl font-semibold">25+</p>
          <p className="font-semibold">Numbers of Experts</p>
        </div>

        <div>
          <Image className="w-29" src={ExperienceImage} alt="image" />
          <p className="text-4xl font-semibold">15+</p>
          <p className="font-semibold">Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default OurSuccess;
