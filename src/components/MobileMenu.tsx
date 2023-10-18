import Link from 'next/link';
import React from 'react';

interface IMobileMenuProps {
  toggle: () => void;
}

const MobileMenu = ({ toggle }: IMobileMenuProps) => {
  return (
    <nav className="absolute h-screen w-screen flex flex-col justify-between p-20 items-center bg-background z-20">
      <Link href="/" onClick={toggle}>
        Home
      </Link>
      <Link href="/about" onClick={toggle}>
        About
      </Link>
      <Link href="/projects" onClick={toggle}>
        Projects
      </Link>
      <Link href="/contact" onClick={toggle}>
        Contact
      </Link>
    </nav>
  );
};

export default MobileMenu;
