import React from 'react';

const ComponentB = ({ x }) => {
    return (
        <div>
            <h2 className='font-serif font-medium mb-2 '>ComponentB</h2>
            <p className=' border  text-center flex flex-row justify-center items-center p-5 bg-teal-600 mb-4'>x = {x}</p>
        </div>
    );
};

export default ComponentB;
