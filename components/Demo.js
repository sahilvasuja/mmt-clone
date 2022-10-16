import React from 'react'

const Demo = ({isvisible,onClose}) => {
    if(!isvisible) return null;
  return (
    <>

   <div className='flex flex-row bg-transparent justify-around items-center absolute top-0 left-0 bottom-0 right-0 z-40  '>
    <div className='text-2xl h-[700px] text-white bg-yellow-400 '>hello
    <button onClick={onClose}>X</button>
    </div>
    
    </div>
    </>
  )
}

export default Demo