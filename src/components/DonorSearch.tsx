import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, MapPin, Filter } from 'lucide-react';
import BloodTypeCard from './BloodTypeCard';

const DonorSearch = () => {
  const [bloodType, setBloodType] = useState('');
  const [location, setLocation] = useState('');

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  // Mock donor data
  const mockDonors = [
    {
      bloodType: 'O+',
      donorName: 'Sarah Johnson',
      location: 'Downtown Medical Center',
      distance: '0.5 km',
      lastDonation: '2 months ago',
      availability: 'available' as const,
      phone: '+1234567890'
    },
    {
      bloodType: 'A+',
      donorName: 'Michael Chen',
      location: 'City Hospital',
      distance: '1.2 km',
      lastDonation: '3 months ago',
      availability: 'emergency-only' as const,
      phone: '+1234567891'
    },
    {
      bloodType: 'B-',
      donorName: 'Emily Davis',
      location: 'General Hospital',
      distance: '2.1 km',
      lastDonation: '1 month ago',
      availability: 'available' as const,
      phone: '+1234567892'
    },
    {
      bloodType: 'AB+',
      donorName: 'Robert Wilson',
      location: 'Metro Health Center',
      distance: '3.5 km',
      lastDonation: '4 months ago',
      availability: 'unavailable' as const
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Search className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Find Blood Donors</h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Search for available blood donors in your area
          </p>
        </div>

        {/* Search Filters */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Search Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Blood Type</label>
                <Select value={bloodType} onValueChange={setBloodType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select blood type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Blood Types</SelectItem>
                    {bloodTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Enter your location" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-end">
                <Button variant="hero" className="w-full">
                  <Search className="w-4 h-4" />
                  Search Donors
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-foreground">
            Available Donors ({mockDonors.length})
          </h3>
          <Select defaultValue="distance">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="distance">Sort by Distance</SelectItem>
              <SelectItem value="availability">Sort by Availability</SelectItem>
              <SelectItem value="recent">Recently Active</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Donor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDonors.map((donor, index) => (
            <BloodTypeCard 
              key={index}
              {...donor}
            />
          ))}
        </div>

        {/* No Results State */}
        {mockDonors.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No donors found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or expanding your location radius
            </p>
          </div>
        )}

        {/* Emergency Contact */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-emergency p-6 rounded-lg shadow-emergency max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-2">Can't find a donor?</h3>
            <p className="text-white/90 mb-4">Submit an emergency request to notify all nearby donors</p>
            <Button variant="medical" size="lg" className="bg-white text-primary hover:bg-white/90">
              Submit Emergency Request
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorSearch;