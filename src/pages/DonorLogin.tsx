import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-8 w-8 text-primary fill-primary animate-pulse" />
            <h1 className="text-2xl font-bold text-foreground">BloodConnect</h1>
          </div>
          <p className="text-muted-foreground">Login as a Blood Donor</p>
        </div>

        <Card className="shadow-medical border-primary/10">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl text-primary">Donor Login</CardTitle>
            <CardDescription>
              Access your donor profile and help save lives
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-primary/20 focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-primary/20 focus:border-primary"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" className="rounded border-primary/20" />
                <Label htmlFor="remember" className="text-muted-foreground">
                  Remember me
                </Label>
              </div>
              <Link to="/forgot-password" className="text-primary hover:text-primary/80">
                Forgot password?
              </Link>
            </div>

            <Button 
              variant="hero" 
              size="lg" 
              className="w-full"
              onClick={() => console.log('Donor login clicked')}
            >
              <Heart className="mr-2 h-4 w-4" />
              Login as Donor
            </Button>

            <div className="text-center pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/donor-register" className="text-primary hover:text-primary/80 font-medium">
                  Register as Donor
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonorLogin;