import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, ArrowRight, Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
 
export default function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [splineError, setSplineError] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add email/password authentication logic here
    const mockUser = {
      name: "John Doe",
      email: "john.doe@example.com",
      picture: undefined,
    };
    login(mockUser);
    navigate("/");
  };

  const handleGoogleSuccess = (credentialResponse: CredentialResponse) => {
    // Decode the JWT token to get user info
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
    console.error("Google login failed");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl h-[700px] bg-gradient-to-br from-primary/5 via-background to-orange-500/5 relative overflow-hidden border-primary/20">
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
                  <img 
                    src="https://img.freepik.com/free-psd/delicious-burger-food-menu-social-media-banner-template_47987-14371.jpg?w=1380" 
                    alt="3D Food" 
                    className="h-40 w-40 md:h-56 md:w-56 mx-auto relative animate-float object-contain drop-shadow-2xl"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=800&fit=crop";
                    }}
                  />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                  Delicious Food Delivered
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                  Delicious Food Awaits
                </h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-4">
                  Order from 200+ restaurants near you
                </p>
                <div className="flex gap-4 justify-center mt-6 text-sm text-neutral-500">
                  <span>⚡ Fast Delivery</span>
                  <span>🎯 Live Tracking</span>
                  <span>⭐ Top Rated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Login Form */}
          <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 mb-2">
                  Welcome Back
                </h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-300">
                  Sign in to order your favorite food
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 h-12"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-neutral-300" />
                    <span className="text-neutral-600 dark:text-neutral-400">Remember me</span>
                  </label>
                  <a href="#" className="text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>

                <Button type="submit" className="w-full h-12 text-lg gap-2 group">
                  Sign In
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-neutral-200 dark:border-neutral-800" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-neutral-500">Or continue with</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-center">
                    <GoogleLogin
                      onSuccess={handleGoogleSuccess}
                      onError={handleGoogleError}
                      useOneTap
                      text="continue_with"
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
                Don't have an account?{" "}
                <button onClick={handleSignUp} className="text-primary font-medium hover:underline">
                  Sign up
                </button>
              </p>

              <div className="flex gap-4 text-xs text-neutral-500 dark:text-neutral-400 pt-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  <span>Fast delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  <span>Live tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  <span>Best restaurants</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
