import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DonorSearch from '@/components/DonorSearch';
import EmergencyRequestForm from '@/components/EmergencyRequestForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DonorSearch />
      <EmergencyRequestForm />
    </div>
  );
};

export default Index;