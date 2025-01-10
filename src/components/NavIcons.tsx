'use client';

import profileImg from "@/assets/profile.png"
import cartImg from "@/assets/cart.png"
import notifyImg from "@/assets/notification.png"

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import CartModal from './CartModal';

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCardOpen] = useState(false);
  const router = useRouter();

  // Temporary
  const isLoggedIn = false

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev)

  }


  return (
    <div className="flex items-center justify-center gap-4 xl:gap-6 relative">

      {/* PROFILE */}
      <Image
        onClick={handleProfile}
        src={profileImg}
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />

      {isProfileOpen && (
        <div className="absolute p-4 bg-white rounded-md top-12 left-0 text-sm shadow-sm z-30">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}


      {/* NOTIFICATION */}
      <Image
        src={notifyImg}
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />


      {/* CART */}
      <div className="relative cursor-pointer">
        <Image
          src={cartImg}
          alt=""
          width={22}
          height={22}
          onClick={() => setIsCardOpen(prev => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-sijan rounded-full text-white flex items-center justify-center">2</div>
      </div>
      {
        isCartOpen && <CartModal />
      }

    </div>
  );
};

export default NavIcons;
