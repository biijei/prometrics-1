import { Link } from 'react-router-dom'

const HeroSection = ({subtitile, titile, link, menu, menudetails, bgimage}) => {
  return (
    <div className={`px-[5%] h-[280px] md:h-[450px] ${bgimage} flex flex-col justify-center items-center md:items-start bg-primary-normal text-white text-center md:text-left `}>
      <p className='text-[14px] font-medium mb-2'>{subtitile}</p>
      {link ? (
        <h2 className='max-w-[714px] mb-4 md:mb-10 underline underline-offset-4'>
          <Link to={link} target='_blank'>
            {titile}
          </Link>
        </h2>
      ) : (
        <h2 className='max-w-[714px] mb-4 md:mb-10'>{titile}</h2>
      )}
      

      <p className='text-base text-[#B6BABD] font-medium'>
        <a href="/" className='underline text-primary '>Go Home</a> / {menu} {menudetails}
      </p>
    </div>
  )
}

export default HeroSection