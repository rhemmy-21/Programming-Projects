import { useState } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface SettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  type: "height" | "weight" | "volume" | "distance" | "theme" | "language" | "unitSystem" | null;
  currentValue: string;
  onSave: (value: string) => void;
}

export function SettingsDialog({ isOpen, onClose, type, currentValue, onSave }: SettingsDialogProps) {
  const [selectedValue, setSelectedValue] = useState(currentValue);

  const handleSave = () => {
    onSave(selectedValue);
    onClose();
  };

  const getOptions = () => {
    switch (type) {
      case "height":
        return [
          { value: "cm", label: "Centimeters (cm)" },
          { value: "ft", label: "Feet/Inches (ft/in)" }
        ];
      case "weight":
        return [
          { value: "kg", label: "Kilograms (kg)" },
          { value: "lb", label: "Pounds (lb)" }
        ];
      case "volume":
        return [
          { value: "ml", label: "Milliliters (ml)" },
          { value: "oz", label: "Fluid Ounces (oz)" }
        ];
      case "distance":
        return [
          { value: "km", label: "Kilometers (km)" },
          { value: "mi", label: "Miles (mi)" }
        ];
      case "theme":
        return [
          { value: "light", label: "Light Mode" },
          { value: "dark", label: "Dark Mode" },
          { value: "auto", label: "Auto (System)" }
        ];
      case "language":
        return [
          { value: "en", label: "English" },
          { value: "es", label: "Español (Spanish)" },
          { value: "fr", label: "Français (French)" },
          { value: "de", label: "Deutsch (German)" },
          { value: "it", label: "Italiano (Italian)" },
          { value: "pt", label: "Português (Portuguese)" },
          { value: "ru", label: "Русский (Russian)" },
          { value: "zh", label: "中文 (Chinese)" },
          { value: "ja", label: "日本語 (Japanese)" },
          { value: "ko", label: "한국어 (Korean)" },
          { value: "ar", label: "العربية (Arabic)" },
          { value: "hi", label: "हिन्दी (Hindi)" },
          { value: "tl", label: "Tagalog (Filipino)" },
          { value: "nl", label: "Nederlands (Dutch)" },
          { value: "sv", label: "Svenska (Swedish)" }
        ];
      case "unitSystem":
        return [
          { value: "metric", label: "Metric (kg, cm, km)" },
          { value: "imperial", label: "Imperial (lb, ft, mi)" },
          { value: "si", label: "SI Units (International System)" }
        ];
      default:
        return [];
    }
  };

  const getTitle = () => {
    switch (type) {
      case "height": return "Height Unit";
      case "weight": return "Weight Unit";
      case "volume": return "Volume Unit";
      case "distance": return "Distance Unit";
      case "theme": return "Theme Preference";
      case "language": return "Language";
      case "unitSystem": return "Unit System";
      default: return "Settings";
    }
  };

  const options = getOptions();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div
        className="relative w-full max-w-[430px] bg-white dark:bg-gray-900 rounded-t-2xl shadow-2xl"
        style={{
          maxHeight: "60vh",
          animation: "slideUp 0.3s ease-out"
        }}
      >
        {/* Drag Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
        </div>

        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white">{getTitle()}</h2>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto px-6 py-4" style={{ maxHeight: "calc(60vh - 180px)" }}>
          <RadioGroup value={selectedValue} onValueChange={setSelectedValue}>
            <div className="space-y-1">
              {options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
                  style={{ minHeight: "48px" }}
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer text-sm">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Footer Buttons */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex gap-3">
          <Button variant="ghost" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button onClick={handleSave} className="flex-1 bg-orange-400 hover:bg-orange-500 text-white">
            Save
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
