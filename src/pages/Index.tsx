import { useState } from "react"
import { Hero } from "@/components/Hero"
import { AuthModal } from "@/components/AuthModal"
import { VendorDashboard } from "@/components/dashboards/VendorDashboard"
import { BuyerDashboard } from "@/components/dashboards/BuyerDashboard"

type UserRole = 'vendor' | 'buyer' | null

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [userRole, setUserRole] = useState<UserRole>(null)

  const handleGetStarted = () => {
    setIsAuthModalOpen(true)
  }

  const handleAuth = (role: 'vendor' | 'buyer') => {
    setUserRole(role)
    setIsAuthModalOpen(false)
  }

  const handleLogout = () => {
    setUserRole(null)
  }

  // Show appropriate dashboard based on user role
  if (userRole === 'vendor') {
    return <VendorDashboard onLogout={handleLogout} />
  }

  if (userRole === 'buyer') {
    return <BuyerDashboard onLogout={handleLogout} />
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
    </>
  )
};

export default Index;
