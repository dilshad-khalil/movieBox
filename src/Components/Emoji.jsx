import React from 'react'


const Emoji = ({Emoji , width , height}) => {
  return (
    <img src={Emoji} className={`w-${width} h-${height}`} alt="" />
  )
}

export default Emoji