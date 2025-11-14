// TODO: For production optimization, consider:
// 1. Moving menu data to a backend API or database
// 2. Implementing lazy loading for menu items
// 3. Using code splitting to load menus on-demand
// Current implementation uses static data for development and demo purposes

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  isPopular?: boolean;
  isRecommended?: boolean;
}

// Restaurant-specific menus based on actual offerings
export const restaurantMenus: Record<string, MenuItem[]> = {
  // Paradise Restaurant - Famous for Hyderabadi Biryani
  "hyd1": [
    {
      id: "paradise-1",
      name: "Paradise Special Biryani",
      description: "Signature Hyderabadi biryani with tender chicken, aromatic spices, and saffron rice",
      price: 350,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop&q=80",
      category: "Biryani",
      isVeg: false,
      isPopular: true,
    },
    {
      id: "paradise-2",
      name: "Mutton Biryani",
      description: "Succulent mutton pieces slow-cooked with basmati rice and authentic spices",
      price: 450,
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&h=600&fit=crop&q=80",
      category: "Biryani",
      isVeg: false,
      isPopular: true,
    },
    {
      id: "paradise-3",
      name: "Veg Biryani",
      description: "Mixed vegetables cooked with fragrant basmati rice and mild spices",
      price: 280,
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&h=600&fit=crop&q=80",
      category: "Biryani",
      isVeg: true,
    },
    {
      id: "paradise-4",
      name: "Chicken 65",
      description: "Spicy deep-fried chicken appetizer with curry leaves",
      price: 320,
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&h=600&fit=crop&q=80",
      category: "Starters",
      isVeg: false,
    },
    {
      id: "paradise-5",
      name: "Double Ka Meetha",
      description: "Traditional Hyderabadi dessert made with bread, milk, and dry fruits",
      price: 120,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop&q=80",
      category: "Desserts",
      isVeg: true,
    },
    {
      id: "paradise-6",
      name: "Mutton Haleem",
      description: "Slow-cooked mutton with wheat and lentils, a Hyderabadi specialty",
      price: 280,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&h=600&fit=crop&q=80",
      category: "Main Course",
      isVeg: false,
      isRecommended: true,
    },
  ],

  // Bawarchi Restaurant
  "hyd2": [
    {
      id: "bawarchi-1",
      name: "Bawarchi Special Chicken Biryani",
      description: "Legendary chicken biryani with authentic Hyderabadi flavors",
      price: 320,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop&q=80",
      category: "Biryani",
      isVeg: false,
      isPopular: true,
    },
    {
      id: "bawarchi-2",
      name: "Mutton Dum Biryani",
      description: "Slow-cooked mutton biryani with fragrant rice",
      price: 420,
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&h=600&fit=crop&q=80",
      category: "Biryani",
      isVeg: false,
      isPopular: true,
    },
    {
      id: "bawarchi-3",
      name: "Tandoori Chicken",
      description: "Clay oven roasted chicken marinated in yogurt and spices",
      price: 380,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop&q=80",
      category: "Starters",
      isVeg: false,
    },
    {
      id: "bawarchi-4",
      name: "Paneer Tikka",
      description: "Grilled cottage cheese cubes with bell peppers",
      price: 280,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&h=600&fit=crop&q=80",
      category: "Starters",
      isVeg: true,
    },
    {
      id: "bawarchi-5",
      name: "Butter Naan",
      description: "Soft, buttery Indian flatbread",
      price: 50,
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&q=80",
      category: "Breads",
      isVeg: true,
    },
  ],

  // Shah Ghouse Cafe & Restaurant
  "hyd3": [
    {
      id: "shahghouse-1",
      name: "Shah Ghouse Special Biryani",
      description: "Premium biryani with tender meat and aromatic spices",
      price: 380,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop&q=80",
      category: "Biryani",
      isVeg: false,
      isPopular: true,
    },
    {
      id: "shahghouse-2",
      name: "Chicken Kebab",
      description: "Minced chicken kebabs with traditional spices",
      price: 300,
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&h=600&fit=crop&q=80",
      category: "Starters",
      isVeg: false,
    },
    {
      id: "shahghouse-3",
      name: "Mutton Korma",
      description: "Rich mutton curry with cashew and cream gravy",
      price: 420,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&h=600&fit=crop&q=80",
      category: "Main Course",
      isVeg: false,
    },
    {
      id: "shahghouse-4",
      name: "Veg Pulao",
      description: "Fragrant rice cooked with mixed vegetables",
      price: 220,
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&h=600&fit=crop&q=80",
      category: "Rice",
      isVeg: true,
    },
  ],

  // Meridian Restaurant
  "hyd4": [
    {
      id: "meridian-1",
      name: "Chicken Biryani",
      description: "Classic chicken biryani with aromatic rice",
      price: 280,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop&q=80",
      category: "Biryani",
      isVeg: false,
      isPopular: true,
    },
    {
      id: "meridian-2",
      name: "Chicken Manchurian",
      description: "Indo-Chinese crispy chicken in tangy sauce",
      price: 260,
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=600&fit=crop&q=80",
      category: "Chinese",
      isVeg: false,
    },
    {
      id: "meridian-3",
      name: "Veg Fried Rice",
      description: "Stir-fried rice with vegetables and soy sauce",
      price: 180,
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop&q=80",
      category: "Chinese",
      isVeg: true,
    },
    {
      id: "meridian-4",
      name: "Paneer Butter Masala",
      description: "Cottage cheese in rich tomato and butter gravy",
      price: 250,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&h=600&fit=crop&q=80",
      category: "Main Course",
      isVeg: true,
    },
    {
      id: "meridian-5",
      name: "Hakka Noodles",
      description: "Stir-fried noodles with vegetables",
      price: 160,
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&h=600&fit=crop&q=80",
      category: "Chinese",
      isVeg: true,
    },
  ],

  // Hotel Shadab
  "hyd5": [
    {
      id: "shadab-1",
      name: "Chicken Biryani",
      description: "Authentic Hyderabadi chicken biryani",
      price: 220,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop&q=80",
      category: "Biryani",
      isVeg: false,
      isPopular: true,
    },
    {
      id: "shadab-2",
      name: "Mutton Biryani",
      description: "Traditional mutton biryani near Charminar",
      price: 320,
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&h=600&fit=crop&q=80",
      category: "Biryani",
      isVeg: false,
      isPopular: true,
    },
    {
      id: "shadab-3",
      name: "Chicken Kebab",
      description: "Spiced chicken kebabs grilled to perfection",
      price: 200,
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&h=600&fit=crop&q=80",
      category: "Starters",
      isVeg: false,
    },
    {
      id: "shadab-4",
      name: "Mirchi Ka Salan",
      description: "Hyderabadi chili curry with peanut and sesame",
      price: 150,
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&h=600&fit=crop&q=80",
      category: "Curries",
      isVeg: true,
    },
  ],

  // Cafe Bahar
  "hyd6": [
    {
      id: "bahar-1",
      name: "Cafe Bahar Special Biryani",
      description: "Signature chicken biryani with rich flavors",
      price: 340,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop&q=80",
      category: "Biryani",
      isVeg: false,
      isPopular: true,
    },
    {
      id: "bahar-2",
      name: "Mutton Biryani",
      description: "Tender mutton cooked in dum style",
      price: 420,
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&h=600&fit=crop&q=80",
      category: "Biryani",
      isVeg: false,
    },
    {
      id: "bahar-3",
      name: "Chicken Fry",
      description: "Spicy fried chicken pieces",
      price: 280,
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&h=600&fit=crop&q=80",
      category: "Starters",
      isVeg: false,
    },
    {
      id: "bahar-4",
      name: "Shahi Tukda",
      description: "Royal bread pudding with rabri",
      price: 130,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop&q=80",
      category: "Desserts",
      isVeg: true,
    },
  ],

  // Ram Ki Bandi
  "hyd10": [
    {
      id: "ramki-1",
      name: "Idli (3 pcs)",
      description: "Soft steamed rice cakes served with chutney and sambar",
      price: 60,
      image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&h=600&fit=crop&q=80",
      category: "Breakfast",
      isVeg: true,
      isPopular: true,
    },
    {
      id: "ramki-2",
      name: "Dosa",
      description: "Crispy rice crepe served with chutney and sambar",
      price: 80,
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&h=600&fit=crop&q=80",
      category: "Breakfast",
      isVeg: true,
      isPopular: true,
    },
    {
      id: "ramki-3",
      name: "Masala Dosa",
      description: "Dosa filled with spiced potato filling",
      price: 100,
      image: "https://images.unsplash.com/photo-1694672228051-bb4a066887fa?w=800&h=600&fit=crop&q=80",
      category: "Breakfast",
      isVeg: true,
    },
    {
      id: "ramki-4",
      name: "Vada (2 pcs)",
      description: "Crispy lentil donuts served with chutney",
      price: 50,
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&q=80",
      category: "Breakfast",
      isVeg: true,
    },
    {
      id: "ramki-5",
      name: "Puri Bhaji",
      description: "Deep-fried bread with potato curry",
      price: 90,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop&q=80",
      category: "Breakfast",
      isVeg: true,
    },
  ],

  // Southern Spice
  "hyd18": [
    {
      id: "southern-1",
      name: "Appam with Stew",
      description: "Soft rice pancakes with Kerala-style vegetable stew",
      price: 180,
      image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&h=600&fit=crop&q=80",
      category: "Main Course",
      isVeg: true,
      isPopular: true,
    },
    {
      id: "southern-2",
      name: "Fish Curry",
      description: "Traditional Kerala fish curry with coconut",
      price: 380,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&h=600&fit=crop&q=80",
      category: "Main Course",
      isVeg: false,
      isPopular: true,
    },
    {
      id: "southern-3",
      name: "Prawn Fry",
      description: "Spicy pan-fried prawns with Kerala spices",
      price: 450,
      image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523f?w=800&h=600&fit=crop&q=80",
      category: "Starters",
      isVeg: false,
    },
    {
      id: "southern-4",
      name: "Avial",
      description: "Mixed vegetables in coconut and yogurt gravy",
      price: 220,
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&q=80",
      category: "Main Course",
      isVeg: true,
    },
    {
      id: "southern-5",
      name: "Payasam",
      description: "Traditional South Indian sweet pudding",
      price: 120,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop&q=80",
      category: "Desserts",
      isVeg: true,
    },
  ],

  // Paradise Food Court
  "hyd50": [
    {
      id: "pfc-1",
      name: "Chicken Biryani",
      description: "Quick-serve chicken biryani",
      price: 280,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop&q=80",
      category: "Biryani",
      isVeg: false,
      isPopular: true,
    },
    {
      id: "pfc-2",
      name: "Chicken Burger",
      description: "Juicy chicken patty with fresh vegetables",
      price: 180,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop&q=80",
      category: "Fast Food",
      isVeg: false,
    },
    {
      id: "pfc-3",
      name: "Veg Pizza",
      description: "Loaded vegetable pizza with cheese",
      price: 250,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop&q=80",
      category: "Fast Food",
      isVeg: true,
    },
    {
      id: "pfc-4",
      name: "Chicken Wings",
      description: "Spicy fried chicken wings",
      price: 220,
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&h=600&fit=crop&q=80",
      category: "Fast Food",
      isVeg: false,
    },
    {
      id: "pfc-5",
      name: "French Fries",
      description: "Crispy golden fries",
      price: 100,
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop&q=80",
      category: "Fast Food",
      isVeg: true,
    },
  ],
};

