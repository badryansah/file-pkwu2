import React from 'react';  
import Navbar from './Navbar'; // Sesuaikan dengan jalur file Navbar  
  
function Fashion() {  
  return (  
    <>  
      <Navbar />  
      <div className="container mx-auto px-4 mt-4">  
        {/* Slider Gambar */}  
        <div className="relative">  
          <img  
            src="https://example.com/your-image.jpg" // Ganti dengan URL gambar yang sesuai  
            alt="Flash Sale"  
            className="w-full h-64 object-cover rounded-lg"  
          />  
        </div>  
  
        {/* Timer Flash Sales */}  
        <div className="text-center mt-4">  
          <h2 className="text-2xl font-bold">Today's Flash Sales</h2>  
          <div className="flex justify-center space-x-4 mt-2">  
            <div>  
              <span className="text-lg font-bold">03</span>  
              <p>Days</p>  
            </div>  
            <div>  
              <span className="text-lg font-bold">23</span>  
              <p>Hours</p>  
            </div>  
            <div>  
              <span className="text-lg font-bold">19</span>  
              <p>Minutes</p>  
            </div>  
            <div>  
              <span className="text-lg font-bold">56</span>  
              <p>Seconds</p>  
            </div>  
          </div>  
        </div>  
  
        {/* Daftar Produk */}  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">  
          {/* Contoh Produk */}  
          {[  
            { id: 1, name: 'Controller', discount: '-40%', image: 'https://example.com/controller.jpg' },  
            { id: 2, name: 'Controller', discount: '-35%', image: 'https://example.com/controller.jpg' },  
            { id: 3, name: 'Controller', discount: '-30%', image: 'https://example.com/controller.jpg' },  
            { id: 4, name: 'Perfume', discount: '-25%', image: 'https://example.com/perfume.jpg' },  
            { id: 5, name: 'Shirt', discount: '-25%', image: 'https://example.com/shirt.jpg' },  
          ].map(product => (  
            <div key={product.id} className="border rounded-lg p-4 relative">  
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded" />  
              <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">{product.discount}</div>  
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>  
              <div className="flex justify-between items-center mt-2">  
                <button className="text-gray-600">❤️</button>  
                <button className="text-gray-600">👁️</button>  
              </div>  
            </div>  
          ))}  
        </div>  
      </div>  
    </>  
  );  
}  
  
export default Fashion;  
