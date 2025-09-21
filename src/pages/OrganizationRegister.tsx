import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Upload, 
  User, 
  Lock,
  Globe,
  FileText,
  Calendar
} from "lucide-react";

const OrganizationRegister = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationType: "",
    registrationNumber: "",
    yearEstablished: "",
    email: "",
    contactNumber: "",
    website: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    adminName: "",
    adminEmail: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const { organizationName, organizationType, registrationNumber, email, contactNumber, adminName, adminEmail, password, confirmPassword, pinCode, termsAccepted } = formData;
    
    if (!organizationName || !organizationType || !registrationNumber || !email || !contactNumber || !adminName || !adminEmail || !password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || !emailRegex.test(adminEmail)) {
      toast({
        title: "Error",
        description: "Please enter valid email addresses.",
        variant: "destructive",
      });
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(contactNumber.replace(/\D/g, ''))) {
      toast({
        title: "Error",
        description: "Please enter a valid 10-digit contact number.",
        variant: "destructive",
      });
      return false;
    }

    const pinCodeRegex = /^[0-9]{6}$/;
    if (pinCode && !pinCodeRegex.test(pinCode)) {
      toast({
        title: "Error",
        description: "Please enter a valid 6-digit pin code.",
        variant: "destructive",
      });
      return false;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return false;
    }

    if (password.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters long.",
        variant: "destructive",
      });
      return false;
    }

    if (!termsAccepted) {
      toast({
        title: "Error",
        description: "Please accept the terms and conditions.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: "Registration Submitted!",
        description: "Your organization registration has been submitted for verification. You will receive an email once approved.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-4">
            <h1 className="text-3xl font-bold text-primary">LifeSave</h1>
          </Link>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Register Hospital / Organization</h2>
          <p className="text-muted-foreground">Join our network to help save lives through blood donation</p>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              Organization Registration
            </CardTitle>
            <CardDescription>
              All registrations will be verified before activation. Only verified organizations can access the admin dashboard.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Organization Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">Organization Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="organizationName" className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      Organization / Hospital Name *
                    </Label>
                    <Input
                      id="organizationName"
                      value={formData.organizationName}
                      onChange={(e) => handleInputChange("organizationName", e.target.value)}
                      placeholder="Enter organization name"
                      className="transition-medical"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organizationType" className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      Type of Organization *
                    </Label>
                    <Select value={formData.organizationType} onValueChange={(value) => handleInputChange("organizationType", value)}>
                      <SelectTrigger className="transition-medical">
                        <SelectValue placeholder="Select organization type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hospital">Hospital</SelectItem>
                        <SelectItem value="blood-bank">Blood Bank</SelectItem>
                        <SelectItem value="ngo">NGO</SelectItem>
                        <SelectItem value="medical-college">Medical College</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber" className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      Registration / License Number *
                    </Label>
                    <Input
                      id="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={(e) => handleInputChange("registrationNumber", e.target.value)}
                      placeholder="Enter registration number"
                      className="transition-medical"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="yearEstablished" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      Year of Establishment
                    </Label>
                    <Input
                      id="yearEstablished"
                      type="number"
                      min="1800"
                      max={new Date().getFullYear()}
                      value={formData.yearEstablished}
                      onChange={(e) => handleInputChange("yearEstablished", e.target.value)}
                      placeholder="e.g. 1985"
                      className="transition-medical"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">Contact Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      Official Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="organization@example.com"
                      className="transition-medical"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactNumber" className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      Contact Number *
                    </Label>
                    <Input
                      id="contactNumber"
                      value={formData.contactNumber}
                      onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                      placeholder="Enter official contact number"
                      className="transition-medical"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="website" className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-primary" />
                      Website (Optional)
                    </Label>
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      placeholder="https://www.yourorganization.com"
                      className="transition-medical"
                    />
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">Location Details</h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      Full Address *
                    </Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Enter complete address"
                      className="transition-medical"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="Enter city"
                        className="transition-medical"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        placeholder="Enter state"
                        className="transition-medical"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pinCode">Pin Code *</Label>
                      <Input
                        id="pinCode"
                        value={formData.pinCode}
                        onChange={(e) => handleInputChange("pinCode", e.target.value)}
                        placeholder="6-digit pin code"
                        maxLength={6}
                        className="transition-medical"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Admin Access Credentials */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">Admin Access Credentials</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="adminName" className="flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      Admin Name *
                    </Label>
                    <Input
                      id="adminName"
                      value={formData.adminName}
                      onChange={(e) => handleInputChange("adminName", e.target.value)}
                      placeholder="Responsible person's name"
                      className="transition-medical"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="adminEmail" className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      Admin Email *
                    </Label>
                    <Input
                      id="adminEmail"
                      type="email"
                      value={formData.adminEmail}
                      onChange={(e) => handleInputChange("adminEmail", e.target.value)}
                      placeholder="admin@organization.com"
                      className="transition-medical"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-primary" />
                      Password *
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      placeholder="Minimum 8 characters"
                      className="transition-medical"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-primary" />
                      Confirm Password *
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      placeholder="Re-enter password"
                      className="transition-medical"
                    />
                  </div>
                </div>
              </div>

              {/* Document Upload */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">Document Upload</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="documents" className="flex items-center gap-2">
                    <Upload className="h-4 w-4 text-primary" />
                    Upload License/Proof of Registration
                  </Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, JPG, PNG (Max 10MB)
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleInputChange("termsAccepted", !!checked)}
                />
                <Label htmlFor="terms" className="text-sm">
                  I confirm that the information provided is true and I accept the{" "}
                  <Link to="#" className="text-primary hover:underline">
                    Terms & Conditions
                  </Link>
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                variant="emergency"
                size="lg"
              >
                <Building2 className="h-5 w-5 mr-2" />
                Register Organization
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer Links */}
        <div className="text-center mt-6 space-y-2">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/admin-login" className="text-primary hover:underline font-medium">
              Login as Admin
            </Link>
          </p>
          <p className="text-sm text-muted-foreground">
            Individual donor?{" "}
            <Link to="/donor-register" className="text-primary hover:underline font-medium">
              Register as Donor
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrganizationRegister;