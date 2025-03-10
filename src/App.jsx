import React, { useState, useEffect } from 'react'
import Hero from "./sections/hero/Hero"
import About from "./sections/about/About"
import Contact from "./sections/contact/Contact"

function App() {
  const [visibleSection, setVisibleSection] = useState('hero')
  const [touchStartY, setTouchStartY] = useState(0)

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

  const handleTouchStart = (event) => {
    setTouchStartY(event.touches[0].clientY)
  }

  const handleTouchMove = (event) => {
    const touchEndY = event.touches[0].clientY
    const deltaY = touchStartY - touchEndY

    if (Math.abs(deltaY) > 50) {
      if (deltaY > 0) {
        setVisibleSection((prevSection) => {
          if (prevSection === 'hero') return 'about'
          if (prevSection === 'about') return 'contact'
          return prevSection
        })
      } else {
        setVisibleSection((prevSection) => {
          if (prevSection === 'contact') return 'about'
          if (prevSection === 'about') return 'hero'
          return prevSection
        })
      }
      setTouchStartY(touchEndY)
    }
  }

  useEffect(() => {
    const appContainer = document.querySelector('.appContainer')

    appContainer.addEventListener('wheel', handleWheel)

    appContainer.addEventListener('touchstart', handleTouchStart)
    appContainer.addEventListener('touchmove', handleTouchMove)

    return () => {
      appContainer.removeEventListener('wheel', handleWheel)
      appContainer.removeEventListener('touchstart', handleTouchStart)
      appContainer.removeEventListener('touchmove', handleTouchMove)
    }
  }, [touchStartY])

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
