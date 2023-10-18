import Image from 'next/image';
import Link from 'next/link';

export interface IPortfolioItem {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  altText: string;
  url: string;
  repoUrl: string;
}

const PortfolioItem = ({
  title,
  description,
  technologies,
  image,
  altText,
  url,
  repoUrl,
}: IPortfolioItem) => {
  return (
    <div className="h-fit max-w-md border rounded p-4 shadow shadow-slate-800 hover:shadow-md transition-shadow duration-300 bg-slate-900">
      <Image
        src={image}
        alt={altText}
        height={300}
        width={300}
        className="mx-auto border rounded mb-4"
      />

      <h2 className="text-2xl text-center font-semibold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <h3 className="text-xl font-medium mb-2">Technologies used</h3>
      <ul className="list-disc ml-6 mb-4">
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div className="flex justify-between items-center">
        <Link
          href={url}
          className="text-blue-500 hover:underline hover:text-blue-600 transition-colors duration-300"
        >
          View Live
        </Link>
        <Link
          href={repoUrl}
          className="text-blue-500 hover:underline hover:text-blue-600 transition-colors duration-300"
        >
          Repo
        </Link>
      </div>
    </div>
  );
};

export default PortfolioItem;
