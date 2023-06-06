import React from 'react'
import Emoji from '../Emoji'
import Emojies from '../EmojiPicker'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence } from 'framer-motion'
import aboutImage from '../../Assets/Images/aboutImage.png'
const About = () => {
  return (
      <div className=' flex flex-col  '>
          {/* background Image */}
          <div className='absolute overflow-x-hidden w-full h-full top-0 '>
            <motion.img
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              transition={{duration:2 , easeIn ,}}
              className=' bg-center object-cover w-full h-full hidden md:block ' src={aboutImage} alt="" />
            <div className='bg-black/80 w-full h-full absolute top-0'></div>
          </div>
        9

          <div className='mt-14 md:py-10 md:px-14 p-8 h-full'>
              <motion.h1
              initial={{ x: '-80px' , opacity:0 }}
              animate={{ x: '0px' , opacity:1 }}
              transition={{duration:.4 , easeInOut , delay:.6}}
                  className='text-white md:text-lg text-sm font-bold flex items-center gap-2'>About Movie Box  <Emoji Emoji={Emojies.peekingEye} width={'6'} height={'6'} /> </motion.h1>
              <motion.div
              initial={{ x: '-50px' , opacity:0 }}
              animate={{ x: '0px' , opacity:1 }}
              transition={{duration:.4 , easeInOut , delay:.8}}
              className='flex flex-col gap-4'>
              <p className='text-[#c1c1c1] w-full text-[1rem] mt-2'>Welcome to Movie Box, your one-stop-shop for all your favorite movies and TV shows! We are a team of passionate movie lovers who wanted to create a platform that offers a wide selection of movies and TV shows with a great user experience.</p>
              <p className='text-[#c1c1c1] w-full text-[1rem]'>Our platform is designed to make it easy for you to find the movies and TV shows you want to watch. We offer a vast library of movies and TV shows, including the latest releases, upcoming movies, and trending titles. Our user interface is sleek and modern, with an intuitive design that makes it easy to navigate and find what you're looking for.</p>
              <p className='text-[#c1c1c1] w-full text-[1rem]'>At Movie Box, we are committed to providing the best user experience possible. We understand that watching movies and TV shows is a form of escapism, and we want to make that experience as seamless and enjoyable as possible. Our team works hard to ensure that our platform is always up to date with the latest releases and that our user interface is user-friendly and easy to navigate.</p>
              <p className='text-[#c1c1c1] w-full text-[1rem]'>Whether you're in the mood for a classic movie, the latest blockbuster, or a binge-worthy TV show, Movie Box has got you covered. We pride ourselves on our vast selection of movies and TV shows, along with our commitment to providing the best user experience possible.</p>
              <p className='text-[#c1c1c1] w-full text-[1rem]'>Thank you for choosing Movie Box, and we hope you enjoy watching your favorite movies and TV shows with us!</p>
          </motion.div>
          </div>
          
          
    </div>
  )
}

export default About