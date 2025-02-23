
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [cardData, SetcardData] = useState([]);
  const [addToCart, SetaddToCart] = useState([]);

  const button_Click = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    SetcardData(response.data);
  };

  const DeleteFromCart = (idx) => {
    const copy_addToCart = [...addToCart];
    copy_addToCart.splice(idx, 1);
    SetaddToCart(copy_addToCart);
  };

  const AddToCart = (idx) => {
    SetaddToCart([...addToCart, cardData[idx]]);
  };

  const totalPrice = addToCart.reduce((sum, elem) => sum + elem.price, 0).toFixed(2);

  return (
    <div className="min-h-screen bg-[#F0F0F0] p-6">
 
      <div className="text-center">
        <button
          onClick={button_Click}
          className="bg-[#4682B4] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#5A738E] transition font-semibold"
        >
          Get Products
        </button>
      </div>

      <div className="flex gap-6 mt-6">
 
        <div className="w-3/4 bg-white p-6 rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-2xl font-semibold text-[#4682B4] mb-4">Products</h2>
          <div className="grid grid-cols-3 gap-4">
            {cardData.map((elem, idx) => (
              <div key={idx} className="bg-[#E0E6ED] p-4 rounded-lg shadow-md border border-gray-400">
                <img className="h-32 w-full object-contain rounded-2xl" src={elem.image} alt={elem.title} />
                <h3 className="text-lg font-semibold mt-2 text-[#2C3E50] truncate">{elem.title}</h3>
                <h3 className="text-[#4682B4] font-bold">${elem.price}</h3>
                <button
                  onClick={() => AddToCart(idx)}
                  className="bg-[#4682B4] text-white px-4 py-2 rounded-lg mt-2 hover:bg-[#5A738E] transition w-full font-semibold"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

     
        <div className="w-1/4 bg-white p-6 rounded-lg shadow-lg border border-gray-300 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold text-[#4682B4] mb-4">Shopping Cart</h2>
          <div className="space-y-4 flex-grow">
            {addToCart.length === 0 ? (
              <p className="text-gray-500 text-center">Your cart is empty</p>
            ) : (
              addToCart.map((elem, idx) => (
                <div key={idx} className="bg-[#E0E6ED] p-4 rounded-lg shadow-md border border-gray-400">
                  <img className="h-20 w-full object-contain rounded-2xl" src={elem.image} alt={elem.title} />
                  <h3 className="text-[#4682B4] font-bold mt-1">${elem.price}</h3>
                  <button
                    onClick={() => DeleteFromCart(idx)}
                    className="bg-red-500 text-white px-4 py-1 rounded-lg mt-2 hover:bg-red-600 transition w-full"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>

      
          <div className="mt-auto border-t border-gray-400 pt-4">
            <h3 className="font-semibold text-[#2C3E50]">Total Items: {addToCart.length}</h3>
            <h3 className="font-bold text-lg text-[#4682B4]">Total Price: ${totalPrice}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
