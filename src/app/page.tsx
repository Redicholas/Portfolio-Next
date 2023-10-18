import Image from 'next/image';

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl sm:text-4xl">
        <span className="opacity-70">
          {' '}
          Welcome to my site. <br /> I am Nicholas Peters, <br />
        </span>
        Front End Developer <span className="opacity-70">and</span> Sailor.
      </h1>
      <p className="text-lg sm:text-xl md:mt-32 max-w-sm drop-shadow-2xl ">
        Take a look around. <br />
        This is a space for me to show some of my projects, and tell you a
        little about myself.
      </p>

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
