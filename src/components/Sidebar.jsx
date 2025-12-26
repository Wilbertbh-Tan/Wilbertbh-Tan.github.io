import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-96 lg:min-h-screen lg:p-16 lg:pr-8 p-8 lg:sticky lg:top-0 space-y-6">
      {/* Header Card */}
      <div className="glass-card rounded-lg p-6 shadow-md space-y-6">
        {/* Header */}
        <div>
          <Link to="/" className="block">
            <h1 className="text-3xl font-bold text-black mb-1 hover:text-gray-700 transition-colors cursor-pointer">
              Wilbert Tan
            </h1>
          </Link>
          <p className="text-sm text-gray-700">
            Building tech, restoring agency
            <br />
            <span className="text-gray-500">Ex-IBM · Human-Centered AI & Healthcare</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 text-sm">
          <a
            href="/wilbertcv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center text-blue-600 hover:text-blue-900 transition-colors duration-200"
          >
            CV
            <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
          <a
            href="https://linkedin.com/in/wilbert-tan/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center text-blue-600 hover:text-blue-900 transition-colors duration-200"
          >
            LinkedIn
            <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
          <a
            href="https://github.com/Wilbertbh-Tan"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center text-blue-600 hover:text-blue-900 transition-colors duration-200"
          >
            GitHub
            <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
        </div>
      </div>

      {/* Currently Card */}
      <div className="glass-card rounded-lg p-6 shadow-md">
        <h2 className="text-base uppercase text-black mb-4">
          Currently
        </h2>
        <ul className="space-y-2 text-sm sm:text-base text-gray-700 list-disc list-inside">
          <li>Studying mechanistic interpretability in AI/ML systems</li>
          <li>Building RAG report generation with real-time market data</li>
          <li>Developing eye and gaze tracking for mobile devices</li>
          <li>Open to full-time opportunities in AI/ML research and engineering</li>
        </ul>
      </div>
    </aside>
  );
}
