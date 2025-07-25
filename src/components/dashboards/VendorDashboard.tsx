import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Store, 
  Package, 
  TrendingUp, 
  Clock, 
  MapPin, 
  Star,
  Plus,
  Truck,
  DollarSign
} from "lucide-react"
import vendorImage from "@/assets/vendor-dashboard.jpg"

interface VendorDashboardProps {
  onLogout: () => void
}

export const VendorDashboard = ({ onLogout }: VendorDashboardProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-soft border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/vendor-avatar.jpg" />
                <AvatarFallback className="bg-primary text-primary-foreground">RS</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-bold text-foreground">Welcome back, Raj Singh</h1>
                <p className="text-sm text-muted-foreground">Green Valley Farms</p>
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
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">247</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">₹1,24,580</div>
              <p className="text-xs text-muted-foreground">
                +8% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Products</CardTitle>
              <Store className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">18</div>
              <p className="text-xs text-muted-foreground">
                +2 new this week
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">4.8</div>
              <p className="text-xs text-muted-foreground">
                From 156 reviews
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  Recent Orders
                </CardTitle>
                <CardDescription>Manage your incoming orders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    id: "ORD-001",
                    buyer: "Mumbai Fresh Market",
                    items: "Tomatoes (50kg), Onions (30kg)",
                    amount: "₹4,200",
                    status: "confirmed",
                    time: "2 hours ago"
                  },
                  {
                    id: "ORD-002",
                    buyer: "Delhi Wholesale",
                    items: "Potatoes (100kg)",
                    amount: "₹2,800",
                    status: "packed",
                    time: "4 hours ago"
                  },
                  {
                    id: "ORD-003",
                    buyer: "Fresh Basket Store",
                    items: "Carrots (25kg), Beans (15kg)",
                    amount: "₹1,950",
                    status: "shipped",
                    time: "1 day ago"
                  }
                ].map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{order.id}</span>
                        <Badge variant={
                          order.status === 'confirmed' ? 'default' : 
                          order.status === 'packed' ? 'secondary' : 'outline'
                        }>
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-foreground">{order.buyer}</p>
                      <p className="text-xs text-muted-foreground">{order.items}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {order.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{order.amount}</p>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Product Overview */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="hero" className="w-full justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Product
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="w-4 h-4 mr-2" />
                  Update Location
                </Button>
              </CardContent>
            </Card>

            {/* Product Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
                <CardDescription>Best performing items this week</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <img 
                    src={vendorImage} 
                    alt="Vendor Dashboard" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-medium">Fresh Tomatoes</p>
                    <p className="text-xs">₹45/kg • 120 orders</p>
                  </div>
                </div>
                
                {[
                  { name: "Onions", price: "₹32/kg", orders: 89 },
                  { name: "Potatoes", price: "₹28/kg", orders: 76 },
                  { name: "Carrots", price: "₹38/kg", orders: 54 }
                ].map((product, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.orders} orders</p>
                    </div>
                    <p className="font-bold">{product.price}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}