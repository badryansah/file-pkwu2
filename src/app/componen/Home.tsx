  import React from 'react';    
  import Image from 'next/image';    
  import rapllauren from '@/app/aset/Ralph Lauren Polo Shirt.jpg';    
  import samba from '@/app/aset/adidas samba.jpg';  
  import Nike from '@/app/aset/nike.jpg';   
  import speaker from '@/app/aset/speaker.jpg';   
  import stik from '@/app/aset/PlayStation 5  Wireless Controller.jpg';    
  import parfum from '@/app/aset/Eros EDP 100 ml.jpg';  
  import  ps5 from '@/app/aset/ps5.jpg';   
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

  function Home() {  
    return (  
      <div className="min-h-screen bg-white">  
        {/* Navbar */}    
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
    
            {/* Category Navigation */}  
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
    
        <main className="max-w-7xl mx-auto px-6 py-8">  
          {/* Hero Banner */}  
          <div className="rounded-lg overflow-hidden mb-8">  
            <Image   
              src={Nike}  
              alt="Nike shoes banner"  
              className="w-full h-[400px] object-cover"  
              width={1200}  
              height={400}  
            />  
          </div>  
    
          {/* Flash Sales */}  
          <section className="mb-12">  
            <div className="flex items-center gap-2 mb-6">  
              <div className="w-1 h-6 bg-[#C2A58C]"></div>  
              <h2 className="text-base text-[#C2A58C]">Today's</h2>  
            </div>  
    
            <div className="flex items-center justify-between mb-6">  
              <div className="flex items-center gap-2">  
                <h2 className="text-2xl font-bold text-black">Flash Sales</h2>  
                <div className="flex gap-4 ml-8">  
                  <div className="text-center">  
                    <div className="text-lg font-bold text-black">03</div>  
                    <div className="text-sm text-gray-500">Days</div>  
                  </div>  
                  <div className="text-center">  
                    <div className="text-lg font-bold text-black">23</div>  
                    <div className="text-sm text-gray-500">Hours</div>  
                  </div>  
                  <div className="text-center">  
                    <div className="text-lg font-bold text-black">19</div>  
                    <div className="text-sm text-gray-500">Minutes</div>  
                  </div>  
                  <div className="text-center">  
                    <div className="text-lg font-bold text-black">56</div>  
                    <div className="text-sm text-gray-500">Seconds</div>  
                  </div>  
                </div>  
              </div>  
              <div className="flex gap-2">  
                <button className="p-2 rounded-full bg-gray-100">  
                  <IoCaretBackOutline className="text-2xl text-black" />  
                </button>  
                <button className="p-2 rounded-full bg-gray-100">  
                  <IoCaretForwardOutline className="text-2xl text-black" />  
                </button>  
              </div>  
            </div>  
    
            <div className="grid grid-cols-5 gap-6">  
              {[  
                {  
                  img: stik,  
                  name: "HAVIT HV-G92 Gamepad",  
                  price:399,  
                  originalPrice: 320,  
                  discount: 40,  
                  rating: 5,  
                  reviews: 88  
                },  
                {  
                  img: stik,  
                  name: "AK-900 Wired Keyboard",  
                  price: 399,  
                  originalPrice: 1960,  
                  discount: 35,  
                  rating: 4,  
                  reviews: 75  
                },  
                {  
                  img: stik,  
                  name: "IPS LCD Gaming Monitor",  
                  price: 399,   
                  originalPrice: 370,  
                  discount: 30,  
                  rating: 5,  
                  reviews: 99  
                },  
                {  
                  img: parfum,  
                  name: "S-Series Comfort Chair",  
                  price: 399,  
                  originalPrice: 375,  
                  discount: 25,  
                  rating: 4.5,  
                  reviews: 99  
                },  
                {  
                  img: rapllauren,  
                  name: "S-Series Office Chair",  
                  price: 399,  
                  originalPrice: 375,  
                  discount: 25,  
                  rating: 4.5,  
                  reviews: 99  
                }  
              ].map((item, index) => (  
                <div key={index} className="bg-white rounded-sm border border-gray-100 p-4">  
                  <div className="relative">  
                    <Image   
                      src={item.img}  
                      alt={item.name}  
                      className="w-full h-48 object-cover rounded-sm mb-4"  
                      width={200}  
                      height={200}  
                    />  
                    <span className="absolute top-2 left-2 bg-[#DB4444] text-white text-xs px-2 py-1 rounded">  
                      -{item.discount}%  
                    </span>  
                    <div className="absolute top-2 right-2 flex flex-col gap-2">  
                      <button className="p-1.5 bg-white rounded-full shadow-sm">  
                        <IoHeart className="text-black" />  
                      </button>  
                      <button className="p-1.5 bg-white rounded-full shadow-sm">  
                        <IoEye className="text-black" />  
                      </button>  
                    </div>  
                  </div>  
                  <h3 className="font-medium text-black mb-2">{item.name}</h3>  
                  <div className="flex items-center gap-2 mb-2">  
                    <span className="text-[#DB4444] font-medium">${item.price}</span>  
                    <span className="text-gray-400 line-through">${item.originalPrice}</span>  
                  </div>  
                  <div className="flex items-center gap-2">  
                    <div className="flex text-yellow-400">  
                      {'★'.repeat(Math.floor(item.rating))}  
                    </div>  
                    <span className="text-sm text-gray-500">({item.reviews})</span>  
                  </div>  
                  <button className="w-full mt-4 py-2 bg-[#C2A58C] text-white rounded-sm text-sm">  
                    Add To Cart  
                  </button>  
                </div>  
              ))}  
            </div>  
    
            <div className="flex justify-center mt-8">  
              <button className="px-12 py-3 bg-[#C2A58C] text-white rounded-sm">  
                View All Products  
              </button>  
            </div>  
          </section>  
    
          {/* Category */}  
          <section className="mb-12">  
            <div className="flex items-center gap-2 mb-6">  
              <div className="w-1 h-6 bg-[#C2A58C]"></div>  
              <h2 className="text-base text-bold text-[#C2A58C]">Categories</h2>  
            </div>  
    
            <div className="flex items-center justify-between mb-8">  
              <h2 className="text-2xl font-bold text-black">Browse By Category</h2>  
              <div className="flex gap-2">  
                <button className="p-2 rounded-full bg-gray-100">  
                  <IoCaretBackOutline className="text-2xl text-black" />  
                </button>  
                <button className="p-2 rounded-full bg-gray-100">  
                  <IoCaretForwardOutline className="text-2xl text-black" />  
                </button>  
              </div>  
            </div>  
    
            <div className="grid grid-cols-6 gap-4">  
              {[  
                { name: 'Phones', icon: <IoPhonePortrait className="text-3xl mb-4" />, active: false },    
                { name: 'Computers', icon: <IoLaptop className="text-3xl mb-4" />, active: false },    
                { name: 'SmartWatch', icon: <IoWatch className="text-3xl mb-4" />, active: false },    
                { name: 'Camera', icon: <IoCamera className="text-3xl mb-4" />, active: false },    
                { name: 'HeadPhones', icon: <IoHeadset className="text-3xl mb-4" />, active: false },    
                { name: 'Gaming', icon: <IoGameController className="text-3xl mb-4" />, active: false }    
              ].map((category, index) => (    
                <div     
                key={index}     
                className={`flex flex-col items-center justify-center p-8 rounded-sm ${    
                  category.active     
                    ? 'bg-[#C2A58C] text-white'     
                    : 'bg-white border border-gray-100 hover:border-[#C2A58C] cursor-pointer text-black'    
                }`}        
                >    
                {category.icon}    
                <span className={`text-sm font-medium ${category.active ? 'text-white' : 'text-black'}`}>    
                  {category.name}    
                </span>    
              </div>    
            ))}    
          </div>  
          </section>  
    
          {/* This Month */}  
          <section className="mb-12">  
            <div className="flex items-center gap-2 mb-6">  
              <div className="w-1 h-6 bg-[#C2A58C]"></div>  
              <h2 className="text-base text-[#C2A58C]">This Month</h2>  
            </div>  
    
            <div className="flex items-center justify-between mb-8">  
              <h2 className="text-2xl font-bold text-black">Produk Terbaik di Amerika</h2>  
              <button className="px-6 py-2 bg-[#C2A58C] text-white rounded-sm">View All</button>  
            </div>  
    
            <div className="grid grid-cols-4 gap-6">  
              {[  
                {  
                  img: rapllauren,  
                  name: "The north coat",  
                  price: "399",  
                  originalPrice: "360",  
                  rating: 5,  
                  reviews: 65  
                },  
                {  
                  img: parfum,  
                  name: "Gucci duffle bag",  
                  price: "399",  
                  originalPrice: "1160",  
                  rating: 5,  
                  reviews: 65  
                },  
                {  
                  img: stik,  
                  name: "RGB liquid CPU Cooler",  
                  price: "399",  
                  originalPrice: "170",  
                  rating: 5,  
                  reviews: 65  
                },  
                {  
                  img: samba,  
                  name: "Small BookSelf",  
                  price: "399",  
                  originalPrice: null,  
                  rating: 5,  
                  reviews: 65  
                }  
              
              ].map((item, index) => (  
                <div key={index} className="bg-white rounded-sm border border-gray-100 p-4">  
                  <div className="relative">  
                    <Image   
                      src={item.img}  
                      alt={item.name}  
                      className="w-full h-48 object-cover rounded-sm mb-4"  
                      width={200}  
                      height={200}  
                    />  
                    <div className="absolute top-2 right-2 flex flex-col gap-2">  
                      <button className="p-1.5 bg-white rounded-full shadow-sm">  
                        <IoHeart className="text-black" />  
                      </button>  
                      <button className="p-1.5 bg-white rounded-full shadow-sm">  
                        <IoEye className="text-black" />  
                      </button>  
                    </div>  
                  </div>  
                  <h3 className="font-medium text-black mb-2">{item.name}</h3>  
                  <div className="flex items-center gap-2 mb-2">  
                    <span className="text-[#DB4444] font-medium">${item.price}</span>  
                    {item.originalPrice && (  
                      <span className="text-gray-400 line-through">${item.originalPrice}</span>  
                    )}  
                  </div>  
                  <div className="flex items-center gap-2">  
                    <div className="flex text-yellow-400">  
                      {'★'.repeat(Math.floor(item.rating))}  
                    </div>  
                    <span className="text-sm text-gray-500">({item.reviews})</span>  
                  </div>  
                </div>  
              ))}  
            </div>  
     </section>  

{/* Enhanced Music Experience Section */}
<section className="mb-12">
  <div className="relative bg-[#F3F2EE] text-black  rounded-lg p-12 flex items-center">
    <div className="flex-1">
      <p className="text-black-600 mb-2">Categories</p>
      <h2 className="text-4xl font-bold mb-8">
        Enhance Your<br />Music Experience
      </h2>
      <div className="flex gap-8 mb-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
            <span className="text-xl font-bold">23</span>
          </div>
          <span className="text-sm">Hours</span>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
            <span className="text-xl font-bold">05</span>
          </div>
          <span className="text-sm">Days</span>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
            <span className="text-xl font-bold">59</span>
          </div>
          <span className="text-sm">Minutes</span>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
            <span className="text-xl font-bold">35</span>
          </div>
          <span className="text-sm">Seconds</span>
        </div>
      </div>
      <button className="px-8 py-3 bg-[#C2A58C] text-white rounded-md">
        Buy Now!
      </button>
    </div>
    <div className="flex-1">
      <Image
        src={speaker}
        alt="JBL Speaker"
        className="w-full h-auto object-contain"
        width={500}
        height={500}
      />
    </div>
  </div>
</section>

{/* Our Products Section */}
<section className="mb-12">
  <div className="flex items-center gap-2 mb-6">
    <div className="w-1 h-6 bg-[#C2A58C]"></div>
    <h2 className="text-base text-[#C2A58C]">Our Products</h2>
  </div>

  <div className="flex items-center justify-between mb-8">
    <h2 className="text-2xl font-bold text-black">Jelajahi produk dari Luar</h2>
    <div className="flex gap-2">
      <button className="p-2 rounded-full bg-gray-100">
        <IoCaretBackOutline className="text-2xl text-black" />
      </button>
      <button className="p-2 rounded-full bg-gray-100">
        <IoCaretForwardOutline className="text-2xl text-black" />
      </button>
    </div>
  </div>

  <div className="grid grid-cols-4 gap-6">
    {[
      {
        img: stik,
        name: "Breed Dry Dog Food",
        price: "100",
        rating: 4,
        reviews: 35,
        new: true
      },
      {
        img: parfum,
        name: "CANON EOS DSLR Camera",
        price: "360",
        rating: 4,
        reviews: 95,
        new: true
      },
      {
        img: rapllauren,
        name: "ASUS FHD Gaming Laptop",
        price: "700",
        rating: 5,
        reviews: 325,
        new: true
      },
      {
        img: samba,
        name: "Curology Product Set",
        price: "500",
        rating: 4,
        reviews: 145,
        new: true
      },
      {
        img: stik,
        name: "Kids Electric Car",
        price: "960",
        rating: 5,
        reviews: 65,
        new: true
      },
      {
        img: parfum,
        name: "Jr. Zoom Soccer Cleats",
        price: "1160",
        rating: 4,
        reviews: 35,
        new: true
      },
      {
        img: rapllauren,
        name: "GP11 Shooter USB Gamepad",
        price: "660",
        rating: 4,
        reviews: 55,
        new: true
      },
      {
        img: samba,
        name: "Quilted Satin Jacket",
        price: "660",
        rating: 4,
        reviews: 55,
        new: true
      }
    ].map((item, index) => (
      <div key={index} className="bg-white rounded-sm border border-gray-100 p-4">
        <div className="relative">
          <Image 
            src={item.img}
            alt={item.name}
            className="w-full h-48 object-cover rounded-sm mb-4"
            width={200}
            height={200}
          />
          {item.new && (
            <span className="absolute top-2 left-2 bg-[#C2A58C] text-white text-xs px-2 py-1 rounded">
              NEW
            </span>
          )}
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <button className="p-1.5 bg-white rounded-full shadow-sm">
              <IoHeart className="text-black" />
            </button>
            <button className="p-1.5 bg-white rounded-full shadow-sm">
              <IoEye className="text-black" />
            </button>
          </div>
        </div>
        <h3 className="font-medium text-black mb-2">{item.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#DB4444] font-medium">${item.price}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {'★'.repeat(Math.floor(item.rating))}
          </div>
          <span className="text-sm text-gray-500">({item.reviews})</span>
        </div>
        {index  >-1 && (
           <button className="w-full mt-4 py-2 bg-[#C2A58C] text-white rounded-sm text-sm">
            Add To Cart
          </button>
        )}
      </div>
    ))}
  </div>

  <div className="flex justify-center mt-8">
    <button className="px-12 py-3 bg-[#C2A58C] text-white rounded-sm">
      View All Products
    </button>
  </div>
</section>

{/* New Arrival Japan Section */}
<section className="mb-12">
  <div className="flex items-center gap-2 mb-6">
    <div className="w-1 h-6 bg-[#C2A58C]"></div>
    <h2 className="text-base text-[#C2A58C]">Featured</h2>
  </div>

  <h2 className="text-2xl font-bold text-black mb-8">New Arrival Japan</h2>

  <div className="grid grid-cols-2 gap-6">
    {/* Left Column - PS5 */}
    <div className="relative bg-[#F3F2EE] rounded-lg overflow-hidden">
      <Image
        src={stik}
        alt="PlayStation 5"
        className="w-full h-[400px] object-contain p-8"
        width={400}
        height={400}
      />
      <div className="absolute bottom-8 left-8">
        <h3 className="text-2xl font-bold text-black mb-2">PlayStation 5</h3>
        <p className="text-gray-600 mb-4">Black and White version of the PS5 coming out on sale.</p>
        <button className="text-black underline">Shop Now</button>
      </div>
    </div>

    {/* Right Column - Grid */}
    <div className="grid grid-cols-2 gap-6">
      {/* Women's Collections */}
      <div className="bg-[#F3F2EE] rounded-lg p-6 col-span-2">
        <h3 className="text-xl font-bold text-black mb-2">Women's Collections</h3>
        <p className="text-gray-600 mb-4">Featured woman collections that give you another vibe.</p>
        <button className="text-black underline">Shop Now</button>
      </div>

      {/* Speakers */}
      <div className="bg-[#F3F2EE] rounded-lg p-6">
        <h3 className="text-xl font-bold text-black mb-2">Speakers</h3>
        <p className="text-gray-600 mb-4">Amazon wireless speakers</p>
        <button className="text-black underline">Shop Now</button>
      </div>

      {/* Perfume */}
      <div className="bg-[#F3F2EE] rounded-lg p-6">
        <h3 className="text-xl font-bold text-black mb-2">Perfume</h3>
        <p className="text-gray-600 mb-4">GUCCI INTENSE OUD EDP</p>
        <button className="text-black underline">Shop Now</button>
      </div>
    </div>
  </div>
</section>

{/* Services Section */}
<section className="mb-12">
  <div className="grid grid-cols-3 gap-8">
    <div className="text-center">
      <div className="w-16 h-16 bg-[#F3F2EE] rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-[#C2A58C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 className="text-black text-xl font-bold mb-2">FREE AND FAST DELIVERY</h3>
      <p className="text-gray-600">Free delivery for all orders over $140</p>
    </div>

    <div className="text-center">
      <div className="w-16 h-16 bg-[#F3F2EE] rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-[#C2A58C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-black text-xl font-bold mb-2">24/7 CUSTOMER SERVICE</h3>
      <p className="text-gray-600">Friendly 24/7 customer support</p>
    </div>

    <div className="text-center">
      <div className="w-16 h-16 bg-[#F3F2EE] rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-[#C2A58C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-black text-xl font-bold mb-2">MONEY BACK GUARANTEE</h3>
      <p className="text-gray-600">We return money within 30 days</p>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-white pt-12 pb-6 border-t">
  <div className="grid grid-cols-4 gap-8 mb-12">
    <div>
      <h2 className="text-black text-xl font-bold mb-6">Tentang Grab and ship.com</h2>
      <ul className="space-y-3">
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Tentang Kami</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Visi & Misi</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Karir</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Solusi Logistik</a></li>
      </ul>
    </div>

    <div>
      <h2 className="text-black text-xl font-bold mb-6">Promo & Layanan</h2>
      <ul className="space-y-3">
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Promo Terbaru</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Layanan Pengiriman</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Pengiriman Internasional</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Cek Ongkir</a></li>
      </ul>
    </div>

    <div>
      <h2 className="text-black text-xl font-bold mb-6">Pusat Bantuan</h2>
      <ul className="space-y-3">
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Bantuan Pelanggan</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Syarat dan Ketentuan</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Kebijakan Privasi</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Support</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Developers</a></li>
      </ul>
    </div>

    <div>
      <h2 className="text-black text-2xl font-bold mb-6">Grab and ship</h2>
      <div className="flex space-x-4 mb-6">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-16zm6.988 0h-4.992v16h4.992v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h5v-9.141c0-7.477-8.029-7.253-11.02-3.538v-3.32z"/></svg>
        </a>
      </div>
      <div className="space-y-4">
        <button className=" text-black w-full px-6 py-3 border border-gray-300 rounded-full text-sm hover:bg-gray-50">
          English
        </button>
      </div>
    </div>
  </div>

  <div className="text-center text-gray-600 text-sm">
    © 2024 Grab.com. All Rights Reserved.
  </div>
</footer>
</main>  
</div>  
);  
}  

export default Home;