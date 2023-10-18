import { IPortfolioItem } from '@/components/PortfolioItem';

export const portfolioItems: IPortfolioItem[] = [
  {
    title: 'MyNote',
    description:
      'MyNote is the first project I built using this stack. It is a simple note taking app that I built for practice. You can log in using your GitHub account. I also used shadcn for UI components.',
    technologies: [
      'Next.js',
      'TypeScript',
      'NextAuth',
      'Prisma',
      'SQLite',
      'shadcn',
      'TailwindCSS',
    ],
    image: '/MyNote.png',
    altText: 'MyNote Website',
    url: '',
    repoUrl: 'https://github.com/Redicholas/MyNote',
  },
  {
    title: 'YrkesOraklet',
    description:
      'YrkesOraklet is a website we built that uses JobTechs API to match educations with careers to show salary and competency data.',
    technologies: ['React', 'Typescript', 'Styled Components', 'JobTech API'],
    image: '/YrkesOraklet-AF-JobTech.png',
    altText: 'YrkesOraklet Website',
    url: 'https://github.com/Redicholas/JobTech-AF-Case',
    repoUrl: 'https://github.com/Redicholas/JobTech-AF-Case',
  },
];
