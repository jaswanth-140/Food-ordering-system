// High-quality diverse food images from Unsplash
const foodImages = {
  // Biryani - Indian rice dishes (8 variations)
  biryani1: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop&q=80",
  biryani2: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&h=600&fit=crop&q=80",
  biryani3: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&h=600&fit=crop&q=80",
  biryani4: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&h=600&fit=crop&q=80",
  biryani5: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&h=600&fit=crop&q=80",
  biryani6: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&h=600&fit=crop&q=80",
  biryani7: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=800&h=600&fit=crop&q=80",
  biryani8: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&h=600&fit=crop&q=80",
  
  // South Indian - Dosa, Idli, etc. (8 variations)
  dosa1: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&h=600&fit=crop&q=80",
  dosa2: "https://images.unsplash.com/photo-1694672228051-bb4a066887fa?w=800&h=600&fit=crop&q=80",
  dosa3: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&h=600&fit=crop&q=80",
  dosa4: "https://images.unsplash.com/photo-1582832179344-3dbff6d31f5c?w=800&h=600&fit=crop&q=80",
  dosa5: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&q=80",
  dosa6: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=600&fit=crop&q=80",
  dosa7: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop&q=80",
  dosa8: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop&q=80",
  
  // Pizza - Italian pizzas (8 variations)
  pizza1: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop&q=80",
  pizza2: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop&q=80",
  pizza3: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop&q=80",
  pizza4: "https://images.unsplash.com/photo-1571407970349-bc81e7e96e47?w=800&h=600&fit=crop&q=80",
  pizza5: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=800&h=600&fit=crop&q=80",
  pizza6: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&h=600&fit=crop&q=80",
  pizza7: "https://images.unsplash.com/photo-1590534247854-e973c2d6b8e2?w=800&h=600&fit=crop&q=80",
  pizza8: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?w=800&h=600&fit=crop&q=80",
  
  // Burgers - American burgers (8 variations)
  burger1: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop&q=80",
  burger2: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop&q=80",
  burger3: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&h=600&fit=crop&q=80",
  burger4: "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?w=800&h=600&fit=crop&q=80",
  burger5: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&h=600&fit=crop&q=80",
  burger6: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&h=600&fit=crop&q=80",
  burger7: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&h=600&fit=crop&q=80",
  burger8: "https://images.unsplash.com/photo-1550950158-d0d960dff51b?w=800&h=600&fit=crop&q=80",
  
  // Chinese - Asian cuisine (8 variations)
  chinese1: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=600&fit=crop&q=80",
  chinese2: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&h=600&fit=crop&q=80",
  chinese3: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop&q=80",
  chinese4: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=600&fit=crop&q=80",
  chinese5: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80",
  chinese6: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&h=600&fit=crop&q=80",
  chinese7: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop&q=80",
  chinese8: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&h=600&fit=crop&q=80",
  
  // North Indian - Curries and tandoor (8 variations)
  northIndian1: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&q=80",
  northIndian2: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&h=600&fit=crop&q=80",
  northIndian3: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&h=600&fit=crop&q=80",
  northIndian4: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=600&fit=crop&q=80",
  northIndian5: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&h=600&fit=crop&q=80",
  northIndian6: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=600&fit=crop&q=80",
  northIndian7: "https://images.unsplash.com/photo-1585937421612-70e008a69439?w=800&h=600&fit=crop&q=80",
  northIndian8: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&h=600&fit=crop&q=80",
  
  // Mughlai - Rich curries and kebabs (8 variations)
  mughlai1: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&h=600&fit=crop&q=80",
  mughlai2: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&h=600&fit=crop&q=80",
  mughlai3: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=800&h=600&fit=crop&q=80",
  mughlai4: "https://images.unsplash.com/photo-1631781432648-7c90e9d1b919?w=800&h=600&fit=crop&q=80",
  mughlai5: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&h=600&fit=crop&q=80",
  mughlai6: "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=800&h=600&fit=crop&q=80",
  mughlai7: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&q=80",
  mughlai8: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop&q=80",
  
  // Continental - Western cuisine (8 variations)
  continental1: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&h=600&fit=crop&q=80",
  continental2: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop&q=80",
  continental3: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop&q=80",
  continental4: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&q=80",
  continental5: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop&q=80",
  continental6: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop&q=80",
  continental7: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&h=600&fit=crop&q=80",
  continental8: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop&q=80",
  
  // Barbecue - Grilled items (8 variations)
  barbecue1: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop&q=80",
  barbecue2: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&h=600&fit=crop&q=80",
  barbecue3: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80",
  barbecue4: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&h=600&fit=crop&q=80",
  barbecue5: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop&q=80",
  barbecue6: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&h=600&fit=crop&q=80",
  barbecue7: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop&q=80",
  barbecue8: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&h=600&fit=crop&q=80",
  
  // Street Food - Indian snacks (8 variations)
  streetFood1: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop&q=80",
  streetFood2: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop&q=80",
  streetFood3: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop&q=80",
  streetFood4: "https://images.unsplash.com/photo-1626132647523-66f0bf380027?w=800&h=600&fit=crop&q=80",
  streetFood5: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&h=600&fit=crop&q=80",
  streetFood6: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=600&fit=crop&q=80",
  streetFood7: "https://images.unsplash.com/photo-1601050690117-d9355e60e054?w=800&h=600&fit=crop&q=80",
  streetFood8: "https://images.unsplash.com/photo-1612375834762-e28b99a8c523?w=800&h=600&fit=crop&q=80",
};

