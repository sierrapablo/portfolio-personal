import React, { useState, useEffect } from 'react'
import Hero from "./sections/hero/Hero"
import About from "./sections/about/About"
import Contact from "./sections/contact/Contact"

function App() {
  const [visibleSection, setVisibleSection] = useState('hero')

  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      setVisibleSection((prevSection) => {
        if (prevSection === 'hero') return 'about'
        if (prevSection === 'about') return 'contact'
        return prevSection
      })
    } else if (event.deltaY < 0) {
      setVisibleSection((prevSection) => {
        if (prevSection === 'contact') return 'about'
        if (prevSection === 'about') return 'hero'
        return prevSection
      })
    }
  }

  useEffect(() => {
    const appContainer = document.querySelector('.appContainer')

    appContainer.addEventListener('wheel', handleWheel)

    return () => {
      appContainer.removeEventListener('wheel', handleWheel)
    }
  })

  return (
    <div className="appContainer">
      <div className={`section-component ${visibleSection === 'hero' ? 'visible' : ''}`}>
        <Hero />
      </div>
      <div className={`section-component ${visibleSection === 'about' ? 'visible' : ''}`}>
        <About />
      </div>
      <div className={`section-component ${visibleSection === 'contact' ? 'visible' : ''}`}>
        <Contact />
      </div>
    </div>
  )
}

export default App
