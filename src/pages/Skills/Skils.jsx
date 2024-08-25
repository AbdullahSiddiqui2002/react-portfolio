import { motion } from 'framer-motion'
import { InfiniteMovingCards } from '../../components/ui/InfiniteMovingCard'
const musicSchoolTestimonials = [
  { imgSrc: '/assets/skills/html.png', title: 'HTML' },
  { imgSrc: '/assets/skills/css.png', title: 'CSS' },
  { imgSrc: '/assets/skills/js.png', title: 'JavaScript' },
  { imgSrc: '/assets/skills/bootstrap.png', title: 'Bootstrap' },
  { imgSrc: '/assets/skills/sql-server.png', title: 'SQL Server' },
  { imgSrc: '/assets/skills/c-sharp.png', title: 'C#' },
  { imgSrc: '/assets/skills/asp.net.png', title: 'ASP.NET' },
  { imgSrc: '/assets/skills/mysql.png', title: 'MySQL' },
  { imgSrc: '/assets/skills/php.png', title: 'PHP' },
  { imgSrc: '/assets/skills/laravel.png', title: 'Laravel' },
  { imgSrc: '/assets/skills/python.png', title: 'Python' },
  { imgSrc: '/assets/skills/github.png', title: 'GitHub' },
  { imgSrc: '/assets/skills/owl-carousel.png', title: 'Owl Carousel' },
  { imgSrc: '/assets/skills/SweetAlert2.png', title: 'SweetAlert2' },
  { imgSrc: '/assets/skills/swiper.png', title: 'Swiper JS' },
  { imgSrc: '/assets/skills/email-js.png', title: 'EmailJS' },
  { imgSrc: '/assets/skills/tailwind.png', title: 'Tailwind CSS' },
  { imgSrc: '/assets/skills/jquery.png', title: 'jQuery' }
];


const Skils = () => {

  return (
    
    <div className="sm:min-h-[60vh]  flex justify-center items-center flex-col">
      <h2 className='sm:text-5xl text-2xl font-bold font-madimi text-center my-9 sm:mb-[100px] text-white'><span className='text-teal-500 '>FULL </span> STACK DEVELOPER</h2>
      <div className='w-full max-w-6xl'>
        <InfiniteMovingCards
          items={musicSchoolTestimonials}
          direction='right'
          speed='fast'
        />
      </div>
    </div>
  )
}

export default Skils