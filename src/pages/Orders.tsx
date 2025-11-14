import { Clock, MapPin, Package, CheckCircle2, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import biryaniImage from "@/assets/biryani.jpg";
import pizzaImage from "@/assets/pizza.jpg";

const orders: any[] = [];

const getStatusColor = (status: string) => {
  switch (status) {
    case "delivered":
      return "bg-green-500/10 text-green-700 dark:text-green-400";
    case "in-progress":
      return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
    case "cancelled":
      return "bg-red-500/10 text-red-700 dark:text-red-400";
    default:
      return "bg-neutral-500/10 text-neutral-700 dark:text-neutral-400";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "delivered":
      return <CheckCircle2 className="h-4 w-4" />;
    case "in-progress":
      return <Clock className="h-4 w-4 animate-spin" />;
    case "cancelled":
      return <Package className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

export default function Orders() {
  const activeOrders = orders.filter((order) => order.status === "in-progress");
  const pastOrders = orders.filter((order) => order.status !== "in-progress");

  const OrderCard = ({ order }: { order: typeof orders[0] }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row gap-4 p-4">
          {/* Image */}
          <img
            src={order.image}
            alt={order.restaurant}
            className="w-full sm:w-32 h-32 object-cover rounded-lg"
          />

          {/* Content */}
          <div className="flex-1 space-y-3">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">{order.restaurant}</h3>
                <p className="text-sm text-muted-foreground">{order.id}</p>
              </div>
              <Badge className={getStatusColor(order.status)}>
                <span className="flex items-center gap-1">
                  {getStatusIcon(order.status)}
                  {order.status}
                </span>
              </Badge>
            </div>

            {/* Items */}
            <div className="text-sm text-muted-foreground">
              {order.items.join(", ")}
            </div>

            {/* Details */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {order.date} at {order.time}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {order.deliveryAddress}
              </span>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 border-t">
              <span className="font-semibold text-lg">₹{order.total}</span>
              <div className="flex gap-2">
                {order.status === "in-progress" && (
                  <Badge variant="outline" className="text-primary">
                    Arriving in {order.estimatedTime}
                  </Badge>
                )}
                <Button variant="outline" size="sm" className="gap-1">
                  View Details
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Orders</h1>
          <p className="text-muted-foreground">
            Track and manage all your food orders
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="active">
              Active Orders ({activeOrders.length})
            </TabsTrigger>
            <TabsTrigger value="past">
              Past Orders ({pastOrders.length})
            </TabsTrigger>
          </TabsList>

          {/* Active Orders */}
          <TabsContent value="active" className="space-y-4">
            {activeOrders.length > 0 ? (
              activeOrders.map((order) => <OrderCard key={order.id} order={order} />)
            ) : (
              <div className="text-center py-12">
                <Package className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No active orders</h3>
                <p className="text-muted-foreground mb-6">
                  You don't have any orders in progress
                </p>
                <Button>Order Now</Button>
              </div>
            )}
          </TabsContent>

          {/* Past Orders */}
          <TabsContent value="past" className="space-y-4">
            {pastOrders.length > 0 ? (
              pastOrders.map((order) => <OrderCard key={order.id} order={order} />)
            ) : (
              <div className="text-center py-12">
                <Clock className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No past orders</h3>
                <p className="text-muted-foreground">
                  Your order history will appear here
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
