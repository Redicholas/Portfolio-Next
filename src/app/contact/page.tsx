import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl">Contact</h1>
      <div className="flex justify-center my-12">
        <Link href="mailto:peters.nicholas@gmail.com">
          <i className="fa-solid fa-envelope p-4 text-6xl hover:text-slate-400"></i>
        </Link>
        <Link href="https://github.com/Redicholas">
          <i className="fa-brands fa-github p-4 text-6xl hover:text-slate-400"></i>
        </Link>
        <Link href="https://www.linkedin.com/in/nicholas-peters-dev">
          <i className="fa-brands fa-linkedin p-4 text-6xl hover:text-slate-400"></i>
        </Link>
        <Link href="https://goo.gl/maps/ejcEqp13YJfBaLH86">
          <i className="fa-solid fa-location-dot p-4 text-6xl hover:text-slate-400"></i>
        </Link>
      </div>
      <p className="text-center text-2xl">peters.nicholas@gmail.com</p>
    </div>
  );
};

export default Page;
