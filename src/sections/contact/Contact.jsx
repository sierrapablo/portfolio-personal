import Section from '../../components/Section'
import InfoCard from '../../components/InfoCard'
import './Contact.css'

function Contact() {
  return (
    <div className='contactSection'>
      <Section
        id="contact"
        title="Contacto"
        subtitle="Contacta con tu propuesta de proyecto aquí"
      />
      {/* Aquí van las InfoCards */}
      <div className='infoCard-container'>
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  )
}

export default Contact
