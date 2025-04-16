
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "@/pages/home/page"
import Contact from './pages/contact/page';
import Projects from "@/pages/projects/page"
import About from './pages/about/page';
import TimeLine from './pages/timeLine/page';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/timeline" element={<TimeLine />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;