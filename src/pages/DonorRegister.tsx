import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { 
  User, 
  Calendar, 
  Users, 
  Phone, 
  Mail, 
  Droplet, 
  MapPin, 
  FileText, 
  Shield, 
  Heart,
  CalendarIcon 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const donorSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  age: z.number().min(18, "Must be at least 18 years old").max(60, "Must be under 60 years old"),
  gender: z.enum(["male", "female", "other"]),
  contactNumber: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  email: z.string().email("Invalid email address"),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
  lastDonationDate: z.date().optional(),
  address: z.string().min(10, "Address must be at least 10 characters"),
  pinCode: z.string().regex(/^[0-9]{6}$/, "Pin code must be 6 digits"),
  healthConditions: z.array(z.string()).optional(),
  otherHealthCondition: z.string().optional(),
  covidVaccinated: z.enum(["yes", "no"]),
  availability: z.boolean().default(true),
});

type DonorFormData = z.infer<typeof donorSchema>;

const healthConditionOptions = [
  "Diabetes",
  "Hypertension", 
  "Heart Disease",
  "Asthma",
  "None"
];

const DonorRegister = () => {
  const [selectedHealthConditions, setSelectedHealthConditions] = useState<string[]>([]);

  const form = useForm<DonorFormData>({
    resolver: zodResolver(donorSchema),
    defaultValues: {
      availability: true,
      healthConditions: [],
    },
  });

  const onSubmit = (data: DonorFormData) => {
    toast({
      title: "Registration Submitted!",
      description: "Your details will be verified by our admin team before activation.",
    });
    console.log(data);
  };

  const handleHealthConditionChange = (condition: string, checked: boolean) => {
    let updated = [...selectedHealthConditions];
    if (checked) {
      updated.push(condition);
    } else {
      updated = updated.filter(c => c !== condition);
    }
    setSelectedHealthConditions(updated);
    form.setValue("healthConditions", updated);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-primary rounded-full">
              <Droplet className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-primary">Register as Donor</h1>
          </div>
          <p className="text-muted-foreground text-lg">Join our life-saving community of blood donors</p>
        </div>

        {/* Form Card */}
        <Card className="max-w-4xl mx-auto shadow-medical">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Donor Registration Form</CardTitle>
            <CardDescription>
              Please fill out all required information accurately. Your details will help us connect you with those in need.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <User className="h-4 w-4 text-primary" />
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            Age
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="Enter your age" 
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            Gender
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="contactNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-primary" />
                            Contact Number
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter 10-digit phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-primary" />
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Blood Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                    <Droplet className="h-5 w-5" />
                    Blood Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="bloodGroup"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Droplet className="h-4 w-4 text-primary" />
                            Blood Group
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select blood group" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                                <SelectItem key={group} value={group}>{group}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastDonationDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            Last Donation Date (Optional)
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <CalendarComponent
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date > new Date()}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Location Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Location Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            Current Address
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Enter your complete address"
                              className="min-h-[80px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="pinCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            Pin Code
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter 6-digit pin code" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center justify-center p-4 border-2 border-dashed border-primary/30 rounded-lg">
                      <Button variant="outline" type="button" className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Pin Your Location
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Health & Eligibility */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Health & Eligibility
                  </h3>
                  
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="healthConditions"
                      render={() => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-primary" />
                            Any Health Conditions?
                          </FormLabel>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {healthConditionOptions.map((condition) => (
                              <div key={condition} className="flex items-center space-x-2">
                                <Checkbox
                                  id={condition}
                                  checked={selectedHealthConditions.includes(condition)}
                                  onCheckedChange={(checked) => 
                                    handleHealthConditionChange(condition, checked as boolean)
                                  }
                                />
                                <Label htmlFor={condition} className="text-sm font-normal">
                                  {condition}
                                </Label>
                              </div>
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {selectedHealthConditions.includes("Other") && (
                      <FormField
                        control={form.control}
                        name="otherHealthCondition"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Please specify other health condition</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter other health condition" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    <FormField
                      control={form.control}
                      name="covidVaccinated"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-primary" />
                            COVID-19 Vaccinated?
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-row space-x-6"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="yes" />
                                <Label htmlFor="yes">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="no" />
                                <Label htmlFor="no">No</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="availability"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base flex items-center gap-2">
                              <Heart className="h-4 w-4 text-primary" />
                              Available for Donation
                            </FormLabel>
                            <FormDescription>
                              Toggle your availability status for blood donation
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center space-y-4">
                  <Button 
                    type="submit" 
                    variant="emergency" 
                    size="lg" 
                    className="w-full md:w-auto px-12 py-3 text-lg font-semibold"
                  >
                    <Droplet className="h-5 w-5 mr-2" />
                    Register Now
                  </Button>
                  
                  <div className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
                    <p className="flex items-center justify-center gap-2">
                      <Shield className="h-4 w-4" />
                      Your details will be verified by our admin team before activation.
                    </p>
                    <p className="mt-2">
                      By registering, you agree to our terms of service and privacy policy. 
                      Medical eligibility will be verified before donation approval.
                    </p>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonorRegister;