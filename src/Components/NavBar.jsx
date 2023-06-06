import React, { useEffect ,useRef} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Search from '../Assets/Icons/search.png'
import Burger from '../Assets/Icons/burger.png'
import exitBurger from '../Assets/Icons/exitBurger.png'
import { useState } from 'react'
import '../index.css'
import SerachIcon from '../Assets/Icons/mSearch.png'
import Pre from '../Assets/Icons/pre.png'


import { easeIn, easeInOut, easeOut, motion, AnimatePresence } from 'framer-motion'


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [searchBar, setSearchBar] = useState();
  const [input, setInput] = useState('');
  const [preSearched, setPreSearched] = useState([]);
  const searchBarRef = useRef(null);
  const handleInput = (e) => {
    setInput(e.target.value)
    // console.log(input)
  }
  
  const navigate = useNavigate();


  window.addEventListener('resize', () => {
    if (window.innerWidth >= 700)
      setNav(false)
  })

  useEffect(() => {
    //adding to array

    const storedArray = JSON.parse(localStorage.getItem("myArray") || '[]');
    setPreSearched(storedArray);
    
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSearchBar(false)
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setSearchBar(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [searchBarRef]);


  const handlePreSearched = () => {
    const newItem = input;
    const updatedArray = [...preSearched, newItem].reverse();
    setPreSearched(updatedArray);
    localStorage.setItem("myArray", JSON.stringify(updatedArray));
  };

  const handleClick = () => {
    localStorage.setItem("myArray", "")
    setPreSearched([])
    location.reload();
  }

  let timing = 0.1;

  const reversedArray = [...preSearched].reverse();

  return (
      
    <motion.div
       initial={{y:'-70px' , opacity:0}}
      animate={{ y: '0px', opacity: 1 }}
      transition={{duration:.5 , easeIn , delay:.3 }}
      className="w-full md:py-10 md:px-14 p-8 flex justify-between mx-auto z-50 absolute">
      
      
      <Link to={'/'} className='text-white font-black uppercase sm:text-xl text-md cursor-pointer'>Moviebox</Link>
      <AnimatePresence>
        {
          nav && (
            <motion.ul  
              initial={{ y:'-200px', opacity: 0 }}
              animate={{ y: '0px', opacity: 1 }}
              transition={{ duration: .3, easeIn }}
              exit={{
                opacity: 0,
                y: '-200px',
                transition:{
                  duration: .3,
                  easeOut
                }
              }}
        className={` ${nav ? 'inline-flex' : 'hidden'} gap-2 md:gap-[3rem] md:flex md:flex-row absolute w-full top-[80px]  left-0  bg-black/90   md:bg-transparent  p-4 md:p-0   flex-col justify-center items-center md:static`}>
              <motion.a
                initial={{ x:'-80px', opacity: 0 }}
                animate={{ x: '0px', opacity: 1 }}
                transition={{ duration: .2, easeIn , delay:0 }}
 
                href='/' className='md:text-[#fff] text-white font-medium text-center transition-all duration-200 ease-in-out rounded-md md:hover:bg-transparent hover:bg-[#ffffff] w-[100%] md:w-auto hover:text-[#303030] md:bg-transparent py-4 md:p-0 '>Home</motion.a>
              <motion.a
                initial={{ x:'-80px', opacity: 0 }}
                animate={{ x: '0px', opacity: 1 }}
                transition={{ duration: .2, easeIn, delay: .1 }}
                href='/popular' to={'/popular'} className='md:text-[#fff] text-white font-medium text-center transition-all duration-200 ease-in-out rounded-md md:hover:bg-transparent hover:bg-[#ffffff] hover:text-[#303030] w-[100%] md:w-auto md:bg-transparent py-4 md:p-0 '>Popular</motion.a>
              <motion.a
                initial={{ x:'-80px', opacity: 0 }}
                animate={{ x: '0px', opacity: 1 }}
                transition={{ duration: .2, easeIn, delay: .2}}
                href='/tvshows' className='md:text-[#fff] text-white font-medium text-center transition-all duration-200 ease-in-out rounded-md md:hover:bg-transparent hover:bg-[#ffffff] w-[100%] hover:text-[#303030] md:w-auto md:bg-transparent py-4 md:p-0 '>TV Shows</motion.a>
              <motion.a
        initial={{ x:'-80px', opacity: 0 }}
                animate={{ x: '0px', opacity: 1 }}
                transition={{ duration: .2, easeIn, delay: .3 }}
                href='/upcoming' className='md:text-[#fff] text-white font-medium text-center transition-all duration-200 ease-in-out rounded-md md:hover:bg-transparent hover:bg-[#ffffff] hover:text-[#303030] w-[100%] md:w-auto md:bg-transparent py-4 md:p-0 '>Upcoming Movies</motion.a>
              <motion.a
        initial={{ x:'-80px', opacity: 0 }}
                animate={{ x: '0px', opacity: 1 }}
                transition={{ duration: .2, easeIn, delay: .4 }}
                href='/about' className='md:text-[#fff] text-white font-medium text-center transition-all duration-200 ease-in-out rounded-md md:hover:bg-transparent hover:bg-[#ffffff] hover:text-[#303030] w-[100%] md:w-auto md:bg-transparent py-4 md:p-0 '>About</motion.a>
      </motion.ul>
          )
        }
       
       
        
      </AnimatePresence>
       <ul  
        className={` hidden gap-2 md:gap-[3rem] md:flex md:flex-row absolute w-full top-[80px]  left-0  bg-black/90   md:bg-transparent  p-4 md:p-0   flex-col justify-center items-center md:static`}>
        <NavLink to={'/'} className='md:text-[#fff] text-white font-medium text-center transition-all duration-200 ease-in-out rounded-md md:hover:bg-transparent hover:bg-[#cccccc55] w-[100%] md:w-auto md:bg-transparent py-4 md:p-0 '>Home</NavLink>
        <NavLink to={'/popular'} className='md:text-[#fff] text-white font-medium text-center transition-all duration-200 ease-in-out rounded-md md:hover:bg-transparent hover:bg-[#cccccc55] w-[100%] md:w-auto md:bg-transparent py-4 md:p-0 '>Popular</NavLink>
        <NavLink to={'/tvshows'} className='md:text-[#fff] text-white font-medium text-center transition-all duration-200 ease-in-out rounded-md md:hover:bg-transparent hover:bg-[#cccccc55] w-[100%] md:w-auto md:bg-transparent py-4 md:p-0 '>TV Shows</NavLink>
        <NavLink to={'/upcoming'} className='md:text-[#fff] text-white font-medium text-center transition-all duration-200 ease-in-out rounded-md md:hover:bg-transparent hover:bg-[#cccccc55] w-[100%] md:w-auto md:bg-transparent py-4 md:p-0 '>Upcoming</NavLink>
        <NavLink to={'/about'} className='md:text-[#fff] text-white font-medium text-center transition-all duration-200 ease-in-out rounded-md md:hover:bg-transparent hover:bg-[#cccccc55] w-[100%] md:w-auto md:bg-transparent py-4 md:p-0 '>About</NavLink>
      </ul>

      <div className='flex items-center gap-4  justify-center'>
          <img src={Search} onClick={() => setSearchBar(true)} className={` w-[18px] md:w-[20px] cursor-pointer`} alt="" />
          <img onClick={()=> setNav(!nav)} src={nav ? exitBurger : Burger } alt="" className={` ${nav ? 'w-[24px]' : 'w-[24px]'} md:hidden cursor-pointer`} />
          
      </div>

      {/* searchModal */}
      <AnimatePresence>
        {searchBar && (<motion.div
    initial={{y:'-50px' , opacity:0}}
      animate={{ y: '0px', opacity: 1 }}
          transition={{ duration: .3, easeIn }}
          exit={{
            y:'-50px',opacity:0
          }}
          className={`${searchBar ? 'block' : 'hidden'}  absolute top-0 left-0 flex-col justify-center z-[100] bg-black/60 backdrop-blur-sm w-full h-screen flex items-center   `}>
        <div className='absolute top-10 right-10 flex items-center flex-col'>
          <img onClick={()=> setSearchBar(false)} src={exitBurger} alt="" className=' w-10 h-10 border-[1px] p-1 rounded-md cursor-pointer hover:opacity-70 transition-all
        duration-300 ease-in-out border-white ' />
        </div>
        
        <form action={`/search/${input}`} onSubmit={handlePreSearched} className='w-full flex items-center justify-center min-w-[200px] mt-32'>
          <img src={SerachIcon} alt="" className='relative left-8 w-5 h-5' />
          <input ref={searchBarRef} onChange={handleInput} type="text" className='w-[90%] md:w-[70%] outline-none border-none h-[3.4rem] placeholder:font-medium capitalize font-medium
           rounded-md pl-10 bg-[#e7e7e7e3] placeholder:text-[#494949] text-[#494949]
          text-sm' placeholder='Search Movies' />
           
        </form>
          <motion.div
          initial={{y:'-50px' , opacity:0}}
      animate={{ y: '0px', opacity: 1 }}
          transition={{ duration: .3, easeIn , delay:timing+=0.1 }}
          exit={{
            y:'-50px',opacity:0
          }}
            
            className={`${preSearched.length > 0 ? 'block' : 'hidden'} w-[90%] md:w-[70%] h-auto max-h-[300px] mt-2 p-2 relative bg-[#e7e7e7e3] rounded-md ml-4 overflow-y-auto  `}>
          {
            reversedArray.map(pre => (
              <Link onClick={() => { navigate(`search/${pre}`); location.reload()}}   className='flex gap-2 items-center hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-in-out rounded-md p-4 rouned-md '>
                 <img src={Pre} alt="Icon" className='w-4 h-4' />
                <p className='text-sm'>{ pre }</p>
               </Link>
            ))
          }
        </motion.div>
        <button onClick={handleClick}  className={`${preSearched.length > 0 ? 'block' : 'hidden'} text-sm hover:opacity-75 transition-all duration-300 ease-in-out text-white mt-2`}>clear serach History</button>
      </motion.div>) }

      </AnimatePresence>
   

</motion.div>

  )
}

export default NavBar

