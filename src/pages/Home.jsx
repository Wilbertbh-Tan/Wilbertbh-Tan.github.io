import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <div className="space-y-6">
      {/* About Section */}
      <section className="glass-card rounded-lg p-6 shadow-md">
        <h2 className="text-base uppercase text-black mb-4">
          About
        </h2>
        <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
          <p>
            I'm Wilbert Tan, an AI/ML engineer (ex-IBM Expert Labs) building applied ML and LLM systems end-to-end, from problem framing and data pipelines to deployment and monitoring.
          </p>
          <p>
            At IBM, I shipped enterprise solutions across anomaly detection, forecasting, reinforcement learning, and computer vision. One project, a transformer health analytics suite integrated into IBM Maximo, now helps 1,000+ customers predict equipment failures before they happen.
          </p>
          <p>
            Earlier at NUS, I researched neuromorphic computing, built embedded control systems for a smart wheelchair, and won awards for work on hyperloop systems, water-based thrusters, and synthetic biology safety.
          </p>
          <p>
            I hold a B.Eng (Honors) in Electrical Engineering from the National University of Singapore. Right now, I'm working on financial AI, neural-AI, and mechanistic interpretability research.
          </p>
          <p className="text-gray-500 font-mono text-sm">
            wbt8[at]yale[dot]edu
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="glass-card rounded-lg p-6 shadow-md">
        <h2 className="text-base uppercase text-black mb-4">
          Projects
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          A collection of things I've built, exploring various technologies and ideas.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
