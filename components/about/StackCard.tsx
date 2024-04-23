import Image from 'next/image'
import React from 'react'

const StackCard = ({image, title}: any) => {
  return (
    <div className='w-[100px] text-center m-[20px] flex flex-col items-center justify-between'>
        <Image className='mx-auto ' src={image} alt={title}/>
        <div className='font-[500] mt-[10px]'>{title}</div>
    </div>
  )
}

export default StackCard