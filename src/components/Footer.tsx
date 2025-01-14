import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Facebook, Instagram, Youtube, Pinterest, X, Discover, Skrill, Paypal, Mastercard, Visa } from '@/assets/assets';

const Footer = () => {
  return (
    <div className="px-4 py-24 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">

      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">


        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">SIJAN</div>
          </Link>
          <p>Pokhara, Nepal</p>
          <span className='font-semibold'>sijanpaudel@gmail.com</span>
          <span className='font-semibold'>9846906893</span>
          <div className="flex gap-6">
            < Image src={Facebook} alt='' width={16} height={16} />
            < Image src={Instagram} alt='' width={16} height={16} />
            < Image src={Youtube} alt='' width={16} height={16} />
            < Image src={Pinterest} alt='' width={16} height={16} />
            < Image src={X} alt='' width={16} height={16} />
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className='text-medium text-lg'>COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className='text-medium text-lg'>SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className='text-medium text-lg'>HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>


        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and much more!
          </p>
          <div className="flex">
            <input type="text" placeholder='Email address'
              className='p-4 w-3/4' />
            <button className='w-1/4 bg-sijan text-white '>JOIN</button>
          </div>
          <span className='font-semibold'>Secure Payments</span>
          <div className="flex justify-between">
            <Image src={Discover} alt="" width={40} height={20} />
            <Image src={Skrill} alt="" width={40} height={20} />
            <Image src={Paypal} alt="" width={40} height={20} />
            <Image src={Mastercard} alt="" width={40} height={20} />
            <Image src={Visa} alt="" width={40} height={20} />

          </div>



        </div>

      </div>


      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">

        {/* LEFT */}
        <div className="">© 2024 Sijan Shop</div>

        {/* RIGHT */}
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Nepal | ENGLISH</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$USD</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