// Helper function to get image based on cuisine with fallback (8 variations per category)
const getImageByCuisine = (cuisines: string[], index: number): string => {
  const cuisineStr = cuisines.join(" ").toLowerCase();
  const imageIndex = (index % 8) + 1; // Now cycling through 8 images instead of 4
  
  let imageKey: string | undefined;
  
  // Match cuisine to appropriate image category
  if (cuisineStr.includes("biryani") || cuisineStr.includes("hyderabadi")) {
    imageKey = `biryani${imageIndex}`;
  } else if (cuisineStr.includes("south") || cuisineStr.includes("dosa") || cuisineStr.includes("idli") || cuisineStr.includes("andhra")) {
    imageKey = `dosa${imageIndex}`;
  } else if (cuisineStr.includes("pizza") || cuisineStr.includes("italian")) {
    imageKey = `pizza${imageIndex}`;
  } else if (cuisineStr.includes("burger") || cuisineStr.includes("american")) {
    imageKey = `burger${imageIndex}`;
  } else if (cuisineStr.includes("chinese") || cuisineStr.includes("asian") || cuisineStr.includes("thai")) {
    imageKey = `chinese${imageIndex}`;
  } else if (cuisineStr.includes("north indian") || cuisineStr.includes("paneer")) {
    imageKey = `northIndian${imageIndex}`;
  } else if (cuisineStr.includes("mughlai") || cuisineStr.includes("kebab")) {
    imageKey = `mughlai${imageIndex}`;
  } else if (cuisineStr.includes("continental") || cuisineStr.includes("european")) {
    imageKey = `continental${imageIndex}`;
  } else if (cuisineStr.includes("barbecue") || cuisineStr.includes("grill") || cuisineStr.includes("tandoor")) {
    imageKey = `barbecue${imageIndex}`;
  } else if (cuisineStr.includes("street") || cuisineStr.includes("chaat") || cuisineStr.includes("snacks")) {
    imageKey = `streetFood${imageIndex}`;
  } else if (cuisineStr.includes("fast food")) {
    // Fast food gets burger images
    imageKey = `burger${imageIndex}`;
  } else if (cuisineStr.includes("dessert") || cuisineStr.includes("sweet")) {
    // Desserts get street food images (colorful snacks)
    imageKey = `streetFood${imageIndex}`;
  } else if (cuisineStr.includes("seafood") || cuisineStr.includes("goan")) {
    // Seafood gets continental images
    imageKey = `continental${imageIndex}`;
  } else if (cuisineStr.includes("mexican")) {
    // Mexican gets burger images (similar style)
    imageKey = `burger${imageIndex}`;
  } else if (cuisineStr.includes("punjabi")) {
    // Punjabi gets north indian images
    imageKey = `northIndian${imageIndex}`;
  } else if (cuisineStr.includes("kerala")) {
    // Kerala gets south indian images
    imageKey = `dosa${imageIndex}`;
  } else {
    // Default to biryani if no match
    imageKey = `biryani${imageIndex}`;
  }
  
  // Return image URL with fallback to biryani1 if key doesn't exist
  const imageUrl = foodImages[imageKey as keyof typeof foodImages];
  return imageUrl || foodImages.biryani1;
};

