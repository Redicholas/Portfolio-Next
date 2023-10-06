'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggle} className="md:hidden">
        <Image
          src="/hamburger.svg"
          alt="Menu"
          height={40}
          width={40}
          className="absolute top-6 right-6 z-30"
        />
      </button>
      {isOpen && <MobileMenu toggle={toggle} />}
    </>
  );
};

export default MenuButton;
