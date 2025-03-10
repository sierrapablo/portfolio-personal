import './Section.css';

function Section({
  id,
  backgroundImage,
  title,
  subtitle,
  paragraph,
  titleDelay = '0s',
  subtitleDelay = '0.5s'
}) {
  return (
    <div 
      className="sectionContainer" 
      id={id}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="sectionOverlay"></div>
      <h1 className="sectionTitle" style={{ animationDelay: titleDelay }}>{title}</h1>
      <h2 className="sectionSubtitle" style={{ animationDelay: subtitleDelay }}>{subtitle}</h2>
      <p className="sectionParagraph" style={{ animationDelay: subtitleDelay }}>{paragraph}</p>
    </div>
  );
}

export default Section;