// Custom restaurant images mapping (centralized management)
const customRestaurantImages: Record<string, string> = {
  "Paradise Restaurant": "/paradise-restaurant.jpg",
  "Ram Ki Bandi": "/ram-ki-bandi.webp",
  "Southern Spice": "/southern-spice.jpg",
  "Meridian Restaurant": "/paradise-food-court.jpg",
  "Hotel Shadab": "/cafe-bahar.jpg",
  "Cafe Bahar": "/hotel-shadab.jpg",
  "Paradise Food Court": "/meridian-restaurant.jpg",
};

// Smart image resolver: prioritizes custom images, falls back to dynamic generation
const getRestaurantImage = (name: string, cuisines: string[], index: number): string => {
  return customRestaurantImages[name] || getImageByCuisine(cuisines, index);
};

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  cuisines: string[];
  priceForTwo: number;
  city: string;
  area: string;
  latitude: number;
  longitude: number;
  isOpen: boolean;
  discount?: string;
  promoted?: boolean;
}

// Helper to calculate distance between two coordinates (in km)
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Radius of the Earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Comprehensive restaurant database for major Indian cities
export const restaurants: Restaurant[] = [
  // Hyderabad Restaurants (50)
  { id: "hyd1", name: "Paradise Restaurant", image: getRestaurantImage("Paradise Restaurant", ["Biryani", "Hyderabadi", "Mughlai"], 0), rating: 4.3, deliveryTime: "30-35 mins", cuisines: ["Biryani", "Hyderabadi", "Mughlai"], priceForTwo: 600, city: "Hyderabad", area: "Secunderabad", latitude: 17.4435, longitude: 78.4989, isOpen: true, promoted: true, discount: "50% off" },
  { id: "hyd2", name: "Bawarchi Restaurant", image: getImageByCuisine(["Biryani", "North Indian", "Hyderabadi"], 1), rating: 4.4, deliveryTime: "25-30 mins", cuisines: ["Biryani", "North Indian", "Hyderabadi"], priceForTwo: 500, city: "Hyderabad", area: "RTC X Roads", latitude: 17.4386, longitude: 78.4952, isOpen: true },
  { id: "hyd3", name: "Shah Ghouse Cafe & Restaurant", image: getImageByCuisine(["Biryani", "Hyderabadi", "Mughlai", "North Indian"], 2), rating: 4.2, deliveryTime: "35-40 mins", cuisines: ["Biryani", "Hyderabadi", "Mughlai", "North Indian"], priceForTwo: 600, city: "Hyderabad", area: "Charminar", latitude: 17.3616, longitude: 78.4747, isOpen: true, discount: "20% off" },
  { id: "hyd4", name: "Meridian Restaurant", image: getRestaurantImage("Meridian Restaurant", ["Biryani", "Chinese", "North Indian"], 3), rating: 4.1, deliveryTime: "30-35 mins", cuisines: ["Biryani", "Chinese", "North Indian"], priceForTwo: 400, city: "Hyderabad", area: "Panjagutta", latitude: 17.4239, longitude: 78.4489, isOpen: true },
  { id: "hyd5", name: "Hotel Shadab", image: getRestaurantImage("Hotel Shadab", ["Biryani", "Hyderabadi", "Mughlai"], 4), rating: 4.3, deliveryTime: "25-30 mins", cuisines: ["Biryani", "Hyderabadi", "Mughlai"], priceForTwo: 300, city: "Hyderabad", area: "Charminar", latitude: 17.3617, longitude: 78.4746, isOpen: true },
  { id: "hyd6", name: "Cafe Bahar", image: getRestaurantImage("Cafe Bahar", ["Biryani", "Hyderabadi", "Mughlai"], 5), rating: 4.2, deliveryTime: "30-35 mins", cuisines: ["Biryani", "Hyderabadi", "Mughlai"], priceForTwo: 450, city: "Hyderabad", area: "Basheerbagh", latitude: 17.3961, longitude: 78.4789, isOpen: true, discount: "30% off" },
  { id: "hyd7", name: "Alpha Hotel", image: getImageByCuisine(["Biryani", "North Indian"], 6), rating: 4.0, deliveryTime: "20-25 mins", cuisines: ["Biryani", "North Indian"], priceForTwo: 350, city: "Hyderabad", area: "Gachibowli", latitude: 17.4399, longitude: 78.3489, isOpen: true },
  { id: "hyd8", name: "Kritunga Restaurant", image: getImageByCuisine(["Andhra", "Biryani", "South Indian"], 7), rating: 4.3, deliveryTime: "25-30 mins", cuisines: ["Andhra", "Biryani", "South Indian"], priceForTwo: 500, city: "Hyderabad", area: "Kondapur", latitude: 17.4618, longitude: 78.3632, isOpen: true },
  { id: "hyd9", name: "Chutneys", image: getImageByCuisine(["South Indian", "North Indian"], 8), rating: 4.4, deliveryTime: "20-25 mins", cuisines: ["South Indian", "North Indian"], priceForTwo: 400, city: "Hyderabad", area: "Banjara Hills", latitude: 17.4175, longitude: 78.4458, isOpen: true, promoted: true },
  { id: "hyd10", name: "Ram Ki Bandi", image: getRestaurantImage("Ram Ki Bandi", ["South Indian", "Street Food"], 9), rating: 4.5, deliveryTime: "15-20 mins", cuisines: ["South Indian", "Street Food"], priceForTwo: 150, city: "Hyderabad", area: "Lakdikapul", latitude: 17.4048, longitude: 78.4611, isOpen: true, discount: "25% off" },
  
  { id: "hyd11", name: "Ohri's Jiva Imperia", image: getImageByCuisine(["North Indian", "Chinese", "Continental"], 10), rating: 4.1, deliveryTime: "35-40 mins", cuisines: ["North Indian", "Chinese", "Continental"], priceForTwo: 800, city: "Hyderabad", area: "Jubilee Hills", latitude: 17.4277, longitude: 78.4069, isOpen: true },
  { id: "hyd12", name: "Absolute Barbecues", image: getImageByCuisine(["Barbecue", "North Indian", "Biryani"], 11), rating: 4.5, deliveryTime: "40-45 mins", cuisines: ["Barbecue", "North Indian", "Biryani"], priceForTwo: 1500, city: "Hyderabad", area: "Jubilee Hills", latitude: 17.4326, longitude: 78.4071, isOpen: true, promoted: true },
  { id: "hyd13", name: "Barbeque Nation", image: getImageByCuisine(["Barbecue", "North Indian", "Continental"], 12), rating: 4.3, deliveryTime: "40-45 mins", cuisines: ["Barbecue", "North Indian", "Continental"], priceForTwo: 1400, city: "Hyderabad", area: "Hitech City", latitude: 17.4458, longitude: 78.3788, isOpen: true },
  { id: "hyd14", name: "Pista House", image: getImageByCuisine(["Hyderabadi", "Biryani", "Desserts"], 13), rating: 4.4, deliveryTime: "25-30 mins", cuisines: ["Hyderabadi", "Biryani", "Desserts"], priceForTwo: 500, city: "Hyderabad", area: "Charminar", latitude: 17.3615, longitude: 78.4745, isOpen: true, discount: "15% off" },
  { id: "hyd15", name: "Minerva Coffee Shop", image: getImageByCuisine(["South Indian", "North Indian", "Chinese"], 14), rating: 4.2, deliveryTime: "30-35 mins", cuisines: ["South Indian", "North Indian", "Chinese"], priceForTwo: 450, city: "Hyderabad", area: "Himayat Nagar", latitude: 17.3984, longitude: 78.4889, isOpen: true },
  
  { id: "hyd16", name: "Paradise Biryani - Gachibowli", image: getImageByCuisine(["Biryani", "Hyderabadi"], 15), rating: 4.2, deliveryTime: "30-35 mins", cuisines: ["Biryani", "Hyderabadi"], priceForTwo: 600, city: "Hyderabad", area: "Gachibowli", latitude: 17.4399, longitude: 78.3499, isOpen: true },
  { id: "hyd17", name: "Ulavacharu", image: getImageByCuisine(["Andhra", "South Indian"], 16), rating: 4.3, deliveryTime: "35-40 mins", cuisines: ["Andhra", "South Indian"], priceForTwo: 700, city: "Hyderabad", area: "Jubilee Hills", latitude: 17.4300, longitude: 78.4075, isOpen: true },
  { id: "hyd18", name: "Southern Spice", image: getRestaurantImage("Southern Spice", ["South Indian", "Kerala"], 17), rating: 4.4, deliveryTime: "25-30 mins", cuisines: ["South Indian", "Kerala"], priceForTwo: 800, city: "Hyderabad", area: "Begumpet", latitude: 17.4398, longitude: 78.4632, isOpen: true, discount: "20% off" },
  { id: "hyd19", name: "Rayalaseema Ruchulu", image: getImageByCuisine(["Andhra", "South Indian", "Biryani"], 18), rating: 4.3, deliveryTime: "30-35 mins", cuisines: ["Andhra", "South Indian", "Biryani"], priceForTwo: 600, city: "Hyderabad", area: "Madhapur", latitude: 17.4486, longitude: 78.3908, isOpen: true },
  { id: "hyd20", name: "Peshawar", image: getImageByCuisine(["North Indian", "Mughlai"], 19), rating: 4.5, deliveryTime: "35-40 mins", cuisines: ["North Indian", "Mughlai"], priceForTwo: 1200, city: "Hyderabad", area: "Banjara Hills", latitude: 17.4178, longitude: 78.4461, isOpen: true, promoted: true },
  
  { id: "hyd21", name: "Zaiqa E Hyderabad", image: getImageByCuisine(["Hyderabadi", "Biryani"], 20), rating: 4.1, deliveryTime: "25-30 mins", cuisines: ["Hyderabadi", "Biryani"], priceForTwo: 400, city: "Hyderabad", area: "Tolichowki", latitude: 17.4065, longitude: 78.3999, isOpen: true },
  { id: "hyd22", name: "Grand Hotel", image: getImageByCuisine(["Hyderabadi", "Biryani", "Mughlai"], 21), rating: 4.0, deliveryTime: "30-35 mins", cuisines: ["Hyderabadi", "Biryani", "Mughlai"], priceForTwo: 550, city: "Hyderabad", area: "Abids", latitude: 17.3930, longitude: 78.4790, isOpen: true },
  { id: "hyd23", name: "Kamat Hotel", image: getImageByCuisine(["South Indian", "North Indian"], 22), rating: 4.2, deliveryTime: "20-25 mins", cuisines: ["South Indian", "North Indian"], priceForTwo: 300, city: "Hyderabad", area: "Ameerpet", latitude: 17.4372, longitude: 78.4482, isOpen: true, discount: "10% off" },
  { id: "hyd24", name: "Mehfil Restaurant", image: getImageByCuisine(["North Indian", "Hyderabadi"], 23), rating: 4.1, deliveryTime: "25-30 mins", cuisines: ["North Indian", "Hyderabadi"], priceForTwo: 450, city: "Hyderabad", area: "Kukatpally", latitude: 17.4950, longitude: 78.4122, isOpen: true },
  { id: "hyd25", name: "Biryani By Kilo", image: getImageByCuisine(["Biryani", "Hyderabadi", "Mughlai"], 24), rating: 4.3, deliveryTime: "35-40 mins", cuisines: ["Biryani", "Hyderabadi", "Mughlai"], priceForTwo: 800, city: "Hyderabad", area: "Madhapur", latitude: 17.4500, longitude: 78.3912, isOpen: true },
  
  { id: "hyd26", name: "Farzi Cafe", image: getImageByCuisine(["Modern Indian", "Continental"], 25), rating: 4.4, deliveryTime: "40-45 mins", cuisines: ["Modern Indian", "Continental"], priceForTwo: 1500, city: "Hyderabad", area: "Jubilee Hills", latitude: 17.4320, longitude: 78.4068, isOpen: true, promoted: true },
  { id: "hyd27", name: "Three Dots & A Dash", image: getImageByCuisine(["Continental", "Asian"], 26), rating: 4.3, deliveryTime: "35-40 mins", cuisines: ["Continental", "Asian"], priceForTwo: 1200, city: "Hyderabad", area: "Jubilee Hills", latitude: 17.4310, longitude: 78.4072, isOpen: true },
  { id: "hyd28", name: "B-Dubs", image: getImageByCuisine(["American", "Continental"], 27), rating: 4.2, deliveryTime: "30-35 mins", cuisines: ["American", "Continental"], priceForTwo: 1300, city: "Hyderabad", area: "Hitech City", latitude: 17.4468, longitude: 78.3790, isOpen: true },
  { id: "hyd29", name: "Hard Rock Cafe", image: getImageByCuisine(["American", "Continental"], 28), rating: 4.4, deliveryTime: "40-45 mins", cuisines: ["American", "Continental"], priceForTwo: 1600, city: "Hyderabad", area: "Hitech City", latitude: 17.4470, longitude: 78.3785, isOpen: true, discount: "25% off" },
  { id: "hyd30", name: "Tansen", image: getImageByCuisine(["North Indian", "Mughlai"], 29), rating: 4.3, deliveryTime: "35-40 mins", cuisines: ["North Indian", "Mughlai"], priceForTwo: 900, city: "Hyderabad", area: "Banjara Hills", latitude: 17.4180, longitude: 78.4465, isOpen: true },
  
  { id: "hyd31", name: "Fusion9", image: getImageByCuisine(["Asian", "Chinese", "Thai"], 30), rating: 4.2, deliveryTime: "30-35 mins", cuisines: ["Asian", "Chinese", "Thai"], priceForTwo: 800, city: "Hyderabad", area: "Gachibowli", latitude: 17.4410, longitude: 78.3495, isOpen: true },
  { id: "hyd32", name: "Mainland China", image: getImageByCuisine(["Chinese", "Asian"], 31), rating: 4.3, deliveryTime: "35-40 mins", cuisines: ["Chinese", "Asian"], priceForTwo: 1000, city: "Hyderabad", area: "Banjara Hills", latitude: 17.4185, longitude: 78.4463, isOpen: true },
  { id: "hyd33", name: "Sigree Global Grill", image: getImageByCuisine(["North Indian", "Continental", "Barbecue"], 32), rating: 4.4, deliveryTime: "40-45 mins", cuisines: ["North Indian", "Continental", "Barbecue"], priceForTwo: 1300, city: "Hyderabad", area: "Gachibowli", latitude: 17.4415, longitude: 78.3502, isOpen: true, promoted: true },
  { id: "hyd34", name: "Ohri's Gufaa", image: getImageByCuisine(["North Indian", "Chinese"], 33), rating: 4.1, deliveryTime: "35-40 mins", cuisines: ["North Indian", "Chinese"], priceForTwo: 700, city: "Hyderabad", area: "Road No 1, Banjara Hills", latitude: 17.4190, longitude: 78.4468, isOpen: true },
  { id: "hyd35", name: "Little Italy", image: getImageByCuisine(["Italian", "Continental"], 34), rating: 4.3, deliveryTime: "30-35 mins", cuisines: ["Italian", "Continental"], priceForTwo: 900, city: "Hyderabad", area: "Banjara Hills", latitude: 17.4192, longitude: 78.4460, isOpen: true, discount: "20% off" },
  
  { id: "hyd36", name: "Flechazo", image: getImageByCuisine(["Continental", "Italian", "Mexican"], 35), rating: 4.2, deliveryTime: "35-40 mins", cuisines: ["Continental", "Italian", "Mexican"], priceForTwo: 1100, city: "Hyderabad", area: "Jubilee Hills", latitude: 17.4325, longitude: 78.4065, isOpen: true },
  { id: "hyd37", name: "10 Downing Street", image: getImageByCuisine(["Continental", "European"], 36), rating: 4.3, deliveryTime: "40-45 mins", cuisines: ["Continental", "European"], priceForTwo: 1400, city: "Hyderabad", area: "Banjara Hills", latitude: 17.4195, longitude: 78.4455, isOpen: true },
  { id: "hyd38", name: "N Grill", image: getImageByCuisine(["North Indian", "Mughlai", "Barbecue"], 37), rating: 4.4, deliveryTime: "40-45 mins", cuisines: ["North Indian", "Mughlai", "Barbecue"], priceForTwo: 1200, city: "Hyderabad", area: "Jubilee Hills", latitude: 17.4318, longitude: 78.4078, isOpen: true },
  { id: "hyd39", name: "Olive Bistro", image: getImageByCuisine(["Continental", "Mediterranean"], 38), rating: 4.3, deliveryTime: "35-40 mins", cuisines: ["Continental", "Mediterranean"], priceForTwo: 1300, city: "Hyderabad", area: "Jubilee Hills", latitude: 17.4330, longitude: 78.4060, isOpen: true, promoted: true },
  { id: "hyd40", name: "Over The Moon", image: getImageByCuisine(["Continental", "Asian"], 39), rating: 4.2, deliveryTime: "40-45 mins", cuisines: ["Continental", "Asian"], priceForTwo: 1500, city: "Hyderabad", area: "Banjara Hills", latitude: 17.4200, longitude: 78.4470, isOpen: true },
  
  { id: "hyd41", name: "The Fisherman's Wharf", image: getImageByCuisine(["Seafood", "Goan", "Continental"], 40), rating: 4.3, deliveryTime: "35-40 mins", cuisines: ["Seafood", "Goan", "Continental"], priceForTwo: 1200, city: "Hyderabad", area: "Hitech City", latitude: 17.4460, longitude: 78.3795, isOpen: true },
  { id: "hyd42", name: "The Spicy Venue", image: getImageByCuisine(["North Indian", "Chinese"], 41), rating: 4.1, deliveryTime: "30-35 mins", cuisines: ["North Indian", "Chinese"], priceForTwo: 800, city: "Hyderabad", area: "Madhapur", latitude: 17.4495, longitude: 78.3905, isOpen: true, discount: "15% off" },
  { id: "hyd43", name: "Collage", image: getImageByCuisine(["Continental", "Asian", "North Indian"], 42), rating: 4.4, deliveryTime: "40-45 mins", cuisines: ["Continental", "Asian", "North Indian"], priceForTwo: 1400, city: "Hyderabad", area: "Hitech City", latitude: 17.4465, longitude: 78.3792, isOpen: true },
  { id: "hyd44", name: "The Spicy Venue - Kondapur", image: getImageByCuisine(["North Indian", "Chinese"], 43), rating: 4.2, deliveryTime: "30-35 mins", cuisines: ["North Indian", "Chinese"], priceForTwo: 800, city: "Hyderabad", area: "Kondapur", latitude: 17.4620, longitude: 78.3630, isOpen: true },
  { id: "hyd45", name: "Sahib Sindh Sultan", image: getImageByCuisine(["North Indian", "Mughlai"], 44), rating: 4.3, deliveryTime: "35-40 mins", cuisines: ["North Indian", "Mughlai"], priceForTwo: 1000, city: "Hyderabad", area: "Gachibowli", latitude: 17.4420, longitude: 78.3510, isOpen: true },
  
  { id: "hyd46", name: "Moksha", image: getImageByCuisine(["Asian", "Pan Asian"], 45), rating: 4.2, deliveryTime: "40-45 mins", cuisines: ["Asian", "Pan Asian"], priceForTwo: 1200, city: "Hyderabad", area: "Jubilee Hills", latitude: 17.4335, longitude: 78.4063, isOpen: true },
  { id: "hyd47", name: "Shilparamam Food Court", image: getImageByCuisine(["South Indian", "North Indian", "Chinese"], 46), rating: 4.0, deliveryTime: "25-30 mins", cuisines: ["South Indian", "North Indian", "Chinese"], priceForTwo: 400, city: "Hyderabad", area: "Madhapur", latitude: 17.4520, longitude: 78.3900, isOpen: true },
  { id: "hyd48", name: "Chicha's", image: getImageByCuisine(["Mexican", "Continental"], 47), rating: 4.4, deliveryTime: "35-40 mins", cuisines: ["Mexican", "Continental"], priceForTwo: 1100, city: "Hyderabad", area: "Jubilee Hills", latitude: 17.4340, longitude: 78.4058, isOpen: true, discount: "30% off" },
  { id: "hyd49", name: "The Wok", image: getImageByCuisine(["Chinese", "Asian"], 48), rating: 4.1, deliveryTime: "30-35 mins", cuisines: ["Chinese", "Asian"], priceForTwo: 700, city: "Hyderabad", area: "Kukatpally", latitude: 17.4960, longitude: 78.4125, isOpen: true },
  { id: "hyd50", name: "Paradise Food Court", image: getRestaurantImage("Paradise Food Court", ["Biryani", "Fast Food"], 49), rating: 4.2, deliveryTime: "25-30 mins", cuisines: ["Biryani", "Fast Food"], priceForTwo: 400, city: "Hyderabad", area: "Himayatnagar", latitude: 17.3990, longitude: 78.4885, isOpen: true },

  // Continue with more cities...
];

