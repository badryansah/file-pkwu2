import React from 'react';                          
import Navbar from './Navbar'; // Sesuaikan dengan jalur file Navbar                          
import Image from 'next/image';                        
import Loropiana from '@/app/aset/Loro Piana Shoes.jpg';                        
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import ikon media sosial dari react-icons  
  
function Gadget() {                          
  const products = [                          
    { id: 1, name: 'Controller', discount: '-40%', image: 'https://example.com/controller.jpg', price: '$100', rating: 4.5, reviews: 35 },                          
    { id: 2, name: 'Perfume', discount: '-25%', image: 'https://example.com/perfume.jpg', price: '$360', rating: 4.8, reviews: 95 },                          
    { id: 3, name: 'Shirt', discount: '-25%', image: 'https://example.com/shirt.jpg', price: '$50', rating: 4.2, reviews: 20 },                          
    { id: 4, name: 'Sneakers', discount: '-20%', image: 'https://example.com/sneakers.jpg', price: '$80', rating: 4.0, reviews: 15 },                                
    { id: 5, name: 'Jeans', discount: '-30%', image: 'https://example.com/jeans.jpg', price: '$70', rating: 4.3, reviews: 45 },                              
    { id: 6, name: 'Cap', discount: '-10%', image: 'https://example.com/cap.jpg', price: '$20', rating: 4.7, reviews: 60 },                              
    { id: 7, name: 'Watch', discount: '-50%', image: 'https://example.com/watch.jpg', price: '$150', rating: 4.9, reviews: 100 },                              
    { id: 8, name: 'Belt', discount: '-15%', image: 'https://example.com/belt.jpg', price: '$40', rating: 4.1, reviews: 25 },                              
    { id: 9, name: 'Hat', discount: '-20%', image: 'https://example.com/hat.jpg', price: '$30', rating: 4.4, reviews: 50 },                              
    { id: 10, name: 'Socks', discount: '-10%', image: 'https://example.com/socks.jpg', price: '$10', rating: 4.6, reviews: 30 },                              
    { id: 11, name: 'Jacket', discount: '-30%', image: 'https://example.com/jacket.jpg', price: '$200', rating: 4.5, reviews: 60 },                              
    { id: 12, name: 'Shoes', discount: '-25%', image: 'https://example.com/shoes.jpg', price: '$120', rating: 4.8, reviews: 80 },                              
  ];                
              
  // Membagi produk menjadi bagian dengan 4 produk per bagian                
  const chunkedProducts = [];                
  for (let i = 0; i < products.length; i += 4) {                
    chunkedProducts.push(products.slice(i, i + 4));                
  }                
                
  return (                      
    <>                      
      <Navbar />                      
      <div className="container mx-auto px-4 mt-4">                      
        {/* Slider Gambar */}                      
        <div className="relative">                      
          <Image                       
            src={Loropiana}                      
            alt="Loro Piana"                      
            className="w-full h-[300px] object-cover"                  
            width={400}                      
            height={200}                      
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
              
        {/* Judul Produk dengan Garis Vertikal */}                      
        {chunkedProducts.map((chunk, index) => (                      
          <div key={index} className="mt-8">                      
            <div className="flex items-center">                      
              <div className="border-l-2 border-gray-300 h-8 mr-2"></div> {/* Garis Vertikal */}                      
              <h2 className="text-xl font-bold">Our Products</h2>                      
            </div>                    
                
            {/* Daftar Produk per Bagian */}                      
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">                      
              {chunk.map(product => (                      
                <div key={product.id} className="border rounded-lg p-4 relative">                      
                  <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded" />                      
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">{product.discount}</div>                      
                  <h3 className="text-lg font-semibold mt-2">{product.name}</h3>                      
                  <p className="text-lg font-bold">{product.price}</p>                      
                  <div className="flex items-center mt-1">                      
                    <span className="text-yellow-500">{"★".repeat(Math.floor(product.rating))}</span>                      
                    <span className="text-gray-500">{"★".repeat(5 - Math.floor(product.rating))}</span>                      
                    <span className="text-gray-500 ml-1">({product.reviews})</span>                      
                  </div>                      
                  <div className="flex justify-between items-center mt-2">                      
                    <button className="text-gray-600">❤️</button>                      
                    <button className="text-gray-600">👁️</button>                      
                  </div>                      
                  <button className="mt-2 w-full bg-brown-500 text-black py-2 rounded">Add To Cart</button>                      
                </div>                      
              ))}                      
            </div>                      
          </div>                      
        ))}       
      
      </div>                      
        
      {/* Footer */}                      
      <footer className="bg-gray-900 text-white py-10">                      
        <div className="container mx-auto px-4">                      
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">                      
            {/* Tentang Grab and ship.com */}                      
            <div>                      
              <h3 className="text-lg font-bold mb-4">Tentang Grab and ship.com</h3>                      
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                      
            </div>                      
              
            {/* Promo & Layanan */}                      
            <div>                      
              <h3 className="text-lg font-bold mb-4">Promo & Layanan</h3>                      
              <ul className="space-y-2">                      
                <li><a href="#" className="text-gray-400 hover:text-white">Promo Hari Ini</a></li>                      
                <li><a href="#" className="text-gray-400 hover:text-white">Layanan Pengiriman</a></li>                      
                <li><a href="#" className="text-gray-400 hover:text-white">Garansi Produk</a></li>                      
                <li><a href="#" className="text-gray-400 hover:text-white">Syarat & Ketentuan</a></li>                      
              </ul>                      
            </div>                      
              
            {/* Pusat Bantuan */}                      
            <div>                      
              <h3 className="text-lg font-bold mb-4">Pusat Bantuan</h3>                      
              <ul className="space-y-2">                      
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>                      
                <li><a href="#" className="text-gray-400 hover:text-white">Hubungi Kami</a></li>                      
                <li><a href="#" className="text-gray-400 hover:text-white">Pengembalian Produk</a></li>                      
                <li><a href="#" className="text-gray-400 hover:text-white">Pengaduan</a></li>                      
              </ul>                      
            </div>                      
              
            {/* Grab and ship */}                      
            <div>                      
              <h3 className="text-lg font-bold mb-4">Grab and ship</h3>                      
              <p className="text-gray-400">Ikuti kami di media sosial:</p>                      
              <div className="flex space-x-4 mt-2">                      
                <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>                      
                <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>                      
                <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>                      
                <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={24} /></a>                      
              </div>                      
              <button className="mt-4 w-full bg-gray-800 text-white py-2 rounded">English</button>                      
            </div>                      
          </div>                      
        </div>                      
      </footer>                      
    </>                      
  );                      
}                      
                    
export default Gadget;                 
