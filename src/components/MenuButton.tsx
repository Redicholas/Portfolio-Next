'use client';

import { useState } from 'react';
import MobileMenu from './MobileMenu';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggle} className="md:hidden">
        <i
          className={`fa-solid absolute top-6 right-6 z-30 text-5xl transition ${
            isOpen ? 'fa-xmark' : 'fa-bars'
          }`}
        ></i>
      </button>
      {isOpen && <MobileMenu toggle={toggle} />}
    </>
  );
};

export default MenuButton;
