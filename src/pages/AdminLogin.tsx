import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Shield, ArrowLeft, Building2, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [organizationType, setOrganizationType] = useState('');
  const [organizationId, setOrganizationId] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">BloodConnect</h1>
          </div>
          <p className="text-muted-foreground">Hospital & NGO Admin Portal</p>
        </div>

        <Card className="shadow-medical border-primary/10">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl text-primary">Admin Login</CardTitle>
            <CardDescription>
              Access hospital and blood bank management portal
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="admin-email" className="text-sm font-medium flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                Admin Email
              </Label>
              <Input
                id="admin-email"
                type="email"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-primary/20 focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="admin-password" className="text-sm font-medium flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Password
              </Label>
              <Input
                id="admin-password"
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization-type" className="text-sm font-medium flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" />
                Organization Type
              </Label>
              <Select value={organizationType} onValueChange={setOrganizationType}>
                <SelectTrigger className="border-primary/20 focus:border-primary">
                  <SelectValue placeholder="Select organization type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hospital">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      Hospital
                    </div>
                  </SelectItem>
                  <SelectItem value="blood-bank">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      Blood Bank
                    </div>
                  </SelectItem>
                  <SelectItem value="ngo">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      NGO
                    </div>
                  </SelectItem>
                  <SelectItem value="medical-college">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      Medical College
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization-id" className="text-sm font-medium flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Organization ID / License No.
              </Label>
              <Input
                id="organization-id"
                type="text"
                placeholder="Enter registration/license number"
                value={organizationId}
                onChange={(e) => setOrganizationId(e.target.value)}
                className="border-primary/20 focus:border-primary"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="admin-remember" className="rounded border-primary/20" />
                <Label htmlFor="admin-remember" className="text-muted-foreground">
                  Remember me
                </Label>
              </div>
              <Link to="/admin-forgot-password" className="text-primary hover:text-primary/80">
                Forgot password?
              </Link>
            </div>

            <Button 
              variant="medical" 
              size="lg" 
              className="w-full"
              onClick={() => console.log('Admin login clicked')}
            >
              <Shield className="mr-2 h-4 w-4" />
              Login as Admin
            </Button>

            <div className="text-center pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Need admin access?{' '}
                <Link to="/admin-register" className="text-primary hover:text-primary/80 font-medium">
                  Register Organization
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 space-y-4">
          <div className="p-4 bg-muted/50 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <p className="text-sm font-medium text-foreground">Verification Requirements</p>
            </div>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Valid organization registration/license required</li>
              <li>• All registrations verified before dashboard access</li>
              <li>• Only verified organizations can manage donor requests</li>
            </ul>
          </div>
          
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-primary" />
              <p className="text-sm font-medium text-primary">Quick Access Features</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Building2 className="h-3 w-3" />
                <span>Organization Dashboard</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>Donor Location Maps</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>Emergency Requests</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                <span>Secure Data Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;