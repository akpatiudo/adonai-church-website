import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import WelcomeAbout from '../components/home/WelcomeAbout';
import Programmes from '../components/home/Programmes';
import PastorProfile from '../components/home/PastorProfile';
import CoreValues from '../components/home/CoreValues';
import PrayerContact from '../components/home/PrayerContact';
import Footer from '../components/layout/Footer';
import ServiceTimes from '../components/home/ServiceTimes';
import WhatsAppButton from '../components/WhatsAppButton';
import PlanVisit from '../components/home/PlanVisit';
import GoogleMap from '../components/home/GoogleMap';
function HomePage() {
  return (
    <>
      
      <Navbar />
      <Hero />
      <ServiceTimes />
      <PlanVisit />
      <WelcomeAbout />
      <Programmes />
      <PastorProfile />
      <CoreValues />
      <GoogleMap />
      <PrayerContact />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default HomePage;