import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface LocationContextType {
  location: Coordinates | null;
  address: string;
  city: string;
  loading: boolean;
  error: string | null;
  requestLocation: () => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

// Reverse geocoding to get address from coordinates
async function getAddressFromCoordinates(lat: number, lon: number): Promise<{ address: string; city: string }> {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );
    const data = await response.json();
    
    const city = data.address?.city || data.address?.town || data.address?.village || "Unknown";
    const area = data.address?.suburb || data.address?.neighbourhood || "";
    const address = area ? `${area}, ${city}` : city;
    
    return { address, city };
  } catch (error) {
    console.error("Geocoding error:", error);
    return { address: "Location detected", city: "Unknown" };
  }
}

export function LocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<Coordinates | null>(() => {
    const saved = localStorage.getItem("userLocation");
    return saved ? JSON.parse(saved) : null;
  });
  const [address, setAddress] = useState(() => localStorage.getItem("userAddress") || "");
  const [city, setCity] = useState(() => localStorage.getItem("userCity") || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        
        setLocation(coords);
        localStorage.setItem("userLocation", JSON.stringify(coords));

        // Get address
        const { address: addr, city: cityName } = await getAddressFromCoordinates(
          coords.latitude,
          coords.longitude
        );
        setAddress(addr);
        setCity(cityName);
        localStorage.setItem("userAddress", addr);
        localStorage.setItem("userCity", cityName);
        
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  // Auto-request location on mount if not already set
  useEffect(() => {
    if (!location) {
      requestLocation();
    }
  }, []);

  return (
    <LocationContext.Provider
      value={{
        location,
        address,
        city,
        loading,
        error,
        requestLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
}
