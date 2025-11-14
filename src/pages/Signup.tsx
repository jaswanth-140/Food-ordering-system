import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, ArrowRight, User, Phone, Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
 
export default function Signup() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill in all required fields!");
      return;
    }

    // TODO: PRODUCTION - Replace with actual backend API call
    // This should send data to server for:
    // - Password hashing (bcrypt)
    // - Database storage
    // - Email verification
    // - Proper authentication
    
    // Create user account (mock - for demo only)
    const userData = {
      name: formData.name,
      email: formData.email,
      picture: undefined,
    };
    
    login(userData);
    navigate("/");
  };

  const handleGoogleSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const decoded = JSON.parse(atob(credentialResponse.credential.split(".")[1]));
      const userData = {
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
        sub: decoded.sub,
      };
      login(userData);
      navigate("/");
    }
  };

  const handleGoogleError = () => {
    console.error("Google signup failed");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl min-h-[700px] bg-gradient-to-br from-primary/5 via-background to-orange-500/5 relative overflow-hidden border-primary/20">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="rgb(251 146 60)"
        />
        
        <div className="flex flex-col md:flex-row h-full">
          {/* Left side - Visual Section */}
          <div className="flex-1 relative p-8 flex flex-col justify-center items-center bg-gradient-to-br from-orange-500/10 via-primary/5 to-orange-600/10">
            <div className="w-full h-[400px] md:h-[600px] flex items-center justify-center">
              <div className="text-center animate-in fade-in duration-1000">
                <div className="relative mb-8">
                  <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full"></div>
                  <Utensils className="h-40 w-40 md:h-56 md:w-56 text-primary mx-auto relative animate-float" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                  🍔 🍕 🍜
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                  Join Our Food Community
                </h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-4">
                  Start ordering from 200+ restaurants
                </p>
                <div className="flex gap-4 justify-center mt-6 text-sm text-neutral-500">
                  <span>⚡ Fast Delivery</span>
                  <span>🎯 Live Tracking</span>
                  <span>⭐ Top Rated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Signup Form */}
          <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 mb-2">
                  Create Account
                </h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-300">
                  Sign up to start ordering
                </p>
              </div>

              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="pl-10 h-12"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10 h-12"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number (Optional)
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 9876543210"
                      className="pl-10 h-12"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password *
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 h-12"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">
                    Confirm Password *
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 h-12"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 text-lg gap-2 group">
                  Create Account
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-neutral-200 dark:border-neutral-800" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-neutral-500">Or sign up with</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-center">
                    <GoogleLogin
                      onSuccess={handleGoogleSuccess}
                      onError={handleGoogleError}
                      useOneTap
                      text="signup_with"
                      shape="rectangular"
                      width="384"
                    />
                  </div>
                  <Button type="button" variant="outline" className="w-full h-12" onClick={() => navigate("/")}>
                    Continue with Facebook
                  </Button>
                </div>
              </form>

              <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
                Already have an account?{" "}
                <button onClick={() => navigate("/login")} className="text-primary font-medium hover:underline">
                  Sign in
                </button>
              </p>

              <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 pt-2">
                By signing up, you agree to our{" "}
                <a href="#" className="text-primary hover:underline">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
