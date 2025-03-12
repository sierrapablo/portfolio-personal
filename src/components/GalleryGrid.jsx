import './GalleryGrid.css'
import Section from './Section'

function GalleryGrid() {
  return (
    <div className='gridContainer'>
      <Section
        id="gallery-title"
        title="Galería"
      />
      <div className="element" id="elementView"></div>
      <div className="grid grid-cols-8 grid-rows-1">
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
      </div>
    </div>
  )
}

export default GalleryGrid
