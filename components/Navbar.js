/** @format */

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between font-bold bg-blue-400 py-5 px-3 item-center">
      <div className="font-bold text-center text-xl">prepokul atama motoru</div>
      <button className="bg-white py-2 px-4">giris yap</button>
    </nav>
  );
}
