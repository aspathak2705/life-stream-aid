import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
              <Label htmlFor="admin-email" className="text-sm font-medium">
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
              <Label htmlFor="admin-password" className="text-sm font-medium">
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
              <Label htmlFor="organization" className="text-sm font-medium">
                Organization Type
              </Label>
              <select 
                id="organization"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select organization type</option>
                <option value="hospital">Hospital</option>
                <option value="blood-bank">Blood Bank</option>
                <option value="ngo">NGO</option>
                <option value="clinic">Medical Clinic</option>
              </select>
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

        <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
          <p className="text-xs text-muted-foreground text-center">
            <Shield className="inline h-3 w-3 mr-1" />
            Secure admin portal for hospitals, blood banks, and NGOs
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;