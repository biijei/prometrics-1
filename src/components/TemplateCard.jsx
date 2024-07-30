import { Scale } from 'lucide-react'
import React from 'react'

const TemplateCard = ({img, title, text}) => {
  return (
    <div className="flex flex-col justify-between w-[400px] h-[250px] bg-white text-black border border-[#f1f1f1] shadow-md rounded-md px-6 py-4">
      <div>
        {img}
        {/* img={<AlertTriangle className="text-red-600 bg-[#FDE3E3] p-1 w-8 h-8 rounded-sm" />} */}
        <p className="text-lg my-2 font-semibold mt-4">{title}</p>
        <p className="">{text}</p>
      </div>
      <div>
        <div className='border-b border-[#aaa8a8] mb-4'/>
        <button className='text-sm font-semibold'>Download</button>
      </div>

    </div>
  )
}

export default TemplateCard