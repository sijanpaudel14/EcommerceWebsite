'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import searchImg from '@/assets/search.png'
import React from 'react';

const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (e: FormData) => {
    const formData = e.get('name');
    const name = e.get('name') as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      action={handleSearch}
      className="flex items-center justify-center gap-4 flex-1 bg-gray-100 p-2 rounded-md"
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image src={searchImg} alt="" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
