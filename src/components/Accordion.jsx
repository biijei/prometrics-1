import React, { useState } from "react";

const Accordion = ({ content, title }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border-l-4 pl-4 ${
        open ? "border-l-primary " : "border-l-[#DADFE3]"
      }`}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <header className="flex items-center cursor-pointer transition-all justify-between">
        <h4 className="text-[18px] text-[#15110D] font-bold">{title}</h4>
      </header>

      <p
        className={`text-[14px] text-[#555758] overflow-hidden transition duration-2000 ease-in-out ${
          open ? "h-full mt-4 " : "max-h-0 duration-"
        } `}
      >
        {content}
      </p>
    </div>
  );
};

export default Accordion;
