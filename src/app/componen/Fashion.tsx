import React from 'react';  
import Navbar from './Navbar'; // Import the Navbar component  
import Image from 'next/image'; // Import the Next.js Image component  
import Loropiana from '@/app/aset/Loro Piana Shoes.jpg'; // Import the Loro Piana image  
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHeart, FaEye } from 'react-icons/fa'; // Import social media icons  
import baju from '@/app/aset/Abercrombie’s $50 Knit Polos Have No Business Being This Good.jpg';  
import jam from '@/app/aset/Christophe Arden CAF3001 MDBIPBA Jam Tangan Pria.jpg';  
import tas from '@/app/aset/Clutch Handbag Pria - Tas tangan Clutch Pria _ Pouch dompet Pria ToWn.jpg';  
import parfum from '@/app/aset/Eros EDP 100 ml.jpg';  
import ipat from '@/app/aset/Ikat Pinggang Wanita Sabuk Square Kulit PU Leather Belt Fashion Korea.jpg';  
import samba from '@/app/aset/adidas samba.jpg';  
import wobeg from '@/app/aset/MEDIUM AVA TRIOMPHE.jpg';  
import celana from '@/app/aset/Carhartt WIP Landon Pant.jpg';  
import dipeg from '@/app/aset/Prada Small Logo-plaque.jpg';  
import shirt from '@/app/aset/Seek Graphic Tee - Litlookz Studio.jpg';  
import hoodie from '@/app/aset/Oversized Hoodie Washed Grey.jpg';  
  
