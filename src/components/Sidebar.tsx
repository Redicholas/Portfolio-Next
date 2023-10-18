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
          <Link href="/" className="hover:text-slate-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-slate-400">
            About
          </Link>
          <Link href="/projects" className="hover:text-slate-400">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-slate-400">
            Contact
          </Link>
        </div>
      </div>
      <div className="flex gap-4 justify-center ">
        <Link href="https://github.com/Redicholas">
          <i className="fa-brands fa-github text-4xl hover:text-slate-400"></i>
        </Link>
        <Link href="https://www.linkedin.com/in/nicholas-peters-dev">
          <i className="fa-brands fa-linkedin text-4xl hover:text-slate-400"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
