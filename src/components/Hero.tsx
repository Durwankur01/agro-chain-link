import { Button } from "@/components/ui/enhanced-button"
import { Leaf, Users, Truck, Shield } from "lucide-react"
import heroImage from "@/assets/hero-agriculture.jpg"

interface HeroProps {
  onGetStarted: () => void
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCA0LTRzNCwyIDQsNGMwLDItMiw0LTQsNHMtNC0yLTQtNHptMC0zMGMwLTIgMi00IDQtNHM0LDIgNCw0YzAsMi0yLDQtNCw0cy00LTItNC00em0tMzAtNGMwLTIgMi00IDQtNHM0LDIgNCw0YzAsMi0yLDQtNCw0cy00LTItNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
                <Leaf className="w-4 h-4 mr-2" />
                Agricultural Supply Chain Platform
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Connecting 
              <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent"> Farmers </span>
              with 
              <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent"> Markets</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Bridge the gap between agricultural producers and buyers with our innovative platform. 
              Get real-time pricing, quality tracking, and seamless transactions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="accent" 
                size="xl" 
                onClick={onGetStarted}
                className="animate-scale-in"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Watch Demo
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-3 w-12 h-12 mx-auto mb-3 backdrop-blur-sm">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-white/90 text-sm font-medium">Role-Based Access</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-3 w-12 h-12 mx-auto mb-3 backdrop-blur-sm">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <p className="text-white/90 text-sm font-medium">Live Tracking</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-3 w-12 h-12 mx-auto mb-3 backdrop-blur-sm">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <p className="text-white/90 text-sm font-medium">Secure Payments</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-float">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Agricultural Supply Chain" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-medium animate-scale-in hidden md:block">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Active Vendors</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-medium animate-scale-in hidden md:block">
              <div className="text-2xl font-bold text-accent">1000+</div>
              <div className="text-sm text-muted-foreground">Daily Orders</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}