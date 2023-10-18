import PortfolioItem from '@/components/portfolioItem';
import { portfolioItems } from '@/data/portfolioItems';

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl sm:text-4xl">Projects</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {portfolioItems.map((item) => (
          <PortfolioItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
