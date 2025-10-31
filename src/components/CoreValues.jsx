import React from "react";

const CoreValues = () => {
  const values = [
    {
      title: "EXCELLENCE",
      description: "You can bank on our expertise to implement tailor-fit, practical strategies that deliver the desired results to you."
    },
    {
      title: "INTEGRITY",
      description: "We draw the line at cutting corners. We simply won't do it for anyone!"
    },
    {
      title: "RESPONSIVENESS",
      description: "We pride ourselves in being accessible to our clients at all times."
    },
    {
      title: "PASSION",
      description: "Our passion always shines through to our clients."
    },
    {
      title: "EFFICIENCY",
      description: "We favor practical speedy solutions over bureaucratic legal jargons."
    },
    {
      title: "SIMPLICITY",
      description: "We keep it simple. Our mantra is that if a 10-year old cannot understand your documents, you haven't communicated."
    },
    {
      title: "CONVENIENCE",
      description: "We take up your legal burdens and have sleepless nights so you can rest easy."
    },
    {
      title: "AUTHENTICITY",
      description: "We keep it real. You always know where you stand with us."
    },
    {
      title: "AFFORDABILITY",
      description: "We are affordable, providing you with fit-for-purpose strategy, practical valuable outcomes, and positive results leveraging our expertise in law, business and strategy, that far exceeds any price you pay."
    }
  ];

  return (
    <div className="px-[5%] py-[100px] bg-tertiary text-white overflow-hidden">
      <div>
        {/* Header section with enhanced styling */}
        <div className="text-secondary mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <p className="text-[14px] font-medium tracking-wider ">OUR CORE VALUES</p>
          </div>
          <h2 className="max-w-[451px]">
            Prometrics Legal Hub: Our Guiding Pillars
          </h2>
        </div>

        {/* Values grid with enhanced cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-secondary border border-border border-opacity-20 rounded-lg p-6 hover:border-primary hover:border-opacity-40 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-1 h-12 bg-primary rounded-tr-lg transition-all duration-300 group-hover:h-full"></div>
              
              <div className="relative">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary bg-opacity-10 rounded-full mb-4 border border-primary border-opacity-20">
                  <span className="text-primary text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
                </div>
                
                <h4 className="mb-3 text-xl font-bold text-primary tracking-wide">
                  {value.title}
                </h4>
                
                <p className="text-sm font-medium leading-relaxed text-gray-300 text-justify">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;