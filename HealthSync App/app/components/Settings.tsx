import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, User, Globe, MapPin, Paintbrush, Ruler, Scale, Droplet, Route, Smartphone, HelpCircle, Headphones, ChevronRight, Settings2 } from "lucide-react";
import { SettingsDialog } from "./SettingsDialog";
import { toast } from "sonner";
import { useTheme } from "../ThemeContext";

export function Settings() {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [settingsDialog, setSettingsDialog] = useState<{ isOpen: boolean; type: "height" | "weight" | "volume" | "distance" | "theme" | "language" | "unitSystem" | null }>({ isOpen: false, type: null });
  const [preferences, setPreferences] = useState({
    height: "cm",
    weight: "kg",
    volume: "ml",
    distance: "km",
    language: "en",
    unitSystem: "metric"
  });

  const handleSave = (type: string, value: string) => {
    if (type === "theme") {
      setTheme(value as "light" | "dark" | "auto");
      toast.success("Theme updated successfully!");
    } else {
      setPreferences({ ...preferences, [type]: value });
      toast.success("Preference updated successfully!");
    }
  };

  const getUnitLabel = (unit: string) => {
    const labels: Record<string, string> = {
      cm: "Centimeters",
      ft: "Feet/Inches",
      kg: "Kilograms",
      lb: "Pounds",
      ml: "Milliliters",
      oz: "Fluid Ounces",
      km: "Kilometers",
      mi: "Miles",
      light: "Light Mode",
      dark: "Dark Mode",
      auto: "Auto",
      en: "English",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ja: "日本語",
      tl: "Tagalog",
      it: "Italiano",
      pt: "Português",
      ru: "Русский",
      zh: "中文",
      ko: "한국어",
      ar: "العربية",
      hi: "हिन्दी",
      nl: "Nederlands",
      sv: "Svenska",
      metric: "Metric",
      imperial: "Imperial",
      si: "SI Units"
    };
    return labels[unit] || unit;
  };

  return (
    <PhoneFrame>
      <div className="h-full bg-gray-50 overflow-y-auto pb-24">
        {/* Header */}
        <div className="bg-white px-6 pt-16 pb-6 shadow-sm relative">
          <button
            onClick={() => navigate("/home")}
            className="absolute left-6 top-16 text-gray-400"
          >
            <ChevronLeft size={28} />
          </button>

          <h1 className="text-4xl font-bold text-center">Settings</h1>
        </div>

        {/* Settings List */}
        <div className="px-6 py-6">
          {/* Personal */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3 px-2">Personal</h3>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => navigate("/account-settings")}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                <User className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">Account</span>
                <ChevronRight className="text-gray-400" size={20} />
              </button>
              <button
                onClick={() => setSettingsDialog({ isOpen: true, type: "language" })}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                <Globe className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">Language</span>
                <span className="text-sm text-gray-500">{getUnitLabel(preferences.language)}</span>
                <ChevronRight className="text-gray-400" size={20} />
              </button>
              <button
                onClick={() => navigate("/location-settings")}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                <MapPin className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">Location</span>
                <ChevronRight className="text-gray-400" size={20} />
              </button>
              <button
                onClick={() => setSettingsDialog({ isOpen: true, type: "theme" })}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors"
              >
                <Paintbrush className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">Theme</span>
                <span className="text-sm text-gray-500">{getUnitLabel(theme)}</span>
                <ChevronRight className="text-gray-400" size={20} />
              </button>
            </div>
          </div>

          {/* Units */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3 px-2">Units</h3>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => setSettingsDialog({ isOpen: true, type: "unitSystem" })}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                <Settings2 className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">Unit System</span>
                <span className="text-sm text-gray-500">{getUnitLabel(preferences.unitSystem)}</span>
                <ChevronRight className="text-gray-400" size={20} />
              </button>
              <button
                onClick={() => setSettingsDialog({ isOpen: true, type: "height" })}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                <Ruler className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">Height</span>
                <span className="text-sm text-gray-500">{getUnitLabel(preferences.height)}</span>
                <ChevronRight className="text-gray-400" size={20} />
              </button>
              <button
                onClick={() => setSettingsDialog({ isOpen: true, type: "weight" })}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                <Scale className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">Weight</span>
                <span className="text-sm text-gray-500">{getUnitLabel(preferences.weight)}</span>
                <ChevronRight className="text-gray-400" size={20} />
              </button>
              <button
                onClick={() => setSettingsDialog({ isOpen: true, type: "volume" })}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                <Droplet className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">Volume</span>
                <span className="text-sm text-gray-500">{getUnitLabel(preferences.volume)}</span>
                <ChevronRight className="text-gray-400" size={20} />
              </button>
              <button
                onClick={() => setSettingsDialog({ isOpen: true, type: "distance" })}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors"
              >
                <Route className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">Distance</span>
                <span className="text-sm text-gray-500">{getUnitLabel(preferences.distance)}</span>
                <ChevronRight className="text-gray-400" size={20} />
              </button>
            </div>
          </div>

          {/* Devices */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3 px-2">Devices</h3>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => navigate("/add-device")}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors"
              >
                <Smartphone className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">Add Device</span>
                <ChevronRight className="text-gray-400" size={20} />
              </button>
            </div>
          </div>

          {/* Support */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3 px-2">Support</h3>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => navigate("/help")}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                <HelpCircle className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">Help</span>
              </button>
              <button
                onClick={() => navigate("/user-support")}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors"
              >
                <Headphones className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">User Support</span>
                <ChevronRight className="text-gray-400" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Settings Dialog */}
        {settingsDialog.type && (
          <SettingsDialog
            isOpen={settingsDialog.isOpen}
            onClose={() => setSettingsDialog({ isOpen: false, type: null })}
            type={settingsDialog.type}
            currentValue={settingsDialog.type === "theme" ? theme : preferences[settingsDialog.type as keyof typeof preferences]}
            onSave={(value) => handleSave(settingsDialog.type!, value)}
          />
        )}
      </div>
    </PhoneFrame>
  );
}
