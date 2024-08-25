import { motion } from 'framer-motion'
import { InfiniteMovingCards } from '../../components/ui/InfiniteMovingCard'
const musicSchoolTestimonials = [
  { imgSrc: '/assets/skills/html.png' },
  { imgSrc: '/assets/skills/css.png' },
  { imgSrc: '/assets/skills/js.png' },
  { imgSrc: '/assets/skills/bootstrap.png' },
  { imgSrc: '/assets/skills/sql-server.png' },
  { imgSrc: '/assets/skills/c-sharp.png' },
  { imgSrc: '/assets/skills/asp.net.png' },
  { imgSrc: '/assets/skills/mysql.png' },
  { imgSrc: '/assets/skills/php.png' },
  { imgSrc: '/assets/skills/laravel.png' },
  { imgSrc: '/assets/skills/python.png' },
  { imgSrc: '/assets/skills/github.png' },
  { imgSrc: '/assets/skills/owl-carousel.png' },
  { imgSrc: '/assets/skills/SweetAlert2.png' },
  { imgSrc: '/assets/skills/swiper.png' },
  { imgSrc: '/assets/skills/email-js.png' },
  { imgSrc: '/assets/skills/tailwind.png' },
  { imgSrc: '/assets/skills/jquery.png' }
]

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