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
            Hi there! I'm Wilbert, an AI/ML engineer and researcher. I'm currently conducting independent research on mechanistic interpretability, building RAG systems for deep research with real-time market data crawling, and developing eye tracking for mobile devices using MediaPipe and YOLO.
          </p>
          <p>
            From 2022 to 2024, I worked as a Data Scientist at IBM Expert Labs, where I built enterprise ML solutions spanning anomaly detection, time-series forecasting, reinforcement learning, and computer vision. I led development of the Electrical Model Suite for transformer health analytics, integrated into IBM Maximo and deployed to 1,000+ customers. Later in 2024, I advised Fortune 500 financial services clients on AI strategy and LLM implementation as a Customer Success Manager.
          </p>
          <p>
            Before IBM, I built embedded control systems for a smart wheelchair at GogoTech (funded by the Melinda Gates Foundation). At NUS, I researched neuromorphic computing with spin-wave neural networks, led the iGEM team to a Gold Medal (top bracket among 310 teams), built a wearable gait analysis device that won Second Prize at the Singapore Medical Grand Challenge, and developed 3D-printed micro-thrusters for cubesats that earned recognition at CNES-ESA ActinSpace.
          </p>
          <p>
            I graduated from the National University of Singapore with a B.Eng (Honors) in Electrical Engineering. I'm open to full-time opportunities in AI/ML research and engineering. Feel free to reach out about interesting projects or collaborations.
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
