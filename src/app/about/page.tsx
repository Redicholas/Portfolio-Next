import React from 'react';

const Page = () => {
  return (
    <div className="p-6 max-w-xl">
      <section>
        <h1 className="text-2xl sm:text-4xl my-20">A little about me.</h1>
        <p>
          Hello there! <br />I am Nicholas Peters, I´m currently studying to be
          a Front End Developer at Medieinstitutet Sweden. <br />I am driven and
          curious and I´m always looking for new ways to do things. <br />
          My main strengths are React, Next.js, TypeScript, JavaScript, Tailwind
          CSS. <br />
          Please contact me if you would like to work with me on anything, big
          or small! <br /> In the fall of 2023 I will be an intern at Connectel,
          where I will be working on a gamification feature for a customer
          service dashboard.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-xl sm:text-2xl mb-10">
          Technologies I like to work with
        </h2>
        <div className="flex gap-12 justify-center">
          <ul>
            <li>Next.js</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Node</li>
            <li>Express</li>
            <li>Prisma</li>
          </ul>
          <ul>
            <li>MySQL</li>
            <li>SQLite</li>
            <li>MongoDB</li>
            <li>MongoDB</li>
            <li>Vue.js</li>
            <li>Styled Components</li>
            <li>SCSS</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page;
