import React from "react";

const Testimonials = () => {
  return (
    <div className="px-[5%] bg-[#F9FAFB] py-[50px] flex flex-col md:flex-row justify-center items-center gap-x-12">
      <div>
        <p className="text-[14px] font-medium mb-2">TESTIMONIALS</p>
        <h2 className="max-w-[311px] mb-8 leading-tight">
          What Our Clients Are Saying About Us
        </h2>
      </div>

      <div className="flex flex-col gap-4 mb-4 md:mb-0">
        <div className="flex flex-col border border-[#E4D4C1] rounded-[18px] bg-white max-w-[392px] min-h-[183px] p-[16px]">
          <p className="text-[13px] font-light mb-4 ">
            `Fola has great experience in this field, which is based on our
            personal engagement, in addition to feedback I have received from
            others who have engaged Fola. Without mincing words, I recommend
            Fola for any immigration inquiries you are curious about.`
          </p>
          <p className="text-[13px] text-primary font-medium mb-1">
            Abass Opeyemi Suara
          </p>
          <p className="text-[13px] font-light">
            Global Sports Administrator and MBA Candidate 2025 (STEM)
          </p>
        </div>
        <div className="flex flex-col border border-[#E4D4C1] rounded-[18px] bg-white max-w-[392px] min-h-[183px] p-[16px]">
          <p className="text-[13px] font-light mb-4 ">
            `Fola&apos;s level of professionalism in reviewing my CV was
            topnotch and the way she interpreted my roles and was able to
            communicate same in my CV was very brillant.Thank you Fola`
          </p>
          <p className="text-[13px] text-primary font-medium mb-1">
            Ola&apos; Aruwayo
          </p>
          <p className="text-[13px] font-light">International Business Law</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col border border-[#E4D4C1] rounded-[18px] bg-white max-w-[392px] min-h-[183px] p-[16px]">
          <p className="text-[13px] font-light mb-4 ">
            `It was amazing! Fola was super helpful in assisting me negotiate
            legal settlements. Her guidance and counsel enabled me make better
            informed decisions.`
          </p>
          <p className="text-[13px] text-primary font-medium mb-1">
            Daniel Ejairu
          </p>
          <p className="text-[13px] font-light">Global Supply Chain Analyst </p>
        </div>
        <div className="flex flex-col border border-[#E4D4C1] rounded-[18px] bg-white max-w-[392px] min-h-[183px] p-[16px]">
          <p className="text-[13px] font-light mb-4 ">
            `Fola’s career development coaching services are impeccable. She
            hand-held me as I transitioned from being a HND polytechnic graduate
            in Nigeria to an MBA graduate student in USA with a graduate
            assistantship offer. She was accessible and pleasant to work it,
            providing me with career, legal, and immigration advice. With her
            help, I secured the MBA admission, US F1 student visa and a graduate
            assistantship. Till now, she remains accessible in coaching me. I
            recommend Fola for expert services.`
          </p>
          <p className="text-[13px] text-primary font-medium mb-1">
            Iyadunni Aderotoye
          </p>
          <p className="text-[13px] font-light">
            MBA Graduate Teaching Assistant
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
