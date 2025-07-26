// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { FC } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Projects from './sections/Projects';
import ProjectDetails from './components/ProjectDetails';
import About from './sections/About';
import Contact from './sections/Contact'; // Fix this import

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              
              <Projects />
              <About />
              <Contact /> {/* Now using your Contact component */}
            </>
          } />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;