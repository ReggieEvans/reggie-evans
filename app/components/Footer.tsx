import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-dark-font text-white flex justify-between p-8 items-center lg:px-24">
      <div>&copy; 2025 reggieevans.me</div>
      <div className="flex">
        <div>
          <a
            href="https://www.linkedin.com/in/reggie-evans-631b3753/"
            target="_blank"
          >
            <div className="w-[48px] h-[48px] text-xl flex justify-center items-center brightness-75 text-blue hover:brightness-125 cursor-pointer">
              <FaLinkedin />
            </div>
          </a>
        </div>
        <div>
          <a href="https://github.com/ReggieEvans" target="_blank">
            <div className="w-[48px] h-[48px] text-xl flex justify-center items-center brightness-75 text-blue hover:brightness-125 cursor-pointer">
              <FaGithub />
            </div>
          </a>
        </div>
        <div>
          <a href="mailto:revans911@gmail.com">
            <div className="w-[48px] h-[48px] text-xl flex justify-center items-center brightness-75 text-blue hover:brightness-125 cursor-pointer">
              <FaEnvelope />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
