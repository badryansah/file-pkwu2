'use client';
import { useState } from 'react';
import { IoCartOutline, IoPersonOutline, IoHeart, IoSearch } from 'react-icons/io5';
import Image from 'next/image';
import stik from '@/app/aset/ps5.jpg'; // Ensure this path is correct
import monitor from '@/app/aset/monitor.png'; // Ensure this path is correct
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tentang Grip.com */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tentang Grip.com</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-600">Tentang Kami</a></li>
              <li><a href="/karir" className="hover:text-gray-600">Karir</a></li>
              <li><a href="/blog" className="hover:text-gray-600">Blog</a></li>
              <li><a href="/press" className="hover:text-gray-600">Press</a></li>
            </ul>
          </div>

          {/* Promo & Layanan */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Promo & Layanan</h3>
            <ul className="space-y-2">
              <li><a href="/promo" className="hover:text-gray-600">Promo</a></li>
              <li><a href="/layanan" className="hover:text-gray-600">Layanan</a></li>
              <li><a href="/syarat-ketentuan" className="hover:text-gray-600">Syarat & Ketentuan</a></li>
              <li><a href="/kebijakan-privasi" className="hover:text-gray-600">Kebijakan Privasi</a></li>
            </ul>
          </div>

          {/* Pusat Bantuan */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pusat Bantuan</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:text-gray-600">FAQ</a></li>
              <li><a href="/kontak" className="hover:text-gray-600">Kontak</a></li>
              <li><a href="/pengembalian" className="hover:text-gray-600">Pengembalian</a></li>
              <li><a href="/pengiriman" className="hover:text-gray-600">Pengiriman</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-end space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaLinkedinIn size={24} />
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 Grip.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function Keranjang() {
  const [products] = useState([
    { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, image: monitor },
    { id: 2, name: 'H1 Gamepad', price: 550, quantity: 2, image: stik },
  ]);

  const calculateSubtotal = () => {
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = 0; // Assuming free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <header className="p-4 bg-white border-b flex justify-between items-center">
        <h1 className="font-bold text-lg">Grab & Ship</h1>
        <div className="flex items-center space-x-2 border px-3 py-2 rounded-md w-1/3">
          <IoSearch className="text-xl" />
          <input type="text" placeholder="Search..." className="w-full outline-none" />
        </div>
        <div className="flex space-x-4">
          <IoHeart className="text-xl" />
          <IoCartOutline className="text-xl" />
          <IoPersonOutline className="text-xl" />
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 flex-1">
        <div className="mb-6">
          <nav className="flex space-x-6 text-sm font-semibold">
            <a href="/" className="hover:text-blue-500">Home</a>
            <a href="/cart" className="hover:text-blue-500">Cart</a>
          </nav>
        </div>

        <div className="flex">
          <div className="flex-1 border p-4 rounded-lg mb-6 bg-white">
            <h2 className="text-xl font-semibold mb-4">Detail Pesanan</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Product</th>
                  <th className="text-left py-2">Harga</th>
                  <th className="text-left py-2">Jumlah Barang</th>
                  <th className="text-left py-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="py-2 flex items-center">
                      <Image src={product.image} alt={product.name} width={50} height={50} className="mr-4" />
                      {product.name}
                    </td>
                    <td className="py-2">${product.price.toFixed(2)}</td>
                    <td className="py-2">{product.quantity}</td>
                    <td className="py-2">${(product.price * product.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mt-4">Kembali</button>
          </div>

          <div className="w-1/3 border p-4 rounded-lg mb-6 ml-4 bg-white">
            <h3 className="text-lg font-semibold mb-2">Total Belanja</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold mb-4">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Checkout</button>
          </div>
        </div>

        <div className="flex space-x-2 mb-6">
          <input type="text" placeholder="kupon kode" className="w-full p-3 border rounded-md" />
          <button className="bg-[#C2A58C] text-white px-4 py-2 rounded-md">Masukkan kupon</button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
