"use client";
import React, { useState } from 'react';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

const ComponentA = () => {
    const [x, setX] = useState(0);
    const handleUpdateX = (newValue) => {
      setX(newValue);
  };

    return (
        <div className='w-48 m-5 p-5 flex flex-col gap-10 text-white '>
          <div className=' max-w-screen-xl m-5 p-5 flex flex-col gap-20 items-center'>

            <h2 className='font-serif font-medium mb-2 '>ComponentA</h2>
            <ComponentB x={x} />
            <ComponentC x={x} onUpdateX={handleUpdateX}  className=""/>
          </div>
            
        </div>
    );
};

export default ComponentA;
