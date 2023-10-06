import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="h-screen p-6 hidden md:block w-1/4 border-r border-slate-800">
      <Image
        src="logo.svg"
        alt="Logo"
        height={75}
        width={75}
        className="mx-auto"
      />
      <div className="flex flex-col justify-center items-center mt-20 gap-12">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Sidebar;
