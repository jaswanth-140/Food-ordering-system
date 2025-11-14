import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Main content with left padding for desktop sidebar */}
      <main className="flex-1 md:ml-20 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
