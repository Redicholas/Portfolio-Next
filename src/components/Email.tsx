'use client';
import { useState, useEffect } from 'react';

const Email = () => {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText('peters.nicholas@gmail.com');
    setCopied(true);
  }

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <p
      className="text-center text-2xl cursor-pointer hover:text-slate-400"
      onClick={copyEmail}
    >
      {copied ? 'Copied!' : 'peters.nicholas@gmail.com'}
      <i className="far fa-clipboard ml-2"></i>
    </p>
  );
};

export default Email;
