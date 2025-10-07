import React from "react";
import { ChevronRight, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeTestimonials = () => {
  const navigate = useNavigate();
  
  const testimonials = [
    {
      text: "Her professionalism and support were invaluable in guiding me through immigration matters. Truly grateful for her assistance.",
      name: "Emmah Muema"
    },
    {
      text: "I highly recommend Dr. Fola Odion for any immigration-related legal needs! Dr. Odion expertly guided me through the complex process of filing both EB-1 and EB-2 petitions. Her patience and ability to explain intricate details in a clear, concise manner made all the difference.",
      name: "Joshua Alahira"
    },
    {
      text: "Fola came highly recommended by a member of my church community. When I contacted her, she responded promptly and professionally—an immediate contrast to the other attorney I had been communicating with at the time. I'm truly grateful for Fola's support and expertise.",
      name: "Blessing Olatoyan"
    },
    {
      text: "Dr. Fola's deep knowledge, flexibility, and support led to my EB1 approval. She prioritized trust over money and guided me every step.",
      name: "Alex Olanrewaju Adekanmbi"
    }
  ];

  return (
    <div className="px-[5%] bg-secondary py-[80px] overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[2px] w-12 bg-primary"></div>
          <p className="text-[14px] font-medium tracking-wider text-primary">TESTIMONIALS</p>
          <div className="h-[2px] w-12 bg-primary"></div>
        </div>
        <h2 className="text-white max-w-[600px] mx-auto">
          What Our Clients Are Saying About Us
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12 max-w-[1400px] mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group relative bg-white border border-border rounded-[18px] p-8 hover:shadow-xl hover:border-primary transition-all duration-300 hover:-translate-y-2"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
              <Quote className="w-16 h-16 text-primary" fill="currentColor" />
            </div>
            
            {/* Decorative top border accent */}
            <div className="absolute top-0 left-8 w-16 h-1 bg-primary rounded-b-full"></div>
            
            <div className="relative">
              {/* Testimonial text */}
              <p className="text-base mb-2 leading-relaxed text-gray-700 min-h-[120px]">
                {testimonial.text}
              </p>
              
              {/* Client info with enhanced styling */}
              <div className="flex items-center gap-3 pt-4 border-t border-border border-opacity-50">
                {/* Avatar circle with initials */}
                <div className="flex items-center justify-center w-12 h-12 bg-primary bg-opacity-10 rounded-full border-2 border-primary border-opacity-30 flex-shrink-0">
                  <span className="text-primary font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div>
                  <p className="text-[13px] text-primary font-semibold">
                    {testimonial.name}
                  </p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <button
          onClick={() => navigate('/testimonials')}
          className="group relative w-[250px] bg-primary rounded-[40px] text-white text-base px-6 py-4 font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 overflow-hidden"
        >
          <span className="absolute inset-0 w-0 bg-secondary/40 transition-all duration-300 ease-out group-hover:w-full"></span>
          <span className="relative flex items-center justify-center gap-2">
            View All Testimonials
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default HomeTestimonials;