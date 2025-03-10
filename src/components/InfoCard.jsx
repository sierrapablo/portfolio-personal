import './InfoCard.css'

function InfoCard() {
  return (
    <article className="info-card">
      <header className="card-header">
        <img alt="contact icon" src="https://unavatar.io/sierrapablo" className="contact-icon"/>
        <div className="platform-info">
          <strong className="platform-name">Contact Platform</strong>
          <span className="handle">Contact Info</span>
        </div>
      </header>
    </article>
  )
}

export default InfoCard
