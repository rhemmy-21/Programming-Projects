import { useNavigate, useLocation } from "react-router";
import { Menu, Home, Settings } from "lucide-react";

interface BottomNavigationProps {
  onMenuClick: () => void;
}

export function BottomNavigation({ onMenuClick }: BottomNavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/home";

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex items-center justify-around w-full max-w-sm mx-auto">
        <button onClick={onMenuClick} className="flex flex-col items-center gap-1">
          <Menu size={24} className="text-gray-600" />
          <span className="text-xs text-gray-600">Menu</span>
        </button>
        <button
          onClick={() => navigate("/home")}
          className="flex flex-col items-center gap-1"
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center -mt-2 ${isHome ? 'bg-orange-400' : 'bg-gray-300'}`}>
            <Home size={24} className="text-white" />
          </div>
          <span className={`text-xs font-semibold ${isHome ? 'text-orange-400' : 'text-gray-600'}`}>Home</span>
        </button>
        <button onClick={() => navigate("/settings")} className="flex flex-col items-center gap-1">
          <Settings size={24} className="text-gray-600" />
          <span className="text-xs text-gray-600">Settings</span>
        </button>
      </div>
    </div>
  );
}
