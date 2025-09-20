import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X, Users, Search, Plus } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-hero rounded-lg shadow-medical">
              <Heart className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <span className="text-xl font-bold text-foreground">LifeSave</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              Find Donors
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Join as Donor
            </Button>
            <Button variant="emergency" className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Emergency Request
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Search className="w-4 h-4" />
                Find Donors
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Users className="w-4 h-4" />
                Join as Donor
              </Button>
              <Button variant="emergency" className="w-full justify-start gap-2">
                <Plus className="w-4 h-4" />
                Emergency Request
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;