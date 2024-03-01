
"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { UserRound } from 'lucide-react'

const CardGenerator = () => {

    const [name, setName] = useState('');
    const [collegeName, setCollegeName] = useState('');
    const [location, setLocation] = useState('');
    const [card, setCard] = useState(null);
    const [image, setImage] = useState('');
    

    const generateCard = () => {
        
        setCard({name, collegeName, location, image })
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }
  return (
    <div className=" mx-auto p-4 bg-origin-border font-outfit">
        <h2 className='text-center bg-purple-700 font-outfit font-semibold text-white p-5' >ID Card Generator.</h2>
    <div className="flex justify-between border">
      <div className="w-1/2 p-4">
        <h2 className="text-lg font-semibold mb-4 text-center flex items-center justify-center">Input Form
</h2>
        <div className="mb-2">
          <label className="block mb-1">Enter Name:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="w-full border-2 p-2"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Enter College Name:</label>
          <input
            type="text"
            onChange={(e) => setCollegeName(e.target.value)}
            className="w-full border-2 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Enter Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border-2 p-2"
          />
        </div>
        <div className=' mb-4'>
            <label className="block mb-1">Upload Photo:</label>
            <input type="file" onChange={handleImageChange} className="w-full border-2 p-2" />

        </div>  
        <button
          onClick={generateCard}
          className="w-32 text-white font-outfit font-semibold bg-purple-600  p-2 rounded"
        >
          Generate Card
        </button>
      </div>
{card && (
  <div className="w-1/2 p-4 border border-collapse border-spacing-11  bg-{#cccc} ">
    <h2 className="text-lg font-semibold mb-10 text-center">Generated Card</h2>
    <div className="border-2 p-4 flex flex-row items-center">
      <div style={{ 
        backgroundImage: `url(${card.image})`, 
        backgroundSize: 'cover', 
        width: '200px', 
        height: '200px' 
      }}>
        <UserRound size={100} color="bg-transpàrent" />
      </div>
      <div className="ml-4">
        <p><strong>Name:</strong> {card.name}</p>
        <p><strong>College Name:</strong> {card.collegeName}</p>
        <p><strong>Location:</strong> {card.location}</p>
      </div>
    </div>
  </div>
)}
    </div>
  </div>
);
  
}

export default CardGenerator
