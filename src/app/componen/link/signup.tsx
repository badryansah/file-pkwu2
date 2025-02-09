import React from 'react'
import RandomGoofyAhhShit from '@/app/aset/shopping_cart_and_phone.jpg'
import GlugluLogo from '@/app/aset/google-removebg-preview.png'
import Image from 'next/image'
import Link from 'next/link'

function SignUp() {
  return (
    <>
     <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl font-bold">Grab & Ship</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Left Section */}
          <div className="flex justify-center items-center">
            <Image
              src={RandomGoofyAhhShit} // Ganti dengan path gambar Anda
              alt="Shopping Cart and Phone"
              className="w-3/4 h-auto"
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Create an account</h2>
            <p className="mb-6 text-gray-500">Enter your details below</p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email or Phone Number
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email or phone number"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <Link href="/Login">
  <button
    type="button"
    className="w-full bg-brown-500 hover:bg-brown-600 text-black py-2 rounded-lg mb-4"
  >
    Create Account
  </button>
</Link>
              <button
                type="button"
                className="w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 rounded-lg flex justify-center items-center gap-2"
              >
                <Image
                  src={GlugluLogo} // Ganti dengan path ikon Google Anda
                  alt="Google Icon"
                  className="w-5 h-5"
                />
                Sign up with Google
              </button>
            </form>
            <p className="text-center mt-4">
              Already have an account?{" "}
              <a href="/auth/login" className="text-blue-500">
                Log In
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-8">
        <div className="max-w-7xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h3 className="font-bold mb-2">Tentang Grib.com</h3>
            <ul>
              <li>Visi & Misi</li>
              <li>Karir</li>
              <li>Blog</li>
              <li>Sosial Logistik</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Promo & Layanan</h3>
            <ul>
              <li>Promo Terbaru</li>
              <li>Layanan Pengiriman</li>
              <li>Pengiriman Internasional</li>
              <li>Cek Ongkir</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Pusat Bantuan</h3>
            <ul>
              <li>Bantuan Pelanggan</li>
              <li>FAQ</li>
              <li>Syarat dan Ketentuan</li>
              <li>Kebijakan Privasi</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 py-4 text-center">
          <p>&copy; 2025 Grib.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default SignUp;
