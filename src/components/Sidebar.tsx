import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav className="h-screen p-6 hidden md:flex flex-col justify-between w-1/4 border-r border-slate-800">
      <div>
        <Image
          src="logo.svg"
          alt="Logo"
          height={75}
          width={75}
          className="mx-auto"
        />
        <div className="flex flex-col justify-center items-center mt-20 mb-20 gap-20">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="flex gap-4 justify-center ">
        <Link href="https://github.com/Redicholas">
          <Image src="github.svg" alt="Github" height={40} width={40} />
        </Link>
        <Link href="https://www.linkedin.com/in/nicholas-peters-dev/">
          <Image src="linkedin.svg" alt="LinkedIn" height={40} width={40} />
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
