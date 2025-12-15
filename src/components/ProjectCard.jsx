import { Link } from 'react-router-dom';

// Tag color configuration - easy to update
const TAG_KEYWORDS = {
  cyan: ['finance', 'enterprise', 'healthcare', 'energy', 'research', 'startup', 'aerospace', 'sustainability'],
  blue: ['mobile', 'iot', 'hardware', 'mechanical'],
  purple: ['embedded', 'llm', 'computer vision', 'machine learning', 'deep learning', 'neuromorphic', 'synthetic biology', 'computational biology', 'time series', 'control systems', 'spintronics', 'web scraping', 'industrial', 'prototyping', 'deterministic', 'citations']
};

const TAG_STYLES = {
  cyan: 'bg-cyan-100 text-cyan-800',
  blue: 'bg-blue-100 text-blue-800',
  purple: 'bg-purple-100 text-purple-800',
  gray: 'bg-gray-200 text-gray-800'
};

const getTagColor = (tag) => {
  const tagLower = tag.toLowerCase();
  for (const [color, keywords] of Object.entries(TAG_KEYWORDS)) {
    if (keywords.some(k => tagLower.includes(k))) {
      return TAG_STYLES[color];
    }
  }
  return TAG_STYLES.gray;
};

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/project/${project.id}`}
      className="block glass-card rounded-lg overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
    >
      <div className="aspect-video relative overflow-hidden">
        {(project.image || project.images?.[0]) ? (
          <img
            src={project.image || project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
        )}
        {project.year && (
          <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-2 py-1 rounded">
            {project.year}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-black mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-700 mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`text-sm px-2 py-1 rounded-full ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
