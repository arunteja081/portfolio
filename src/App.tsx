import { AnimatePresence, MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <AnimatePresence>
      <MotionConfig reducedMotion="user">
      <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
      </MotionConfig>
    </AnimatePresence>
  )
}

export default App