// Default/fallback menu for restaurants without specific menus
export const defaultMenu: MenuItem[] = [
  {
    id: "default-1",
    name: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with tender chicken pieces and traditional spices",
    price: 299,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop&q=80",
    category: "Main Course",
    isVeg: false,
    isPopular: true,
  },
  {
    id: "default-2",
    name: "Veg Biryani",
    description: "Fragrant rice with mixed vegetables and aromatic spices",
    price: 249,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&h=600&fit=crop&q=80",
    category: "Main Course",
    isVeg: true,
  },
  {
    id: "default-3",
    name: "Paneer Tikka",
    description: "Grilled cottage cheese cubes with bell peppers and spices",
    price: 279,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&h=600&fit=crop&q=80",
    category: "Starters",
    isVeg: true,
  },
  {
    id: "default-4",
    name: "Butter Chicken",
    description: "Tender chicken in rich tomato and butter gravy",
    price: 320,
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&h=600&fit=crop&q=80",
    category: "Main Course",
    isVeg: false,
  },
  {
    id: "default-5",
    name: "Dal Makhani",
    description: "Creamy black lentils slow-cooked with butter and cream",
    price: 220,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&q=80",
    category: "Main Course",
    isVeg: true,
  },
  {
    id: "default-6",
    name: "Naan",
    description: "Soft Indian flatbread baked in tandoor",
    price: 40,
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=800&h=600&fit=crop&q=80",
    category: "Breads",
    isVeg: true,
  },
];

// Helper function to get menu for a restaurant
export const getRestaurantMenu = (restaurantId: string): MenuItem[] => {
  return restaurantMenus[restaurantId] || defaultMenu;
};
