import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="mb-16 flex h-16 w-screen items-center  justify-center pt-16">
      <div className="item-center flex justify-center md:ml-10 md:w-1/5">
        <Link href="">
          <div className="relative opacity-75 transition duration-300 hover:opacity-100">
            <Image src={logo} alt="logo" className="w-36" />
          </div>
        </Link>
      </div>
      <nav className="hidden flex-1 items-center justify-center space-x-10 md:ml-16 md:flex">
        <a href="" className="header-link-item" >Home</a>
        <a href="" className="header-link-item">
          Travel Blog
        </a>
        <a href="" className="header-link-item">Destination</a>
        <a href="" className="header-link-item">
          Store
        </a>
        <a href="" className="header-link-item">Members Only</a>
        <button
          className="rounded-md border-x-2 border-y-2 border-solid 
         border-[#FCA05A] px-7 py-2 text-xs font-medium text-[#FCA05A] transition-all duration-300 hover:bg-[#FCA05A] hover:text-white hover:opacity-75"
        >
          Contact Us
        </button>
      </nav>
    </header>
  );
}
