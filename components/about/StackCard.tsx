import Image from 'next/image'
import React from 'react'

const StackCard = ({image, title}: any) => {
  return (
    <div className='w-[60px] sm:w-[100px] text-center m-[20px] flex flex-col items-center justify-between'>
        <Image className='mx-auto ' src={image} alt={title}/>
        <div className='font-[500] max-sm:text-[15px] whitespace-nowrap mt-[10px]'>{title}</div>
    </div>
  )
}

export default StackCard