import { useState, useMemo } from "react";
import RestaurantCard from "@/components/RestaurantCard";
import CategoryCircle from "@/components/CategoryCircle";
import { useLocation } from "@/contexts/LocationContext";
import { allRestaurants, calculateDistance } from "@/data/restaurants";
import heroImage from "@/assets/hero-banner.jpg";
import biryaniImage from "@/assets/biryani.jpg";
import dosaImage from "@/assets/dosa.jpg";
import pizzaImage from "@/assets/pizza.jpg";
import burgerImage from "@/assets/burger.jpg";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { MapPin, Filter, SortAsc } from "lucide-react";

const categories = [
  { name: "Biryani", image: biryaniImage },
  { name: "Dosa", image: dosaImage },
  { name: "Pizza", image: pizzaImage },
  { name: "Burger", image: burgerImage },
  { name: "Chinese", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=400&fit=crop&q=80" },
  { name: "North Indian", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop&q=80" },
  { name: "Rolls", image: "https://images.unsplash.com/photo-1593504049359-74330189a345?w=400&h=400&fit=crop&q=80" },
  { name: "Ice Cream", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop&q=80" },
  { name: "Cake", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&q=80" },
  { name: "Sandwich", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop&q=80" },
  { name: "Noodles", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=400&fit=crop&q=80" },
  { name: "Pasta", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop&q=80" },
];

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("delivery");
  const [sortBy, setSortBy] = useState<"distance" | "rating" | "deliveryTime">("distance");
  const { location, address, city, loading, error, requestLocation } = useLocation();

  // Filter and sort restaurants based on user location
  const nearbyRestaurants = useMemo(() => {
    if (!location) return allRestaurants.slice(0, 20);

    // Calculate distance for each restaurant
    const withDistance = allRestaurants.map((restaurant) => ({
      ...restaurant,
      distance: calculateDistance(
        location.latitude,
        location.longitude,
        restaurant.latitude,
        restaurant.longitude
      ),
    }));

    // Filter restaurants within 15km radius
    const nearby = withDistance.filter((r) => r.distance <= 15 && r.isOpen);

    // Sort based on selected criteria
    return nearby.sort((a, b) => {
      if (sortBy === "distance") return a.distance - b.distance;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "deliveryTime") {
        const aTime = parseInt(a.deliveryTime.split("-")[0]);
        const bTime = parseInt(b.deliveryTime.split("-")[0]);
        return aTime - bTime;
      }
      return 0;
    });
  }, [location, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <img
          src={heroImage}
          alt="Hero banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Order Food Online
            </h2>
            <p className="text-lg sm:text-xl">
              From your favorite local restaurants
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Location Banner */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                {loading ? (
                  <p className="text-sm">Detecting your location...</p>
                ) : error ? (
                  <p className="text-sm text-red-600">Location access denied</p>
                ) : location ? (
                  <>
                    <p className="font-medium">{address || city}</p>
                    <p className="text-sm text-muted-foreground">
                      {nearbyRestaurants.length} restaurants delivering to you
                    </p>
                  </>
                ) : (
                  <p className="text-sm">Enable location to see nearby restaurants</p>
                )}
              </div>
            </div>
            {(!location || error) && (
              <Button onClick={requestLocation} size="sm" disabled={loading}>
                {loading ? "Detecting..." : "Enable Location"}
              </Button>
            )}
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="delivery">Delivery</TabsTrigger>
            <TabsTrigger value="dining">Dining Out</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Categories */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">What's on your mind?</h3>
          <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <CategoryCircle
                key={category.name}
                name={category.name}
                image={category.image}
              />
            ))}
          </div>
        </section>

        {/* Restaurants Section */}
        <section>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h3 className="text-2xl font-bold">
              {location ? `${nearbyRestaurants.length} restaurants near you` : "Popular restaurants"}
            </h3>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={sortBy === "distance" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("distance")}
                disabled={!location}
              >
                <MapPin className="h-4 w-4 mr-1" />
                Distance
              </Button>
              <Button
                variant={sortBy === "rating" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("rating")}
              >
                <SortAsc className="h-4 w-4 mr-1" />
                Rating
              </Button>
              <Button
                variant={sortBy === "deliveryTime" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("deliveryTime")}
              >
                <Filter className="h-4 w-4 mr-1" />
                Fastest
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="h-48 w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : nearbyRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {nearbyRestaurants.map((restaurant) => (
                <RestaurantCard 
                  key={restaurant.id} 
                  {...restaurant}
                  distance={location ? calculateDistance(
                    location.latitude,
                    location.longitude,
                    restaurant.latitude,
                    restaurant.longitude
                  ) : undefined}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                No restaurants found nearby. Try enabling location or check back later.
              </p>
              <Button onClick={requestLocation}>Enable Location</Button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
