// NOT IN USE FOR NOW
import React from "react";
import avatar from '../assets/images/Avatar.png'
import avatar1 from '../assets/images/Avatar (1).png'
import avatar2 from '../assets/images/Avatar (2).png'
import avatar3 from '../assets/images/Avatar (3).png'
import twitterGray from '../assets/icons/twitter-gray.svg'
import linkedInGray from '../assets/icons/linkedIn-gray.svg'

const OurTeam = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-7 lg:gap-7">
      <div className="w-[200px] md:w-[280px] flex flex-col items-center ">
        <img src={avatar} alt="Prometrics Advisors" className="mb-4 " />
        <p className="text-[18px] text-[#15110D] font-semibold ">Lori Bryson</p>
        <p className="text-[14px] text-primary font-medium mb-4 ">
          Managing Partner
        </p>
        <div className="flex items-center gap-2">
          <a href="">
            <img src={twitterGray} alt="Twitter" />{" "}
          </a>
          <a href="">
            <img src={linkedInGray} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="w-[200px] md:w-[280px] flex flex-col items-center ">
        <img src={avatar1} alt="Prometrics Advisors" className="mb-4 " />
        <p className="text-[18px] text-[#15110D] font-semibold ">Lori Bryson</p>
        <p className="text-[14px] text-primary font-medium mb-4 ">
          Managing Partner
        </p>
        <div className="flex items-center gap-2">
          <a href="">
            <img src={twitterGray} alt="Twitter" />{" "}
          </a>
          <a href="">
            <img src={linkedInGray} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="w-[200px] md:w-[280px] flex flex-col items-center ">
        <img src={avatar2} alt="Prometrics Advisors" className="mb-4 " />
        <p className="text-[18px] text-[#15110D] font-semibold ">Lori Bryson</p>
        <p className="text-[14px] text-primary font-medium mb-4 ">
          Managing Partner
        </p>
        <div className="flex items-center gap-2">
          <a href="">
            <img src={twitterGray} alt="Twitter" />{" "}
          </a>
          <a href="">
            <img src={linkedInGray} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="w-[200px] md:w-[280px] flex flex-col items-center ">
        <img src={avatar3} alt="Prometrics Advisors" className="mb-4 " />
        <p className="text-[18px] text-[#15110D] font-semibold ">Lori Bryson</p>
        <p className="text-[14px] text-primary font-medium mb-4 ">
          Managing Partner
        </p>
        <div className="flex items-center gap-2">
          <a href="">
            <img src={twitterGray} alt="Twitter" />{" "}
          </a>
          <a href="">
            <img src={linkedInGray} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
