import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ReactMarkdown from 'react-markdown';

// Tag color configuration (same as ProjectCard)
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

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [imageEnlarged, setImageEnlarged] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get images array (support both single image and images array)
  const images = project?.images || (project?.image ? [project.image] : []);
  const currentImage = images[currentImageIndex];

  const nextImage = () => setCurrentImageIndex((i) => (i + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((i) => (i - 1 + images.length) % images.length);

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
      {/* Image Lightbox Modal */}
      {imageEnlarged && currentImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setImageEnlarged(false)}
        >
          <img
            src={currentImage}
            alt={project.title}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
            onClick={() => setImageEnlarged(false)}
          >
            ✕
          </button>
        </div>
      )}

      {/* Back Button */}
      <Link
        to="/"
        className="inline-block text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        ← back to projects
      </Link>

      {/* Project Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`text-sm px-2 py-1 rounded-full ${getTagColor(tag)}`}
            >
              {tag}
            </span>
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
              href={typeof project.links.live === 'string' ? project.links.live : project.links.live.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {typeof project.links.live === 'string' ? 'live demo' : project.links.live.label}
              <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          )}
        </div>
      </div>

      {/* Project Image Slider */}
      {images.length > 0 && (
        <div className="relative rounded-lg overflow-hidden glass-card">
          {/* Main Image */}
          <div
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setImageEnlarged(true)}
          >
            <img
              src={currentImage}
              alt={project.title}
              className="w-full h-auto max-w-full"
            />
          </div>

          {/* Navigation Arrows (only show if multiple images) */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                ‹
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                ›
              </button>
            </>
          )}

          {/* Dot Indicators (only show if multiple images) */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          )}

          <p className="text-xs text-gray-500 text-center py-2">
            {images.length > 1 ? `${currentImageIndex + 1} / ${images.length} · Click to enlarge` : 'Click to enlarge'}
          </p>
        </div>
      )}

      {/* Project Content */}
      <div className="prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 prose-headings:text-gray-900 prose-h1:text-xl prose-h1:font-bold prose-h1:mt-8 prose-h1:mb-4 prose-h2:text-lg prose-h2:font-semibold prose-h2:mt-6 prose-h2:mb-3 prose-p:mb-4 prose-strong:text-gray-900 prose-table:text-sm">
        <ReactMarkdown>{project.fullDescription}</ReactMarkdown>
      </div>
    </div>
  );
}
