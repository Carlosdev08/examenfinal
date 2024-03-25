"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CardGallery = () => {
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    fetch("https://cafe-de-altura.vercel.app/api/products")
      .then((response) => 
      response.json())
      .then((data) => {

        console.log(data);
        const productsToShow = data.products.slice(0, 8);
           productsToShow.sort((a, d) => d.available - a.available)

        setProducts(productsToShow);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <>
        <div className="flex justify-center items-center text-center font-outfit font-semibold text-custom-shop text-2xl gap-8 p-8 mb-15">
    <h2 className='text-[#2A5B45] text-center '>Últimos orígenes</h2>
  </div>

  <div className="flex  justify-center items-center bg-custom-white gap-10 p-10 ">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
      {products?.map((product) => (
        <div
          key={product._id}
          className={`flex flex-col  items-center text-right bg-[#Ffffff] hover:bg-gray-200 border gap-2 p-6  ${
            product.available ? "bg-custom-white" : "bg-gray-200"
          }`}
        >
          <Image
            className="flex items-center justify-center gap-10"
            src={product.img_url}
            alt={product.name}
            width={200}
            height={200}
          />
          <h3 className="text-center font-outfit">{product.brand}</h3>
          <p className="text-gray-600 text-base flex items-center justify-center gap-4 p-2">
            {parseFloat(product.price).toFixed(2)}€
          </p>
          <div className="flex items-center justify-center font-outfit font-semibold text-sm leading-4 ">
            {product.available ? (
              <button className="font-semibold bg-[#2A5B45] text-white rounded-md py-2 px-4"
                onClick={() => handleAddToCart(product)}
                intent="primary"
                size="medium"
                roundness="round"
              >
                Añadir
              </button>
            ) : (
              <button className="text-[#E3DED7] p-2 rounded-md" disabled style={{ backgroundColor: "grey" }}>
                Agotado
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
    </>

  );
};

export default CardGallery;