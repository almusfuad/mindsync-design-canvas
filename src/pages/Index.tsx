
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WorksSection from '../components/WorksSection';
import BookingTutorial from '../components/BookingTutorial';
import ClientsSection from '../components/ClientsSection';
import TeamSection from '../components/TeamSection';
import OrganizationsSection from '../components/OrganizationsSection';
import LastOfferSection from '../components/LastOfferSection';
import PlatformsSection from '../components/PlatformsSection';
import RatingsSection from '../components/RatingsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WorksSection />
      <BookingTutorial />
      <ClientsSection />
      <TeamSection />
      <OrganizationsSection />
      <LastOfferSection />
      <PlatformsSection />
      <RatingsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
