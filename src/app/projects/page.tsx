import PortfolioItem from '@/components/PortfolioItem';
import { portfolioItems } from '@/data/portfolioItems';

const Projects = () => {
  return (
    <div className="mt-24">
      <h1 className="text-2xl sm:text-4xl text-center">Projects</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {portfolioItems.map((item) => (
          <PortfolioItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
