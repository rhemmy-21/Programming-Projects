import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, MapPin, Navigation, AlertTriangle, CheckCircle2, RefreshCw } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";

export function HelpGPS() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <PhoneFrame>
      <div className="h-full bg-gray-50 dark:bg-[#0F0F0F] overflow-y-auto pb-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-400 to-emerald-500 dark:from-green-500 dark:to-emerald-600 px-6 pt-16 pb-8 text-white">
          <button
            onClick={() => navigate("/help")}
            className="mb-4 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft size={28} />
          </button>
          <h1 className="text-3xl font-bold mb-2">Fix GPS/MAP Errors</h1>
          <p className="text-white/90">Troubleshoot location and mapping issues</p>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Grant Location Permission */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <MapPin className="text-green-500 dark:text-green-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">Grant Location Permission</h2>
            </div>
            <p className="text-gray-600 dark:text-[#9CA3AF] mb-4">
              HealthSync requires location access to track outdoor activities. Follow these steps to enable it:
            </p>
            <ol className="space-y-3 text-gray-600 dark:text-[#9CA3AF]">
              <li className="flex gap-3">
                <span className="font-bold text-green-500 dark:text-green-400">1.</span>
                <span>Open <strong className="text-gray-800 dark:text-[#F0F0F0]">Phone Settings</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-500 dark:text-green-400">2.</span>
                <span>Navigate to <strong className="text-gray-800 dark:text-[#F0F0F0]">HealthSync</strong> in your apps list</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-500 dark:text-green-400">3.</span>
                <span>Tap <strong className="text-gray-800 dark:text-[#F0F0F0]">Location</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-500 dark:text-green-400">4.</span>
                <span>Select <strong className="text-gray-800 dark:text-[#F0F0F0]">Always</strong> or <strong className="text-gray-800 dark:text-[#F0F0F0]">While Using the App</strong></span>
              </li>
            </ol>

            <div className="mt-4 bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border-l-4 border-green-500 dark:border-green-400">
              <div className="flex gap-3">
                <CheckCircle2 className="text-green-600 dark:text-green-400 flex-shrink-0" size={20} />
                <p className="text-sm text-green-800 dark:text-green-300">
                  <strong>Recommended:</strong> Choose "Always" for automatic activity detection and more accurate tracking.
                </p>
              </div>
            </div>
          </section>

          {/* Improve GPS Signal */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Navigation className="text-blue-500 dark:text-blue-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">If GPS is Slow or Inaccurate</h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-[#9CA3AF]">
              <li className="flex gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                <span><strong className="text-gray-800 dark:text-[#F0F0F0]">Move outdoors</strong> to open sky with clear view</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                <span>Stay <strong className="text-gray-800 dark:text-[#F0F0F0]">away from tall buildings</strong> that can block satellite signals</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                <span>Wait <strong className="text-gray-800 dark:text-[#F0F0F0]">30-60 seconds</strong> for GPS to acquire a lock</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                <span>Ensure <strong className="text-gray-800 dark:text-[#F0F0F0]">Wi-Fi and Mobile Data</strong> are enabled for assisted GPS</span>
              </li>
            </ul>
          </section>

          {/* Reset GPS Cache */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <RefreshCw className="text-purple-500 dark:text-purple-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">Reset GPS Cache</h2>
            </div>
            <p className="text-gray-600 dark:text-[#9CA3AF] mb-4">
              If GPS continues to malfunction, resetting the GPS cache can help:
            </p>
            <div className="space-y-2">
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <p className="text-sm font-semibold text-gray-800 dark:text-[#F0F0F0] mb-1">Step 1</p>
                <p className="text-sm text-gray-600 dark:text-[#9CA3AF]">
                  Go to <strong>Settings → Location → Reset Location Cache</strong>
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <p className="text-sm font-semibold text-gray-800 dark:text-[#F0F0F0] mb-1">Step 2</p>
                <p className="text-sm text-gray-600 dark:text-[#9CA3AF]">
                  Restart the app and try tracking a new activity
                </p>
              </div>
            </div>
          </section>

          {/* Map Shows Wrong Route */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                <AlertTriangle className="text-amber-500 dark:text-amber-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">If Map Shows Wrong Route</h2>
            </div>
            <p className="text-gray-600 dark:text-[#9CA3AF] mb-4">
              During an active tracking session, you can recalibrate GPS in real-time:
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-[#9CA3AF]">
              <li className="flex gap-3">
                <span className="text-amber-500 dark:text-amber-400 font-bold">•</span>
                <span>Tap the <strong className="text-gray-800 dark:text-[#F0F0F0]">map view</strong> during your activity session</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 dark:text-amber-400 font-bold">•</span>
                <span>Tap <strong className="text-gray-800 dark:text-[#F0F0F0]">Recalibrate</strong> at the top right</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 dark:text-amber-400 font-bold">•</span>
                <span>Wait a few seconds for GPS to reacquire your position</span>
              </li>
            </ul>

            <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border-l-4 border-amber-500 dark:border-amber-400">
              <div className="flex gap-3">
                <AlertTriangle className="text-amber-600 dark:text-amber-400 flex-shrink-0" size={20} />
                <p className="text-sm text-amber-800 dark:text-amber-300">
                  <strong>Note:</strong> Recalibrating will slightly adjust your tracked distance and may cause a brief gap in your route.
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
