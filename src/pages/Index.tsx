import { useState } from "react"
import { Hero } from "@/components/Hero"
import { AuthModal } from "@/components/AuthModal"
import { VendorDashboard } from "@/components/dashboards/VendorDashboard"
import { BuyerDashboard } from "@/components/dashboards/BuyerDashboard"
import { useAuth } from "@/hooks/useAuth"
import { Toaster } from "@/components/ui/sonner"

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { user, profile, loading, logout } = useAuth()

  const handleGetStarted = () => {
    setIsAuthModalOpen(true)
  }

  const handleAuth = (role: 'vendor' | 'buyer') => {
    // Auth hook will handle the user state automatically
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  // Show appropriate dashboard based on user role
  if (user && profile?.role === 'vendor') {
    return <VendorDashboard onLogout={logout} />
  }

  if (user && profile?.role === 'buyer') {
    return <BuyerDashboard onLogout={logout} />
  }

  // Show landing page for non-authenticated users
  return (
    <>
      <Hero onGetStarted={handleGetStarted} />
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuth={handleAuth}
      />
      <Toaster />
    </>
  )
};

export default Index;
