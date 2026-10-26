import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, RefreshCw, Cloud, Database, ArrowDownToLine, AlertCircle } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";

export function HelpSync() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <PhoneFrame>
      <div className="h-full bg-gray-50 dark:bg-[#0F0F0F] overflow-y-auto pb-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-400 to-cyan-500 dark:from-blue-500 dark:to-cyan-600 px-6 pt-16 pb-8 text-white">
          <button
            onClick={() => navigate("/help")}
            className="mb-4 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft size={28} />
          </button>
          <h1 className="text-3xl font-bold mb-2">App Sync / Data Loss</h1>
          <p className="text-white/90">Solve synchronization and data recovery issues</p>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Enable Auto-Sync */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Cloud className="text-blue-500 dark:text-blue-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">Enable Auto-Sync</h2>
            </div>
            <p className="text-gray-600 dark:text-[#9CA3AF] mb-4">
              Keep your health data backed up automatically by enabling auto-sync:
            </p>
            <ol className="space-y-3 text-gray-600 dark:text-[#9CA3AF]">
              <li className="flex gap-3">
                <span className="font-bold text-blue-500 dark:text-blue-400">1.</span>
                <span>Go to <strong className="text-gray-800 dark:text-[#F0F0F0]">Settings → Account → Sync</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-500 dark:text-blue-400">2.</span>
                <span>Toggle <strong className="text-gray-800 dark:text-[#F0F0F0]">Auto Sync</strong> to ON</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-500 dark:text-blue-400">3.</span>
                <span>Your data will now sync automatically when connected to Wi-Fi</span>
              </li>
            </ol>

            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border-l-4 border-blue-500 dark:border-blue-400">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>Tip:</strong> Auto-sync only runs on Wi-Fi to save mobile data. Manual sync works on any connection.
              </p>
            </div>
          </section>

          {/* Manual Sync */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <RefreshCw className="text-purple-500 dark:text-purple-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">Manual Sync</h2>
            </div>
            <p className="text-gray-600 dark:text-[#9CA3AF] mb-4">
              Force an immediate sync of your data:
            </p>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-sm text-gray-800 dark:text-[#F0F0F0] font-semibold mb-2">Pull to Refresh</p>
              <p className="text-sm text-gray-600 dark:text-[#9CA3AF]">
                On any screen, <strong>pull down from the top</strong> to trigger a manual refresh and sync.
              </p>
            </div>
          </section>

          {/* If Data is Missing */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                <AlertCircle className="text-amber-500 dark:text-amber-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">If Data is Missing</h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-[#9CA3AF]">
              <li className="flex gap-3">
                <span className="text-amber-500 dark:text-amber-400 font-bold">•</span>
                <span>Check the <strong className="text-gray-800 dark:text-[#F0F0F0]">date range filter</strong> in the History screen</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 dark:text-amber-400 font-bold">•</span>
                <span>Ensure your connected devices are <strong className="text-gray-800 dark:text-[#F0F0F0]">still paired</strong> and syncing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 dark:text-amber-400 font-bold">•</span>
                <span>Try <strong className="text-gray-800 dark:text-[#F0F0F0]">pulling to refresh</strong> to force a sync</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 dark:text-amber-400 font-bold">•</span>
                <span>Verify you're <strong className="text-gray-800 dark:text-[#F0F0F0]">signed into the correct account</strong></span>
              </li>
            </ul>
          </section>

          {/* Data Recovery */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Database className="text-green-500 dark:text-green-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">Data Recovery</h2>
            </div>
            <p className="text-gray-600 dark:text-[#9CA3AF] mb-4">
              If you've lost data or switched devices, you can restore from a cloud backup:
            </p>
            <ol className="space-y-3 text-gray-600 dark:text-[#9CA3AF]">
              <li className="flex gap-3">
                <span className="font-bold text-green-500 dark:text-green-400">1.</span>
                <span>Go to <strong className="text-gray-800 dark:text-[#F0F0F0]">Settings → Account → Restore from Backup</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-500 dark:text-green-400">2.</span>
                <span>Sign in with the same account you used before</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-500 dark:text-green-400">3.</span>
                <span>Select the backup you want to restore from</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-500 dark:text-green-400">4.</span>
                <span>Wait for the restore process to complete</span>
              </li>
            </ol>

            <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border-l-4 border-amber-500 dark:border-amber-400">
              <div className="flex gap-3">
                <ArrowDownToLine className="text-amber-600 dark:text-amber-400 flex-shrink-0" size={20} />
                <p className="text-sm text-amber-800 dark:text-amber-300">
                  <strong>Important:</strong> Cloud backup must have been enabled before data was lost. Recovery is only possible if you had auto-sync turned on.
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
