import Image from 'next/image';

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl sm:text-4xl text-gray-300 mb-20 mt-20 sm:mt-32">
        Welcome to my site. <br /> I am Nicholas Peters, <br />
        <span className="text-white">Front End Developer</span> and{' '}
        <span className="text-white">Sailor</span>.
      </h1>
      <h2 className="text-lg sm:text-xl md:mt-60 max-w-sm drop-shadow-2xl text-gray-300">
        Take a look around. <br />
        This is a space for me to show some of my projects, and tell you a
        little about myself.
      </h2>

      <Image
        src="/nicholas-peters.png"
        alt="Nicholas Peters"
        width="200"
        height="200"
        className="fixed bottom-0 right-0 -z-10"
      />
    </main>
  );
}
