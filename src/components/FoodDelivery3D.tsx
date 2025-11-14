import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
 
export function FoodDelivery3DScene() {
  return (
    <Card className="w-full h-[600px] bg-gradient-to-br from-primary/10 via-background to-orange-500/10 relative overflow-hidden border-primary/20">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgb(251 146 60)"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 mb-4">
              Order Food in 3D
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-6">
              Experience the future of food delivery. Browse our menu in an immersive 
              3D environment and get your favorite meals delivered fast.
            </p>
            <div className="flex gap-4 text-sm text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span>Live tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span>30 min delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right content - 3D Scene */}
        <div className="flex-1 relative min-h-[300px] md:min-h-full">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
