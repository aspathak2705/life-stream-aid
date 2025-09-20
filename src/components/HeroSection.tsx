import { Button } from '@/components/ui/button';
import { Heart, Search, UserPlus, AlertTriangle } from 'lucide-react';
import heroImage from '@/assets/hero-medical.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Medical blood donation illustration" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full shadow-emergency">
              <Heart className="w-8 h-8 text-white" fill="currentColor" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground">
              Save Lives
            </h1>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-6">
            Connect Blood Donors & Recipients Instantly
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            In emergency situations, every second counts. Our platform connects blood donors 
            with recipients and hospitals instantly, helping save lives through smart matching 
            and real-time availability.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" variant="emergency" className="text-lg px-8 py-6 min-w-[200px]">
              <AlertTriangle className="w-5 h-5" />
              Emergency Request
            </Button>
            <Button size="lg" variant="hero" className="text-lg px-8 py-6 min-w-[200px]">
              <UserPlus className="w-5 h-5" />
              Become a Donor
            </Button>
            <Button size="lg" variant="medical" className="text-lg px-8 py-6 min-w-[200px]">
              <Search className="w-5 h-5" />
              Find Donors
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Emergency Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Active Donors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Lives Saved</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;