import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, MapPin, Phone, User, Droplets } from 'lucide-react';

const EmergencyRequestForm = () => {
  const [urgencyLevel, setUrgencyLevel] = useState('');
  const [bloodType, setBloodType] = useState('');

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const urgencyLevels = [
    { value: 'critical', label: 'Critical (Immediate)', color: 'text-destructive' },
    { value: 'high', label: 'High (Within 2 hours)', color: 'text-warning' },
    { value: 'normal', label: 'Normal (Within 24 hours)', color: 'text-success' }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Emergency Blood Request</h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Submit an urgent blood request and we'll notify matching donors immediately
          </p>
        </div>

        <Card className="shadow-emergency">
          <CardHeader className="bg-gradient-subtle">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Droplets className="w-6 h-6 text-primary" />
              Patient Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            {/* Patient Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="patientName" className="flex items-center gap-2 text-base mb-2">
                  <User className="w-4 h-4" />
                  Patient Name *
                </Label>
                <Input 
                  id="patientName" 
                  placeholder="Enter patient's full name"
                  className="h-12"
                />
              </div>
              <div>
                <Label htmlFor="patientAge" className="text-base mb-2 block">
                  Age *
                </Label>
                <Input 
                  id="patientAge" 
                  type="number" 
                  placeholder="Patient's age"
                  className="h-12"
                />
              </div>
            </div>

            {/* Blood Type and Urgency */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="flex items-center gap-2 text-base mb-2">
                  <Droplets className="w-4 h-4" />
                  Blood Type Required *
                </Label>
                <Select value={bloodType} onValueChange={setBloodType}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select blood type" />
                  </SelectTrigger>
                  <SelectContent>
                    {bloodTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="flex items-center gap-2 text-base mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  Urgency Level *
                </Label>
                <Select value={urgencyLevel} onValueChange={setUrgencyLevel}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select urgency level" />
                  </SelectTrigger>
                  <SelectContent>
                    {urgencyLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        <span className={level.color}>{level.label}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Hospital Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Hospital Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="hospitalName" className="text-base mb-2 block">
                    Hospital Name *
                  </Label>
                  <Input 
                    id="hospitalName" 
                    placeholder="Enter hospital name"
                    className="h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="hospitalPhone" className="flex items-center gap-2 text-base mb-2">
                    <Phone className="w-4 h-4" />
                    Hospital Contact *
                  </Label>
                  <Input 
                    id="hospitalPhone" 
                    placeholder="Hospital phone number"
                    className="h-12"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="hospitalAddress" className="text-base mb-2 block">
                  Hospital Address *
                </Label>
                <Textarea 
                  id="hospitalAddress" 
                  placeholder="Enter complete hospital address"
                  className="min-h-[100px]"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="contactName" className="text-base mb-2 block">
                    Contact Person *
                  </Label>
                  <Input 
                    id="contactName" 
                    placeholder="Your name"
                    className="h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="contactPhone" className="text-base mb-2 block">
                    Phone Number *
                  </Label>
                  <Input 
                    id="contactPhone" 
                    placeholder="Your phone number"
                    className="h-12"
                  />
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <Label htmlFor="notes" className="text-base mb-2 block">
                Additional Notes
              </Label>
              <Textarea 
                id="notes" 
                placeholder="Any additional information about the emergency..."
                className="min-h-[100px]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button 
                variant="emergency" 
                size="lg" 
                className="w-full text-lg py-6"
              >
                <AlertTriangle className="w-5 h-5" />
                Submit Emergency Request
              </Button>
              <p className="text-sm text-muted-foreground mt-3 text-center">
                This will immediately notify all matching donors in your area
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EmergencyRequestForm;