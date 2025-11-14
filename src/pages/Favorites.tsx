import { Heart, Trash2, ShoppingCart } from "lucide-react";
import RestaurantCard from "@/components/RestaurantCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import biryaniImage from "@/assets/biryani.jpg";
import dosaImage from "@/assets/dosa.jpg";
import pizzaImage from "@/assets/pizza.jpg";

const favoriteRestaurants: any[] = [];

export default function Favorites() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="h-8 w-8 text-primary fill-primary" />
            <h1 className="text-3xl font-bold">My Favorites</h1>
          </div>
          <p className="text-muted-foreground">
            Your saved restaurants for quick access
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Favorites</p>
                  <p className="text-2xl font-bold">{favoriteRestaurants.length}</p>
                </div>
                <Heart className="h-8 w-8 text-primary fill-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Rating</p>
                  <p className="text-2xl font-bold">
                    {(favoriteRestaurants.reduce((sum, r) => sum + r.rating, 0) / favoriteRestaurants.length).toFixed(1)}
                  </p>
                </div>
                <span className="text-3xl">⭐</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Quick Orders</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Restaurant Grid */}
        {favoriteRestaurants.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                {favoriteRestaurants.length} Saved {favoriteRestaurants.length === 1 ? "Restaurant" : "Restaurants"}
              </h2>
              <Button variant="outline" size="sm" className="gap-2">
                <Trash2 className="h-4 w-4" />
                Clear All
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteRestaurants.map((restaurant) => (
                <div key={restaurant.id} className="relative group">
                  <RestaurantCard {...restaurant} />
                  <button
                    className="absolute top-4 right-4 p-2 bg-white dark:bg-neutral-800 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
                    aria-label="Remove from favorites"
                  >
                    <Heart className="h-5 w-5 text-primary fill-primary" />
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No favorites yet</h3>
            <p className="text-muted-foreground mb-6">
              Start adding restaurants to your favorites for quick access
            </p>
            <Button>Explore Restaurants</Button>
          </div>
        )}
      </main>
    </div>
  );
}
