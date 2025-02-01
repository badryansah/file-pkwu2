"import React from 'react'; 
import Link from 'next/link';
import {   
  IoMenu,  
  IoSearch,   
  IoHeartOutline,   
  IoCartOutline,   
  IoPersonOutline,   
  IoCaretBackOutline,
  IoCaretForwardOutline,   
  IoHeart,   
  IoEye,   
  IoPhonePortrait,   
  IoLaptop,   
  IoWatch,   
  IoCamera,   
  IoHeadset,   
  IoGameController   
} from 'react-icons/io5';  

function Navbar() {
  return (
      <nav className="bg-white shadow-sm px-6 py-4">  
              <div className="max-w-7xl mx-auto">  
                <div className="flex items-center justify-between">  
                  <div className="flex items-center space-x-4">  
                    <button className="text-gray-600">  
                      <IoMenu className="text-2xl" />  
                    </button>  
                    <h1 className="text-xl font-bold text-black">Grab and Ship</h1>  
                  </div>  
        
                  <div className="flex-1 max-w-xl mx-8">  
                    <div className="relative">  
                      <input  
                        type="text"  
                        placeholder="search..."  
                        className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10"  
                      />  
                      <button className="absolute right-3 top-2.5 text-gray-400">  
                        <IoSearch className="text-2xl" />  
                      </button>  
                    </div>  
                  </div>  
        
                  <div className="flex items-center gap-4">  
                    <button className="text-black">  
                      <IoHeartOutline className="text-2xl" />  
                    </button>  
                    <button className="text-black">  
                      <IoCartOutline className="text-2xl" />  
                    </button>  
                    <button className="px-4 py-1.5 bg-[#C2A58C] text-white rounded-full text-sm">  
                      Sign up  
                    </button>  
                    <button className="px-4 py-1.5 border border-[#C2A58C] text-[#C2A58C] rounded-full text-sm">  
                      Login  
                    </button>  
                    <button className="text-black">  
                      <IoPersonOutline className="text-2xl" />  
                    </button>  
                  </div>  
                </div>  
        
      {/* Navigasi Halaman */}
      <div className="mt-4 flex justify-center">  
              <div className="flex items-center space-x-4 mx-auto">  
                <button className="px-6 py-2 bg-gray-100 rounded-full text-black hover:bg-gray-200">All Category</button>  
                <button className="px-6 py-2 bg-gray-100 rounded-full text-black hover:bg-gray-200">Fashion</button>  
                <button className="px-6 py-2 bg-gray-100 rounded-full text-black hover:bg-gray-200">Gadget</button>  
                <button className="px-6 py-2 bg-gray-100 rounded-full text-black hover:bg-gray-200">Aksesoris</button>  
                <button className="px-6 py-2 bg-gray-100 rounded-full text-black hover:bg-gray-200">Perlengkapan rumah</button>  
                <button className="px-6 py-2 bg-gray-100 rounded-full text-black hover:bg-gray-200">Lainnya</button>  
              </div>  
            </div>  
          </div>  
        </nav>  
  );
}

export default Navbar; "