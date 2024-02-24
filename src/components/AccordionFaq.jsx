import React, { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";

const AccordionFaq = ({ content, title }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-b-[#EAECF0] py-5"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <header className="flex items-center cursor-pointer transition-all  justify-between">
        <p className=" text-[#F2F8FC] font-semibold ">{title}</p>
        {!open ? <PlusCircle /> : <MinusCircle />}
      </header>

      <p
        className={` text-[#C2C6CA]  overflow-hidden font-normal transition-all ${
          open ? "max-h-96 ease-in mt-4" : " max-h-0"
        }`}
      >
        {content}
      </p>
    </div>
  );
};

export default AccordionFaq;
