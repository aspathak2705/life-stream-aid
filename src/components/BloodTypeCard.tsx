import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Droplets, MapPin, Phone, Clock } from 'lucide-react';

interface BloodTypeCardProps {
  bloodType: string;
  donorName: string;
  location: string;
  distance: string;
  lastDonation: string;
  availability: 'available' | 'unavailable' | 'emergency-only';
  phone?: string;
}

const BloodTypeCard = ({ 
  bloodType, 
  donorName, 
  location, 
  distance, 
  lastDonation, 
  availability,
  phone 
}: BloodTypeCardProps) => {
  const getAvailabilityColor = () => {
    switch (availability) {
      case 'available': return 'success';
      case 'emergency-only': return 'warning';
      default: return 'destructive';
    }
  };

  const getAvailabilityText = () => {
    switch (availability) {
      case 'available': return 'Available';
      case 'emergency-only': return 'Emergency Only';
      default: return 'Unavailable';
    }
  };

  return (
    <Card className="shadow-card hover:shadow-medical transition-medical">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-hero rounded-full">
              <Droplets className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground">{donorName}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-3 h-3" />
                {location} • {distance}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary mb-1">{bloodType}</div>
            <Badge variant={getAvailabilityColor() as any} className="text-xs">
              {getAvailabilityText()}
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Last donation: {lastDonation}
          </div>
        </div>

        <div className="flex gap-2">
          {availability === 'available' && (
            <Button variant="hero" className="flex-1">
              Contact Donor
            </Button>
          )}
          {availability === 'emergency-only' && (
            <Button variant="emergency" className="flex-1">
              Emergency Contact
            </Button>
          )}
          {availability === 'unavailable' && (
            <Button variant="secondary" disabled className="flex-1">
              Currently Unavailable
            </Button>
          )}
          {phone && (
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BloodTypeCard;