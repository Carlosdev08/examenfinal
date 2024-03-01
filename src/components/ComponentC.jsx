import React from 'react'

const ComponentC = ({x, onUpdateX } ) => {

    const handleIncrement = () => {
        onUpdateX(x + 1);
    }

  return (
   <div>
      <h2 className='font-serif font-medium mb-2 '>ComponentC</h2>
      <p className=' border  text-center flex flex-row justify-center items-center p-5 bg-teal-600 mb-4'>x = {x}</p>
      <button className=' border w-24 text-center flex justify-center h-16 p-5 bg-teal-600' onClick={handleIncrement}> X++ </button>
    </div>
  )
}

export default ComponentC