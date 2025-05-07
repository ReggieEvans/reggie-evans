import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <div className="mt-4 w-full flex justify-center">
      <div className="w-[25%] max-w-[400px] hidden lg:block">
        <div className="h-[1px] bg-linear-to-r to-yellow from-blue"></div>
      </div>
      <div className="w-[20px] mt-[7px] ml-[-3px] hidden lg:block">
        <div className="h-[1px] rotate-45 bg-yellow"></div>
      </div>
      <div className="w-[20%] max-w-[200px] mt-[14px] ml-[-3px] hidden lg:block">
        <div className="h-[1px] bg-yellow "></div>
      </div>
      <div className="flex text-yellow">
        <a
          href="https://www.linkedin.com/in/reggie-evans-631b3753/"
          target="_blank"
        >
          <div className="lg:border-2 lg:border-yellow w-[48px] h-[48px] text-xl flex justify-center items-center brightness-75 text-blue hover:brightness-125 cursor-pointer">
            <FaLinkedin />
          </div>
        </a>

        <div className="w-[15px] mt-[14px] hidden lg:block">
          <div className="h-[1px] bg-linear bg-yellow"></div>
        </div>
        <a href="https://github.com/ReggieEvans" target="_blank">
          <div className="lg:border-2 lg:border-yellow w-[48px] h-[48px] text-xl flex justify-center items-center brightness-75 text-blue hover:brightness-125 cursor-pointer">
            <FaGithub />
          </div>
        </a>
        <div className="w-[15px] mt-[14px] hidden lg:block">
          <div className="h-[1px] bg-yellow"></div>
        </div>
        <a href="mailto:revans911@gmail.com">
          <div className="lg:border-2 lg:border-yellow w-[48px] h-[48px] text-xl flex justify-center items-center brightness-75 text-blue hover:brightness-125 cursor-pointer">
            <FaEnvelope />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Social;