// Define the Fashion component  
function Fashion() {  
  // Define the products array with product details  
  const products = [  
    { id: 1, name: 'Polo', discount: '-40%', image: baju, price: '$100', rating: 4.5, reviews: 35 },  
    { id: 2, name: 'Jam Tangan Pria', discount: '-25%', image: jam, price: '$360', rating: 4.8, reviews: 95 },  
    { id: 3, name: 'Clutch Pria', discount: '-25%', image: tas, price: '$50', rating: 4.2, reviews: 20 },  
    { id: 4, name: 'Parfum Eros', discount: '-20%', image: parfum, price: '$80', rating: 4.0, reviews: 15 },  
    { id: 5, name: 'Ikat Pinggang Wanita', discount: '-30%', image: ipat, price: '$70', rating: 4.3, reviews: 45 },  
    { id: 6, name: 'Adidas Samba', discount: '-10%', image: samba, price: '$20', rating: 4.7, reviews: 60 },  
    { id: 7, name: 'Loropiana', discount: '-50%', image: Loropiana, price: '$150', rating: 4.9, reviews: 100 },  
    { id: 8, name: 'Tas Wanita', discount: '-15%', image: wobeg, price: '$40', rating: 4.1, reviews: 25 },  
    { id: 9, name: 'Jeans', discount: '-20%', image: celana, price: '$30', rating: 4.4, reviews: 50 },  
    { id: 10, name: 'Dompet Wanita', discount: '-10%', image: dipeg, price: '$10', rating: 4.6, reviews: 30 },  
    { id: 11, name: 'Kaos', discount: '-30%', image: shirt, price: '$200', rating: 4.5, reviews: 60 },  
    { id: 12, name: 'Hoodie', discount: '-25%', image: hoodie, price: '$120', rating: 4.8, reviews: 80 },  
  ];  
  
  // Split the products array into chunks of 4 products each  
  const chunkedProducts = [];  
  for (let i = 0; i < products.length; i += 4) {  
    chunkedProducts.push(products.slice(i, i + 4));  
  }  
  
  return (  
    <>  
      <Navbar /> {/* Render the Navbar component */}  
  
      <div className="container mx-auto px-4 mt-4">  
        {/* Slider Image */}  
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
  
        {/* Product Sections */}  
        {chunkedProducts.map((chunk, index) => (  
          <div key={index} className="mt-8">  
            <div className="flex items-center">  
              <div className="border-l-2 border-gray-300 h-8 mr-2"></div> {/* Vertical Line */}  
              <h2 className="text-xl font-bold">Our Products</h2>  
            </div>  
  
            {/* Product Grid */}  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">  
              {chunk.map(product => (  
                <div key={product.id} className="border rounded-lg p-4 relative bg-white">  
                  {/* Product Image */}  
                  <div className="relative w-full h-48">  
                    <Image  
                      src={product.image}  
                      alt={product.name}  
                      className="w-full h-full object-cover rounded-t-lg"  
                      layout="fill"  
                    />  
                  </div>  
                  {/* Discount Badge */}  
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">  
                    {product.discount}  
                  </div>  
                  {/* Product Name */}  
                  <h3 className="text-lg font-semibold mt-2">{product.name}</h3>  
                  {/* Product Price */}  
                  <p className="text-lg font-bold">{product.price}</p>  
                  {/* Product Rating */}  
                  <div className="flex items-center mt-1">  
                    <span className="text-yellow-500">  
                      {"★".repeat(Math.floor(product.rating))}  
                    </span>  
                    <span className="text-gray-500">  
                      {"★".repeat(5 - Math.floor(product.rating))}  
                    </span>  
                    <span className="text-gray-500 ml-1">({product.reviews})</span>  
                  </div>  
                  {/* Product Actions */}  
                  <div className="flex justify-between items-center mt-2">  
                    <FaHeart className="text-gray-600" />  
                    <FaEye className="text-gray-600" />  
                  </div>  
                  {/* Add to Cart Button */}  
                  <button className="mt-2 w-full bg-brown-500 text-white py-2 rounded">  
                    Add To Cart  
                  </button>  
                </div>  
              ))}  
            </div>  
          </div>  
        ))}  
      </div>  
  
      {/* Footer */}  
      <footer className="bg-white text-black py-10">  
        <div className="container mx-auto px-4">  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">  
            {/* About Grab and ship.com */}  
            <div>  
              <h3 className="text-lg font-bold mb-4">Tentang Grab and ship.com</h3>  
              <p className="text-gray-800">  
                Tentang Kami, 
                Visi & Misi,
                Karir,
                Blog,
                Solusi Logustik  
              </p>  
            </div>  
  
            {/* Promo & Layanan */}  
            <div>  
              <h3 className="text-lg font-bold mb-4">Promo & Layanan</h3>  
              <ul className="space-y-2">  
                <li>  
                  <a href="#" className="text-gray-800 hover:text-gray-600">  
                    Promo Hari Ini  
                  </a>  
                </li>  
                <li>  
                  <a href="#" className="text-gray-800 hover:text-gray-600">  
                    Layanan Pengiriman  
                  </a>  
                </li>  
                <li>  
                  <a href="#" className="text-gray-800 hover:text-gray-600">  
                    Garansi Produk  
                  </a>  
                </li>  
                <li>  
                  <a href="#" className="text-gray-800 hover:text-gray-600">  
                    Syarat & Ketentuan  
                  </a>  
                </li>  
              </ul>  
            </div>  
  
            {/* Pusat Bantuan */}  
            <div>  
              <h3 className="text-lg font-bold mb-4">Pusat Bantuan</h3>  
              <ul className="space-y-2">  
                <li>  
                  <a href="#" className="text-gray-800 hover:text-gray-600">  
                    FAQ  
                  </a>  
                </li>  
                <li>  
                  <a href="#" className="text-gray-800 hover:text-gray-600">  
                    Hubungi Kami  
                  </a>  
                </li>  
                <li>  
                  <a href="#" className="text-gray-800 hover:text-gray-600">  
                    Pengembalian Produk  
                  </a>  
                </li>  
                <li>  
                  <a href="#" className="text-gray-800 hover:text-gray-600">  
                    Pengaduan  
                  </a>  
                </li>  
              </ul>  
            </div>  
  
            {/* Grab and ship */}  
            <div>  
              <h3 className="text-lg font-bold mb-4">Grab and ship</h3>  
              <p className="text-gray-800">Ikuti kami di media sosial:</p>  
              <div className="flex space-x-4 mt-2">  
                <a href="#" className="text-gray-800 hover:text-gray-600">  
                  <FaFacebook size={24} />  
                </a>  
                <a href="#" className="text-gray-800 hover:text-gray-600">  
                  <FaTwitter size={24} />  
                </a>  
                <a href="#" className="text-gray-800 hover:text-gray-600">  
                  <FaInstagram size={24} />  
                </a>  
                <a href="#" className="text-gray-800 hover:text-gray-600">  
                  <FaYoutube size={24} />  
                </a>  
              </div>  
              <button className="mt-4 w-full bg-gray-200 text-black py-2 rounded">  
                English  
              </button>  
            </div>  
          </div>  
        </div>  
      </footer>  
    </>  
  );  
}  
  
export default Fashion;  
