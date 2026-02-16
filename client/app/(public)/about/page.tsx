import PageHero from '../components/PageHero'
import AboutSection from './AboutSection'
import InfoSection from './InfoSection'
import ValuesSection from './ValuesSection'
import ContactBanner from './ContactBanner'

export default function page() {
  return (
    <div>
      <PageHero title="About Navora Recruitment" description="Learn more about our company and mission." />
      <AboutSection/>
      <InfoSection
        title="Our Mission"
        description="Accomplishing Profitable Voyages Together."
        imageUrl="/about/mission.jpg"
      />
      <InfoSection
        title="Our Vision"
        description="To be the preferred partner of choice to resolve all your Maritime Challenges as a One Stop Solution Provider. 
        We aim to achieve this by constantly innovating and providing exceptional services that exceed our clients' expectations."
        imageUrl="/about/vision.jpg"
        bgColor = "bg-gray-300/5"
      />
      <ValuesSection />
      <ContactBanner />
    </div>
  )
}
