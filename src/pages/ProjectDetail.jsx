import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ReactMarkdown from 'react-markdown';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="py-12">
        <h2 className="text-lg font-normal text-gray-900 dark:text-white mb-4">
          project not found
        </h2>
        <Link to="/" className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
          ← back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl space-y-8">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-block text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        ← back to projects
      </Link>

      {/* Project Header */}
      <div>
        <h1 className="text-xl font-normal text-gray-900 dark:text-white mb-3">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-600 dark:text-gray-400">
          {project.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 text-sm">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              github
              <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              live demo
              <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          )}
        </div>
      </div>

      {/* Project Image */}
      {project.image && (
        <div className="rounded-lg overflow-hidden glass-card">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Project Content */}
      <div className="prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
        <ReactMarkdown>{project.fullDescription}</ReactMarkdown>
      </div>
    </div>
  );
}
