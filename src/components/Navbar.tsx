import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X, Users, Search, Plus, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border">
              <Link to="/donor-login">
                <Button variant="outline" size="sm" className="border-primary/20 text-primary hover:bg-primary/10">
                  <Heart className="mr-2 h-4 w-4" />
                  Donor Login
                </Button>
              </Link>
              <Link to="/admin-login">
                <Button variant="medical" size="sm">
                  <Shield className="mr-2 h-4 w-4" />
                  Admin Login
                </Button>
              </Link>
            </div>
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
              <div className="border-t border-border pt-2 mt-2">
                <Link to="/donor-login" className="block">
                  <Button variant="outline" className="w-full justify-start gap-2 border-primary/20 text-primary hover:bg-primary/10">
                    <Heart className="w-4 h-4" />
                    Donor Login
                  </Button>
                </Link>
                <Link to="/admin-login" className="block mt-2">
                  <Button variant="medical" className="w-full justify-start gap-2">
                    <Shield className="w-4 h-4" />
                    Admin Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;