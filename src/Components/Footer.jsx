import React from 'react'

const Footer = () => {
  return (
      <div className='relative  w-full h-full p-9 bg-black mt-10  flex flex-col md:flex items-center justify-center border-t-[.5px] border-[#c1c1c170]'>
          <h1 className='text-white font-black uppercase text-xl '>Moviebox</h1>
          <div className=' md:flex md:flex-row  items-center flex text-center md:text-left md:items-start mt-4 flex-col md:gap-16 gap-8'>
              <ul className='flex flex-col gap-1'>
                  <li className='text-white font-bold md:text-lg text-[1rem] uppercase'>The Basics</li>
                  <li className='text-white font-medium md:text-[1rem] text-sm mt-1'>About MovieBox</li>
                  <li className='text-white font-medium md:text-[1rem] text-sm'>Contact Us</li>
                  <li className='text-white font-medium md:text-[1rem] text-sm'>Support Forums</li>
                  <li className='text-white font-medium md:text-[1rem] text-sm'>Api</li>
                  <li className='text-white font-medium md:text-[1rem] text-sm'>System Status</li>
              </ul>
              <ul className='flex flex-col gap-1'>
                  <li className='text-white font-bold md:text-lg text-[1rem]  uppercase'>GET INVOLVED</li>
                  <li className='text-white font-medium md:text-[1rem] text-sm mt-1'>Contribution Bible</li>
                  <li className='text-white font-medium md:text-[1rem] text-sm'>Add New Movie</li>
                  <li className='text-white font-medium md:text-[1rem] text-sm'>Add New TV Show</li>
              </ul>
              <ul className='flex flex-col gap-1'>
                  <li className='text-white font-bold md:text-lg text-[1rem]  uppercase'>COMMUNITY</li>
                  <li className='text-white font-medium md:text-[1rem] text-sm mt-1'>Guidelines</li>
                  <li className='text-white font-medium md:text-[1rem] text-sm'>Discussions</li>
                  <li className='text-white font-medium md:text-[1rem] text-sm'>Leaderboard</li>
                  <li className='text-white font-medium md:text-[1rem] text-sm'>Twitter</li>
              </ul>
              <ul className='flex flex-col gap-1'>
                  <li className='text-white font-bold md:text-lg text-[1rem]  uppercase'>LEGAL</li>
                  <li className='text-white font-medium md:text-[1rem] text-sm mt-1'>Terms of Use</li>
                  <li className='text-white font-medium md:text-[1rem] text-sm'>API Terms of Use</li>
                  <li className='text-white font-medium md:text-[1rem] text-sm'>Privacy Policy</li>
              </ul>
          </div>
          <h1 className='text-white mt-8'>Made With 💓 By Dilshad</h1>
    </div>
  )
}

export default Footer

// GET INVOLVED
// Contribution Bible
// Add New Movie
// Add New TV Show
// COMMUNITY
// Guidelines
// Discussions
// Leaderboard
// Twitter
// LEGAL
// Terms of Use
// API Terms of Use
// Privacy Policy