import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { 
  ShoppingCart, 
  Search, 
  Filter, 
  MapPin, 
  Star,
  Clock,
  Package,
  Truck,
  DollarSign,
  Leaf
} from "lucide-react"
import buyerImage from "@/assets/buyer-dashboard.jpg"

interface BuyerDashboardProps {
  onLogout: () => void
}

export const BuyerDashboard = ({ onLogout }: BuyerDashboardProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-soft border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/buyer-avatar.jpg" />
                <AvatarFallback className="bg-accent text-accent-foreground">AM</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-bold text-foreground">Welcome, Anita Mehta</h1>
                <p className="text-sm text-muted-foreground">Fresh Market Solutions</p>
              </div>
            </div>
            <Button variant="outline" onClick={onLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">89</div>
              <p className="text-xs text-muted-foreground">
                +5 this week
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">₹2,45,680</div>
              <p className="text-xs text-muted-foreground">
                This month
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">12</div>
              <p className="text-xs text-muted-foreground">
                In progress
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Saved</CardTitle>
              <Leaf className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">₹18,420</div>
              <p className="text-xs text-muted-foreground">
                vs market price
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Browse Suppliers */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Browse Local Suppliers
                </CardTitle>
                <CardDescription>Find fresh produce from nearby farmers</CardDescription>
                
                {/* Search & Filter */}
                <div className="flex gap-2 pt-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search products..." className="pl-10" />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    farmer: "Green Valley Farms",
                    location: "2.5 km away",
                    items: ["Tomatoes", "Onions", "Carrots"],
                    price: "₹45/kg",
                    rating: 4.8,
                    quality: "A+",
                    verified: true
                  },
                  {
                    farmer: "Sunrise Agriculture",
                    location: "4.2 km away", 
                    items: ["Potatoes", "Beans", "Peppers"],
                    price: "₹32/kg",
                    rating: 4.6,
                    quality: "A",
                    verified: true
                  },
                  {
                    farmer: "Fresh Harvest Co.",
                    location: "6.8 km away",
                    items: ["Spinach", "Lettuce", "Herbs"],
                    price: "₹28/kg",
                    rating: 4.5,
                    quality: "A",
                    verified: false
                  }
                ].map((supplier, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-medium transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{supplier.farmer}</h3>
                          {supplier.verified && (
                            <Badge variant="default" className="bg-success text-success-foreground">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {supplier.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-1">
                          Grade {supplier.quality}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-current text-warning" />
                          <span className="text-sm font-medium">{supplier.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-sm text-muted-foreground mb-1">Available items:</p>
                      <div className="flex flex-wrap gap-1">
                        {supplier.items.map((item, itemIndex) => (
                          <Badge key={itemIndex} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Starting from</p>
                        <p className="text-lg font-bold text-primary">{supplier.price}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Request Quote
                        </Button>
                        <Button variant="hero" size="sm">
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          Order Now
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Tracking & Quick Actions */}
          <div className="space-y-6">
            {/* Recent Orders Tracking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  Order Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <img 
                    src={buyerImage} 
                    alt="Buyer Dashboard" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-medium">Latest Order</p>
                    <p className="text-xs">Arriving in 2-3 hours</p>
                  </div>
                </div>
                
                {[
                  {
                    id: "ORD-089",
                    supplier: "Green Valley Farms",
                    status: "On the way",
                    eta: "2 hours",
                    statusColor: "warning"
                  },
                  {
                    id: "ORD-087",
                    supplier: "Sunrise Agriculture", 
                    status: "Packed",
                    eta: "4 hours",
                    statusColor: "secondary"
                  },
                  {
                    id: "ORD-085",
                    supplier: "Fresh Harvest Co.",
                    status: "Confirmed",
                    eta: "Tomorrow",
                    statusColor: "default"
                  }
                ].map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{order.id}</p>
                      <p className="text-xs text-muted-foreground">{order.supplier}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={order.statusColor as any} className="mb-1">
                        {order.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        ETA: {order.eta}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="hero" className="w-full justify-start">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  New Order
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="w-4 h-4 mr-2" />
                  Find Nearby Suppliers
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Package className="w-4 h-4 mr-2" />
                  View Order History
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}