import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Expertise from './components/Expertise/Expertise';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Gallery from './components/Gallery/Gallery';
import Books from './components/Books/Books';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Highlights from './components/Highlights/Highlights';
import Certifications from './components/Certifications/Certifications';
import BlogPreview from './components/Blog/BlogPreview';
import Contact from './components/Contact/Contact';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Gallery />
      <Books />
      <Skills />
      <Education />
      <Highlights />
      <Certifications />
      <BlogPreview />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