// Generate additional restaurants programmatically for scale
const generateRestaurants = (): Restaurant[] => {
  const cities = [
    { name: "Mumbai", lat: 19.0760, lon: 72.8777, areas: ["Bandra", "Andheri", "Colaba", "Powai", "Juhu", "Worli", "Lower Parel", "Goregaon"] },
    { name: "Delhi", lat: 28.7041, lon: 77.1025, areas: ["Connaught Place", "Saket", "Hauz Khas", "Karol Bagh", "Rajouri Garden", "Nehru Place", "Dwarka"] },
    { name: "Bangalore", lat: 12.9716, lon: 77.5946, areas: ["Koramangala", "Indiranagar", "Whitefield", "HSR Layout", "Jayanagar", "MG Road", "Electronic City"] },
    { name: "Chennai", lat: 13.0827, lon: 80.2707, areas: ["T Nagar", "Anna Nagar", "Adyar", "Velachery", "OMR", "Mylapore", "Porur"] },
    { name: "Pune", lat: 18.5204, lon: 73.8567, areas: ["Koregaon Park", "Viman Nagar", "Hinjewadi", "Kothrud", "Wakad", "Baner", "Aundh"] },
  ];

  const restaurantTypes = [
    { name: "Biryani House", cuisines: ["Biryani", "Mughlai"], price: [400, 600] },
    { name: "Dosa Corner", cuisines: ["South Indian", "Breakfast"], price: [200, 400] },
    { name: "Pizza Hub", cuisines: ["Pizza", "Italian"], price: [500, 800] },
    { name: "Burger Joint", cuisines: ["Burgers", "Fast Food"], price: [300, 500] },
    { name: "Chinese Wok", cuisines: ["Chinese", "Asian"], price: [400, 600] },
    { name: "North Indian Kitchen", cuisines: ["North Indian", "Punjabi"], price: [500, 800] },
    { name: "Cafe", cuisines: ["Continental", "Cafe"], price: [600, 1000] },
    { name: "Tandoor", cuisines: ["North Indian", "Tandoor"], price: [500, 900] },
  ];

  const generated: Restaurant[] = [];
  let idCounter = 1000;

  cities.forEach((city) => {
    city.areas.forEach((area, areaIdx) => {
      restaurantTypes.forEach((type, typeIdx) => {
        for (let i = 0; i < 3; i++) {
          const latOffset = (Math.random() - 0.5) * 0.05;
          const lonOffset = (Math.random() - 0.5) * 0.05;
          
          generated.push({
            id: `${city.name.toLowerCase()}-${idCounter++}`,
            name: `${type.name} ${area}`,
            image: getImageByCuisine(type.cuisines, idCounter),
            rating: parseFloat((3.8 + Math.random() * 1.2).toFixed(1)),
            deliveryTime: `${20 + Math.floor(Math.random() * 30)}-${30 + Math.floor(Math.random() * 30)} mins`,
            cuisines: type.cuisines,
            priceForTwo: type.price[0] + Math.floor(Math.random() * (type.price[1] - type.price[0])),
            city: city.name,
            area: area,
            latitude: city.lat + latOffset + (areaIdx * 0.01),
            longitude: city.lon + lonOffset + (typeIdx * 0.01),
            isOpen: Math.random() > 0.1,
            discount: Math.random() > 0.7 ? `${10 + Math.floor(Math.random() * 40)}% off` : undefined,
            promoted: Math.random() > 0.9,
          });
        }
      });
    });
  });

  return generated;
};

export const allRestaurants = [...restaurants, ...generateRestaurants()];
