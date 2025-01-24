import React from 'react';        
import { FaShoppingCart } from "react-icons/fa";        
import { MdFavorite } from "react-icons/md";        
import { IoSearch } from 'react-icons/io5';        
import { GiHamburgerMenu } from "react-icons/gi";      
      
function Navbar() {          
  return (          
    <nav className="bg-white shadow-md px-4 py-2 flex flex-col">          
      {/* Top Section: Hamburger, Title, Search Bar, and Icons */}          
      <div className="flex items-center justify-center">          
        <button className="text-gray-600 mr-4">          
          <GiHamburgerMenu size={24} />          
        </button>          
      
        <h1 className="text-xl font-bold mx-4">Grab and Ship</h1>          
      
        <div className="relative flex-1 max-w-lg mx-4">        
          <input        
            type="text"        
            placeholder="Search..."        
            className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"        
          />        
          <button className="absolute right-2 top-2 text-gray-500 focus:outline-none">        
            <IoSearch />        
          </button>        
        </div>        
    
        <div className="flex items-center space-x-4">        
          <button className="text-gray-600">        
            <MdFavorite size={24} />        
          </button>        
          <button className="text-gray-600">        
            <FaShoppingCart size={24} />        
          </button>        
          <button className="text-gray-600">Sign up</button>        
          <button className="text-gray-600">Login</button>        
        </div>        
      </div>        
      
      {/* Category Buttons */}        
      <div className="flex space-x-4 mt-2 justify-center">        
        <button className="px-4 py-2 bg-gray-200 rounded-full text-gray-700">All Category</button>        
        <button className="px-4 py-2 bg-gray-200 rounded-full text-gray-700">Fashion</button>        
        <button className="px-4 py-2 bg-gray-200 rounded-full text-gray-700">Gadget</button>        
        <button className="px-4 py-2 bg-gray-200 rounded-full text-gray-700">Aksesoris</button>        
        <button className="px-4 py-2 bg-gray-200 rounded-full text-gray-700">Perlengkapan Rumah</button>        
        <button className="px-4 py-2 bg-gray-200 rounded-full text-gray-700">Lainnya</button>        
      </div>        
    </nav>        
  );        
}        
        
export default Navbar;      
