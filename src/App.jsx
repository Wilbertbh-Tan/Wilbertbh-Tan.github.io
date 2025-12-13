import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen transition-colors relative">
        {/* Gradient Blob Background */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <div className="gradient-blob blob-1 top-0 -left-1/4 w-3/4 h-3/4"></div>
          <div className="gradient-blob blob-2 bottom-0 right-0 w-2/3 h-2/3"></div>
          <div className="gradient-blob blob-3 top-1/3 right-1/4 w-1/2 h-1/2"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col lg:flex-row max-w-7xl mx-auto">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 lg:p-16 lg:pl-8 p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
