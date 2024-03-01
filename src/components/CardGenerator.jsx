

"use client"
import React, {useState} from 'react'

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
        }
    }
  return (
    <div className=" mx-auto p-4 bg-origin-border font-outfit">
    <div className="flex justify-between border">
      <div className="w-1/2 p-4">
        <h2 className="text-lg font-semibold mb-4 text-center flex items-center justify-center">ID Card Generator.
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
          className="w-full bg-purple-600  p-2 rounded"
        >
          Generate Card
        </button>
      </div>
      {card && (
        <div className="w-1/2 p-4">
          <h2 className="text-lg font-semibold mb-4">Generated Card</h2>
          <div className="border-2 p-4">
            <p><strong>Name:</strong> {card.name}</p>
            <p><strong>College Name:</strong> {card.collegeName}</p>
            <p><strong>Location:</strong> {card.location}</p>
          </div>
        </div>
      )}
    </div>
  </div>
);
  
}

export default CardGenerator
