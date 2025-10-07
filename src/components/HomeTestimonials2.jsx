// Home Page Testimonial
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeTestimonials = () => {
  const navigate = useNavigate();
  return (
    <div className="px-[5%] bg-[#F9FAFB] py-[50px]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-12">
        <div>
          <p className="text-[14px] font-medium mb-2">TESTIMONIALS</p>
          <h2 className="max-w-[311px] mb-8 leading-tight">
            What Our Clients Are Saying About Us
          </h2>
        </div>

        <div className="flex flex-col gap-4 mb-4 md:mb-0">
          <div className="flex flex-col border border-[#E4D4C1] rounded-[18px] bg-white max-w-[392px] p-[16px]">
            <p className="text-[13px] font-light mb-4 ">
              `Her professionalism and support were invaluable in guiding me through immigration matters. Truly grateful for her assistance.`
            </p>
            <p className="text-[13px] text-primary font-medium mb-1">
              Emmah Muema
            </p>
            {/* <p className="text-[13px] font-light">
              Global Sports Administrator and MBA Candidate 2025 (STEM)
            </p> */}
          </div>
          
          <div className="flex flex-col border border-[#E4D4C1] rounded-[18px] bg-white max-w-[392px] p-[16px]">
            <p className="text-[13px] font-light mb-4 ">
              I highly recommend Dr. Fola Odion for any immigration-related legal needs! 
              Dr. Odion expertly guided me through the complex process of filing both EB-1 and EB-2 petitions. 
              Her patience and ability to explain intricate details in a clear, concise manner made all the difference.
            </p>
            <p className="text-[13px] text-primary font-medium mb-1">
              Joshua Alahira
            </p>
            {/* <p className="text-[13px] font-light">International Business Law</p> */}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col border border-[#E4D4C1] rounded-[18px] bg-white max-w-[392px] p-[16px]">
            <p className="text-[13px] font-light mb-4 ">
              `Fola came highly recommended by a member of my church community. When I contacted her, she responded promptly and professionally—an immediate contrast to the other attorney I had been communicating with at the time. Her responsiveness and attentiveness gave me the confidence to proceed with her. She efficiently filed my petition, and through the expedited process, my case was successfully approved on time. I’m truly grateful for Fola’s support and expertise.`
            </p>
            <p className="text-[13px] text-primary font-medium mb-1">
              Blessing Olatoyan
            </p>
            {/* <p className="text-[13px] font-light">Global Supply Chain Analyst</p> */}
          </div>
          <div className="flex flex-col border border-[#E4D4C1] rounded-[18px] bg-white max-w-[392px] p-[16px]">
            <p className="text-[13px] font-light mb-4 ">
              `Dr. Fola’s deep knowledge, flexibility, and support led to my EB1 approval. She prioritized trust over money and guided me every step.`
            </p>
            <p className="text-[13px] text-primary font-medium mb-1">
              Alex Olanrewaju Adekanmbi
            </p>
            {/* <p className="text-[13px] font-light">
              MBA Graduate Teaching Assistant
            </p> */}
          </div>
        </div>
      </div>
      <button
       onClick={()=> navigate('/testimonials')}
       className='w-[230px] bg-primary hover:bg-secondary rounded-[40px] text-white text-base px-3 py-3 font-semibold mt-4 md:mt-0'
      >
        View All Testimonials
        <ChevronRight className="w-5 h-5 ml-2 inline-block -mt-1" />
      </button>
    </div>
  );
};

export default HomeTestimonials;
