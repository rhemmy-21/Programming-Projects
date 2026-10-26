import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Watch, Smartphone, Bluetooth, AlertCircle, CheckCircle2 } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";

export function HelpDevice() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const supportedDevices = [
    "Apple Watch (Series 4 and newer)",
    "Fitbit (Charge 5, Sense, Versa 3+)",
    "Garmin (Forerunner, Venu, Fenix series)",
    "Samsung Galaxy Watch (4 and newer)",
    "Google Pixel Watch"
  ];

  return (
    <PhoneFrame>
      <div className="h-full bg-gray-50 dark:bg-[#0F0F0F] overflow-y-auto pb-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-400 to-indigo-500 dark:from-purple-500 dark:to-indigo-600 px-6 pt-16 pb-8 text-white">
          <button
            onClick={() => navigate("/help")}
            className="mb-4 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft size={28} />
          </button>
          <h1 className="text-3xl font-bold mb-2">Add or Remove Devices</h1>
          <p className="text-white/90">Connect wearables to sync your health data</p>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* How to Add a Device */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Watch className="text-purple-500 dark:text-purple-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">How to Add a Device</h2>
            </div>
            <ol className="space-y-3 text-gray-600 dark:text-[#9CA3AF]">
              <li className="flex gap-3">
                <span className="font-bold text-purple-500 dark:text-purple-400">1.</span>
                <span>Go to <strong className="text-gray-800 dark:text-[#F0F0F0]">Settings → Devices → Add Device</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-500 dark:text-purple-400">2.</span>
                <span>Tap <strong className="text-gray-800 dark:text-[#F0F0F0]">Scan for Devices</strong> to begin pairing</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-500 dark:text-purple-400">3.</span>
                <span>Select your device from the list of available devices</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-500 dark:text-purple-400">4.</span>
                <span>Follow the on-screen instructions to complete pairing</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-500 dark:text-purple-400">5.</span>
                <span>Grant necessary permissions when prompted</span>
              </li>
            </ol>
          </section>

          {/* Supported Devices */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0] mb-4">Supported Devices</h2>
            <div className="space-y-2">
              {supportedDevices.map((device, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-[#2A2A2A] rounded-lg">
                  <CheckCircle2 className="text-green-500 dark:text-green-400 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-800 dark:text-[#F0F0F0]">{device}</span>
                </div>
              ))}
            </div>
          </section>

          {/* How to Remove a Device */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                <Smartphone className="text-red-500 dark:text-red-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">How to Remove a Device</h2>
            </div>
            <p className="text-gray-600 dark:text-[#9CA3AF] mb-4">There are two ways to remove a connected device:</p>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-[#2A2A2A] rounded-lg">
                <p className="font-semibold text-gray-800 dark:text-[#F0F0F0] mb-2">Method 1: Long Press</p>
                <p className="text-sm text-gray-600 dark:text-[#9CA3AF]">
                  From the devices list, long-press on the device you want to remove, then tap <strong>Remove</strong>
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-[#2A2A2A] rounded-lg">
                <p className="font-semibold text-gray-800 dark:text-[#F0F0F0] mb-2">Method 2: Settings</p>
                <p className="text-sm text-gray-600 dark:text-[#9CA3AF]">
                  Go to Settings → Devices → [device name] → Remove Device
                </p>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Bluetooth className="text-blue-500 dark:text-blue-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">Troubleshooting</h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-[#9CA3AF]">
              <li className="flex gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                <span>Ensure <strong className="text-gray-800 dark:text-[#F0F0F0]">Bluetooth is enabled</strong> on both devices</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                <span>Keep the app <strong className="text-gray-800 dark:text-[#F0F0F0]">in the foreground</strong> during pairing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                <span>Make sure your wearable is <strong className="text-gray-800 dark:text-[#F0F0F0]">not already paired</strong> with another device</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                <span>Restart both devices if pairing fails repeatedly</span>
              </li>
            </ul>

            <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border-l-4 border-amber-500 dark:border-amber-400">
              <div className="flex gap-3">
                <AlertCircle className="text-amber-600 dark:text-amber-400 flex-shrink-0" size={20} />
                <p className="text-sm text-amber-800 dark:text-amber-300">
                  If problems persist, try forgetting the device in your phone's Bluetooth settings and re-pairing from scratch.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation onMenuClick={() => setShowMenu(true)} />
      </div>
    </PhoneFrame>
  );
}
