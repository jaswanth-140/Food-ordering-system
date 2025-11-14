import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { allRestaurants } from "@/data/restaurants";
import { getRestaurantMenu, type MenuItem } from "@/data/menus";

const Restaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addItem, totalItems } = useCart();

  // Find the restaurant by ID
  const restaurant = allRestaurants.find((r) => r.id === id);
  
  // Get restaurant-specific menu
  const menuItems = restaurant ? getRestaurantMenu(restaurant.id) : [];

  // If restaurant not found, show error
  if (!restaurant) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Restaurant Not Found</h2>
          <p className="text-muted-foreground mb-6">
            Sorry, we couldn't find the restaurant you're looking for.
          </p>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const addToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Restaurant Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </Link>

          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full md:w-48 h-48 object-cover rounded-lg"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (target.src.endsWith('/placeholder.svg')) return;
                target.src = '/placeholder.svg';
              }}
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
              <p className="text-muted-foreground mb-3">
                {restaurant.cuisines.join(", ")}
              </p>
              <div className="flex flex-wrap gap-4 mb-3">
                <Badge variant="secondary" className="gap-1">
                  <Star className="h-3 w-3 fill-success text-success" />
                  {restaurant.rating}
                </Badge>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {restaurant.deliveryTime}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {restaurant.area}, {restaurant.city}
                </span>
              </div>
              <p className="text-sm">₹{restaurant.priceForTwo} for two</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <div className="grid gap-6">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row gap-4 p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <Badge
                            variant={item.isVeg ? "secondary" : "destructive"}
                            className="h-5 w-5 p-0 rounded-sm"
                          >
                            <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-success' : 'bg-destructive'}`} />
                          </Badge>
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          {item.isPopular && (
                            <Badge className="bg-orange-500 text-white text-xs">
                              Popular
                            </Badge>
                          )}
                          {item.isRecommended && (
                            <Badge className="bg-green-500 text-white text-xs">
                              Recommended
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {item.description}
                        </p>
                        <p className="font-semibold">₹{item.price}</p>
                      </div>
                      <Button
                        size="sm"
                        className="gap-2"
                        onClick={() => addToCart(item)}
                      >
                        <Plus className="h-4 w-4" />
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Floating Cart Button */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <Link to="/cart">
            <Button size="lg" className="shadow-xl gap-2">
              View Cart ({totalItems} items)
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Restaurant;
