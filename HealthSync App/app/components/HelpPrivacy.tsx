import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Shield, Lock, Eye, Download, Trash2, Mail } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";

export function HelpPrivacy() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <PhoneFrame>
      <div className="h-full bg-gray-50 dark:bg-[#0F0F0F] overflow-y-auto pb-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-400 to-purple-500 dark:from-indigo-500 dark:to-purple-600 px-6 pt-16 pb-8 text-white">
          <button
            onClick={() => navigate("/help")}
            className="mb-4 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft size={28} />
          </button>
          <h1 className="text-3xl font-bold mb-2">Privacy & Data Control</h1>
          <p className="text-white/90">Your data, your control</p>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* What We Collect */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                <Eye className="text-indigo-500 dark:text-indigo-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">What We Collect</h2>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <p className="font-semibold text-gray-800 dark:text-[#F0F0F0] mb-2">Health Metrics</p>
                <p className="text-sm text-gray-600 dark:text-[#9CA3AF]">
                  Heart rate, steps, calories, sleep, nutrition, BMI, and activity data from your connected devices
                </p>
              </div>
              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <p className="font-semibold text-gray-800 dark:text-[#F0F0F0] mb-2">Device Identifiers</p>
                <p className="text-sm text-gray-600 dark:text-[#9CA3AF]">
                  Device model, OS version, and unique identifiers for syncing across multiple devices
                </p>
              </div>
              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <p className="font-semibold text-gray-800 dark:text-[#F0F0F0] mb-2">Usage Analytics (Optional)</p>
                <p className="text-sm text-gray-600 dark:text-[#9CA3AF]">
                  App feature usage, crash reports, and performance metrics to improve the experience
                </p>
              </div>
            </div>

            <div className="mt-4 bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border-l-4 border-green-500 dark:border-green-400">
              <p className="text-sm text-green-800 dark:text-green-300">
                <strong>Good news:</strong> You can disable usage analytics at any time in Settings → Privacy → Analytics
              </p>
            </div>
          </section>

          {/* What We Don't Collect */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Shield className="text-green-500 dark:text-green-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">What We Don't Collect</h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-[#9CA3AF]">
              <li className="flex gap-3">
                <span className="text-green-500 dark:text-green-400 text-xl">✓</span>
                <span>We <strong className="text-gray-800 dark:text-[#F0F0F0]">never collect GPS routes</strong> or exact location coordinates</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 dark:text-green-400 text-xl">✓</span>
                <span>We <strong className="text-gray-800 dark:text-[#F0F0F0]">never access conversations</strong>, messages, or personal communications</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 dark:text-green-400 text-xl">✓</span>
                <span>We <strong className="text-gray-800 dark:text-[#F0F0F0]">never read contact lists</strong> or phone books</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 dark:text-green-400 text-xl">✓</span>
                <span>We <strong className="text-gray-800 dark:text-[#F0F0F0]">never sell or share</strong> your health data with third parties</span>
              </li>
            </ul>
          </section>

          {/* Delete Your Data */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                <Trash2 className="text-red-500 dark:text-red-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">Delete Your Data</h2>
            </div>
            <p className="text-gray-600 dark:text-[#9CA3AF] mb-4">
              You have the right to permanently delete all your data:
            </p>
            <ol className="space-y-3 text-gray-600 dark:text-[#9CA3AF]">
              <li className="flex gap-3">
                <span className="font-bold text-red-500 dark:text-red-400">1.</span>
                <span>Go to <strong className="text-gray-800 dark:text-[#F0F0F0]">Settings → Account → Delete Account</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-red-500 dark:text-red-400">2.</span>
                <span>Tap <strong className="text-gray-800 dark:text-[#F0F0F0]">Delete Account</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-red-500 dark:text-red-400">3.</span>
                <span>Confirm the deletion when prompted</span>
              </li>
            </ol>

            <div className="mt-4 bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border-l-4 border-red-500 dark:border-red-400">
              <div className="flex gap-3">
                <Lock className="text-red-600 dark:text-red-400 flex-shrink-0" size={20} />
                <p className="text-sm text-red-800 dark:text-red-300">
                  <strong>Warning:</strong> This action is permanent and cannot be undone. All your health data, achievements, and XP will be permanently deleted.
                </p>
              </div>
            </div>
          </section>

          {/* Export Your Data */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Download className="text-blue-500 dark:text-blue-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">Export Your Data</h2>
            </div>
            <p className="text-gray-600 dark:text-[#9CA3AF] mb-4">
              Download a copy of all your health data in portable formats:
            </p>
            <ol className="space-y-3 text-gray-600 dark:text-[#9CA3AF]">
              <li className="flex gap-3">
                <span className="font-bold text-blue-500 dark:text-blue-400">1.</span>
                <span>Go to <strong className="text-gray-800 dark:text-[#F0F0F0]">Settings → Account → Export Data</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-500 dark:text-blue-400">2.</span>
                <span>Choose your preferred format: <strong className="text-gray-800 dark:text-[#F0F0F0]">CSV</strong> or <strong className="text-gray-800 dark:text-[#F0F0F0]">JSON</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-500 dark:text-blue-400">3.</span>
                <span>Download the file to your device</span>
              </li>
            </ol>
          </section>

          {/* GDPR & CCPA */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Mail className="text-purple-500 dark:text-purple-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">GDPR / CCPA Inquiries</h2>
            </div>
            <p className="text-gray-600 dark:text-[#9CA3AF] mb-4">
              We comply with all major privacy regulations including GDPR (Europe) and CCPA (California).
            </p>
            <p className="text-gray-600 dark:text-[#9CA3AF] mb-4">
              If you have questions about your data rights or want to exercise your privacy rights, contact us at:
            </p>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-center">
                <a href="mailto:privacy@healthsync.app" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                  privacy@healthsync.app
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation onMenuClick={() => setShowMenu(true)} />
      </div>
    </PhoneFrame>
  );
}
