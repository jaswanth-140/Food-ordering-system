import { Clock, Star, MapPin, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  cuisines: string[];
  priceForTwo: number;
  distance?: number;
  discount?: string;
  promoted?: boolean;
}

const RestaurantCard = ({
  id,
  name,
  image,
  rating,
  deliveryTime,
  cuisines,
  priceForTwo,
  distance,
  discount,
  promoted,
}: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${id}`}>
      <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              if (target.src.endsWith('/placeholder.svg')) return;
              target.src = '/placeholder.svg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {discount && (
            <Badge className="absolute top-2 left-2 bg-primary text-white gap-1">
              <Tag className="h-3 w-3" />
              {discount}
            </Badge>
          )}
          {promoted && (
            <Badge className="absolute top-2 right-2 bg-yellow-500 text-black">
              Promoted
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2 truncate">{name}</h3>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge variant="secondary" className="gap-1">
              <Star className="h-3 w-3 fill-success text-success" />
              {rating}
            </Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {deliveryTime}
            </span>
            {distance && (
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {distance.toFixed(1)} km
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground truncate mb-2">
            {cuisines.join(", ")}
          </p>
          <p className="text-sm font-medium">₹{priceForTwo} for two</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RestaurantCard;
