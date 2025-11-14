import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Search, 
  ShoppingCart, 
  User, 
  Heart, 
  Clock,
  MapPin,
  Menu,
  X,
  LogOut
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import { useLocation } from "@/contexts/LocationContext";

interface SidebarLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const sidebarLinks: SidebarLink[] = [
  {
    label: "Home",
    href: "/",
    icon: <Home className="h-5 w-5" />,
  },
  {
    label: "Search",
    href: "/search",
    icon: <Search className="h-5 w-5" />,
  },
  {
    label: "Orders",
    href: "/orders",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    label: "Favorites",
    href: "/favorites",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    label: "Cart",
    href: "/cart",
    icon: <ShoppingCart className="h-5 w-5" />,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: <User className="h-5 w-5" />,
  },
];

interface AppSidebarProps {
  cartItemsCount?: number;
}

export default function AppSidebar({ cartItemsCount = 0 }: AppSidebarProps) {
  const [open, setOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const { address, city } = useLocation();

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.div
        className={cn(
          "hidden md:flex md:flex-col fixed left-0 top-0 h-screen bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 z-40"
        )}
        animate={{
          width: desktopOpen ? "280px" : "80px",
        }}
        onMouseEnter={() => setDesktopOpen(true)}
        onMouseLeave={() => setDesktopOpen(false)}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Logo */}
        <div className="flex items-center h-16 px-6 border-b border-neutral-200 dark:border-neutral-800">
          <div className={cn("flex items-center space-x-2", desktopOpen ? "justify-start" : "justify-center")}>
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              F
            </div>
            <motion.span
              className="text-xl font-bold text-primary whitespace-nowrap"
              animate={{
                opacity: desktopOpen ? 1 : 0,
                display: desktopOpen ? "block" : "none",
              }}
              transition={{ duration: 0.2 }}
            >
              FoodHub
            </motion.span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto">
          {sidebarLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors relative group"
              activeClassName="bg-primary/10 text-primary hover:bg-primary/15"
            >
              <div className="flex-shrink-0 relative">
                {link.icon}
                {link.label === "Cart" && cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center font-semibold">
                    {cartItemsCount}
                  </span>
                )}
              </div>
              <motion.span
                className="text-sm font-medium whitespace-nowrap"
                animate={{
                  opacity: desktopOpen ? 1 : 0,
                  display: desktopOpen ? "block" : "none",
                }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.span>
            </NavLink>
          ))}
        </nav>

        {/* Location & Logout Footer */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 p-4 space-y-3">
          <div className="flex items-center gap-3 px-2">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
            <motion.div
              animate={{
                opacity: desktopOpen ? 1 : 0,
                display: desktopOpen ? "block" : "none",
              }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Delivering to
              </p>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
                {address || city || "Detecting..."}
              </p>
            </motion.div>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/login";
            }}
            className="flex items-center gap-3 px-2 py-2 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors w-full"
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            <motion.span
              className="text-sm font-medium whitespace-nowrap"
              animate={{
                opacity: desktopOpen ? 1 : 0,
                display: desktopOpen ? "block" : "none",
              }}
              transition={{ duration: 0.2 }}
            >
              Sign Out
            </motion.span>
          </button>
        </div>
      </motion.div>

      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-50 w-full h-16 flex items-center justify-between px-4 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white font-bold text-lg">
            F
          </div>
          <h1 className="text-xl font-bold text-primary">FoodHub</h1>
        </div>
        
        <button
          onClick={() => setOpen(!open)}
          className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
        >
          <Menu className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 bg-black/50 z-50"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed left-0 top-0 h-full w-80 bg-white dark:bg-neutral-900 z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between h-16 px-4 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                    F
                  </div>
                  <h1 className="text-xl font-bold text-primary">FoodHub</h1>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
                {sidebarLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    activeClassName="bg-primary/10 text-primary hover:bg-primary/15"
                  >
                    <div className="relative">
                      {link.icon}
                      {link.label === "Cart" && cartItemsCount > 0 && (
                        <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center font-semibold">
                          {cartItemsCount}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-medium">{link.label}</span>
                  </NavLink>
                ))}
              </nav>

              {/* Location */}
              <div className="border-t border-neutral-200 dark:border-neutral-800 p-4">
                <div className="flex items-center gap-3 px-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Delivering to
                    </p>
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      Hyderabad
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
