import { useState, useMemo } from "react";
import { Search as SearchIcon, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import RestaurantCard from "@/components/RestaurantCard";
import { Badge } from "@/components/ui/badge";
import { allRestaurants as restaurantDatabase, calculateDistance } from "@/data/restaurants";
import { useLocation } from "@/contexts/LocationContext";

const cuisineFilters = ["All", "Biryani", "Pizza", "Burgers", "South Indian", "North Indian", "Chinese", "Italian", "Continental", "Fast Food"];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const { location } = useLocation();

  const filteredRestaurants = useMemo(() => {
    return restaurantDatabase.filter((restaurant) => {
      const matchesSearch = 
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisines.some((cuisine) => 
          cuisine.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        restaurant.area.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCuisine = 
        selectedCuisine === "All" || 
        restaurant.cuisines.some((cuisine) =>
          cuisine.toLowerCase().includes(selectedCuisine.toLowerCase())
        );

      return matchesSearch && matchesCuisine && restaurant.isOpen;
    });
  }, [searchQuery, selectedCuisine]);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Search Restaurants</h1>
          <p className="text-muted-foreground">
            Find your favorite restaurants and cuisines
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for restaurants, cuisines, or dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-12 h-14 text-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <X className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filter by cuisine:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {cuisineFilters.map((cuisine) => (
              <Badge
                key={cuisine}
                variant={selectedCuisine === cuisine ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm"
                onClick={() => setSelectedCuisine(cuisine)}
              >
                {cuisine}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            {filteredRestaurants.length} {filteredRestaurants.length === 1 ? "restaurant" : "restaurants"} found
          </h2>
        </div>

        {/* Restaurant Grid */}
        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRestaurants.map((restaurant) => (
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
            <SearchIcon className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No restaurants found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
