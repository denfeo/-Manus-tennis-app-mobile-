import { Home, Search, Calendar, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { icon: Home, label: "Главная", path: "/" },
  { icon: Search, label: "Корты", path: "/courts" },
  { icon: Calendar, label: "Брони", path: "/bookings" },
  { icon: User, label: "Профиль", path: "/profile" },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-md mx-auto px-4 pb-2">
        <div className="glass-strong rounded-2xl flex justify-around py-1.5 px-2 shadow-lg shadow-background/50">
          {tabs.map((tab) => {
            const active = location.pathname === tab.path;
            return (
              <button
                key={tab.path}
                onClick={() => navigate(tab.path)}
                className={`relative flex flex-col items-center gap-0.5 py-2 px-4 rounded-xl transition-all duration-300 ${
                  active
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="relative">
                  <tab.icon
                    size={20}
                    strokeWidth={active ? 2.5 : 1.5}
                    className={`transition-all duration-300 ${active ? "animate-bounce-soft" : ""}`}
                  />
                  {active && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary animate-scale-in" />
                  )}
                </div>
                <span className={`text-[10px] font-medium transition-all duration-300 ${
                  active ? "font-bold" : ""
                }`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
