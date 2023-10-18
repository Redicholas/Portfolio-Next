import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav className="fixed h-screen p-6 hidden md:flex flex-col justify-between w-48 border-r border-slate-800">
      <div>
        <Link href="/">
          <Image
            src="logo.svg"
            alt="Logo"
            height={100}
            width={100}
            className="mx-auto"
            priority={true}
          />
        </Link>
        <div className="flex flex-col justify-center items-center mt-20 mb-20 gap-20">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <Link href="/about" className="hover:text-accent">
            About
          </Link>
          <Link href="/projects" className="hover:text-accent">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-accent">
            Contact
          </Link>
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
