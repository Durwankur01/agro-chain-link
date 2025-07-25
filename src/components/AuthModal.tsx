import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/enhanced-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Leaf, Store, ShoppingCart, Mail, Phone, Lock } from "lucide-react"
import { supabase } from "@/integrations/supabase/client"
import { toast } from "sonner"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onAuth: (role: 'vendor' | 'buyer') => void
}

export const AuthModal = ({ isOpen, onClose, onAuth }: AuthModalProps) => {
  const [role, setRole] = useState<'vendor' | 'buyer'>('vendor')
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    name: '',
    businessName: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all required fields")
      return
    }

    if (authMode === 'signup' && formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    setLoading(true)
    try {
      if (authMode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.name,
              role: role,
              business_name: formData.businessName,
              phone: formData.phone
            }
          }
        })
        
        if (error) throw error
        if (data.user) {
          toast.success("Account created successfully!")
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        })
        
        if (error) throw error
        toast.success("Logged in successfully!")
      }
      onClose()
    } catch (error: any) {
      toast.error(error.message || "Authentication failed")
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Leaf className="w-6 h-6 text-primary" />
            Join AgroChain
          </DialogTitle>
        </DialogHeader>

        <Tabs value={authMode} onValueChange={(value) => setAuthMode(value as 'login' | 'signup')} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button type="submit" variant="hero" className="w-full" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Role Selection */}
              <Card className="bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg">Choose Your Role</CardTitle>
                  <CardDescription>Select how you want to use AgroChain</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={role} onValueChange={(value) => setRole(value as 'vendor' | 'buyer')}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Label htmlFor="vendor" className="cursor-pointer">
                        <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-primary/5 transition-colors">
                          <RadioGroupItem value="vendor" id="vendor" />
                          <div className="flex items-center space-x-2">
                            <Store className="w-5 h-5 text-primary" />
                            <div>
                              <div className="font-medium">Vendor/Supplier</div>
                              <div className="text-sm text-muted-foreground">Sell agricultural products</div>
                            </div>
                          </div>
                        </div>
                      </Label>

                      <Label htmlFor="buyer" className="cursor-pointer">
                        <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-primary/5 transition-colors">
                          <RadioGroupItem value="buyer" id="buyer" />
                          <div className="flex items-center space-x-2">
                            <ShoppingCart className="w-5 h-5 text-accent" />
                            <div>
                              <div className="font-medium">Buyer</div>
                              <div className="text-sm text-muted-foreground">Purchase agricultural products</div>
                            </div>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessName">
                    {role === 'vendor' ? 'Business/Farm Name' : 'Company Name'}
                  </Label>
                  <Input
                    id="businessName"
                    placeholder={role === 'vendor' ? 'Your farm/business name' : 'Your company name'}
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 9999999999"
                    className="pl-10"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create password"
                      className="pl-10"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm password"
                      className="pl-10"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" variant="hero" className="w-full" disabled={loading}>
                {loading ? "Creating Account..." : `Create Account as ${role === 'vendor' ? 'Vendor' : 'Buyer'}`}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}