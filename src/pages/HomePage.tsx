import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import WelcomeAbout from '../components/home/WelcomeAbout';
import Programmes from '../components/home/Programmes';
import PastorProfile from '../components/home/PastorProfile';
import CoreValues from '../components/home/CoreValues';
import PrayerContact from '../components/home/PrayerContact';
import Footer from '../components/layout/Footer';
function HomePage() {
  return (
    <>
      <h1 className="text-red-600 text-6xl">
        Tailwind Working
      </h1>

      <Navbar />
      <Hero />
      <WelcomeAbout />
      <Programmes />
      <PastorProfile />
      <CoreValues />
      <PrayerContact />
      <Footer />
    </>
  );
}

export default HomePage;