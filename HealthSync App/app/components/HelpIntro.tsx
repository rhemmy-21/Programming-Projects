import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Heart, Footprints, Flame, Moon, Apple, Activity, Trophy, Zap, Shield } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";

export function HelpIntro() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const metrics = [
    { icon: Heart, label: "Heart Rate", color: "text-red-500" },
    { icon: Footprints, label: "Steps", color: "text-green-500" },
    { icon: Flame, label: "Calories", color: "text-orange-500" },
    { icon: Moon, label: "Sleep", color: "text-blue-500" },
    { icon: Apple, label: "Nutrition", color: "text-yellow-500" },
    { icon: Activity, label: "BMI", color: "text-purple-500" },
    { icon: Activity, label: "Activity", color: "text-indigo-500" }
  ];

  return (
    <PhoneFrame>
      <div className="h-full bg-gray-50 dark:bg-[#0F0F0F] overflow-y-auto pb-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-400 to-amber-500 dark:from-orange-500 dark:to-amber-600 px-6 pt-16 pb-8 text-white">
          <button
            onClick={() => navigate("/help")}
            className="mb-4 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft size={28} />
          </button>
          <h1 className="text-3xl font-bold mb-2">Introduction to HealthSync</h1>
          <p className="text-white/90">Everything you need to know to get started</p>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* What the app tracks */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0] mb-4">What HealthSync Tracks</h2>
            <p className="text-gray-600 dark:text-[#9CA3AF] mb-4">
              HealthSync monitors your complete health profile across seven key metrics:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-[#2A2A2A] rounded-lg">
                  <metric.icon className={metric.color} size={20} />
                  <span className="text-sm font-medium text-gray-800 dark:text-[#F0F0F0]">{metric.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* How XP works */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <Trophy className="text-orange-500 dark:text-orange-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">How XP Works</h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-[#9CA3AF]">
              <li className="flex gap-3">
                <span className="text-orange-500 dark:text-orange-400 font-bold">•</span>
                <span>Earn <strong className="text-gray-800 dark:text-[#F0F0F0]">10 XP</strong> for each daily goal you complete</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 dark:text-orange-400 font-bold">•</span>
                <span>Level up every <strong className="text-gray-800 dark:text-[#F0F0F0]">100 XP</strong> you earn</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 dark:text-orange-400 font-bold">•</span>
                <span>Spend XP in the <strong className="text-gray-800 dark:text-[#F0F0F0]">Rewards Shop</strong> on themes, avatars, and badges</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 dark:text-orange-400 font-bold">•</span>
                <span>Bonus XP awarded for completing challenges and maintaining streaks</span>
              </li>
            </ul>
          </section>

          {/* How Streaks work */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <Zap className="text-orange-500 dark:text-orange-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">How Streaks Work</h2>
            </div>
            <p className="text-gray-600 dark:text-[#9CA3AF] mb-3">
              Maintain all your daily goals to extend your streak day by day. The longer your streak, the greater the rewards!
            </p>
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 border-l-4 border-orange-500 dark:border-orange-400">
              <p className="text-sm text-orange-800 dark:text-orange-300">
                <strong>Tip:</strong> Missing even one daily goal will reset your streak to zero, so stay consistent!
              </p>
            </div>
          </section>

          {/* Privacy */}
          <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#2E2E2E]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Shield className="text-blue-500 dark:text-blue-400" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F0F0F0]">Privacy & Data Security</h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-[#9CA3AF]">
              <li className="flex gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                <span>All health data is <strong className="text-gray-800 dark:text-[#F0F0F0]">stored locally</strong> on your device</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                <span>Optional cloud sync is available for backup and multi-device access</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                <span>We never share your personal information with third parties</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                <span>End-to-end encryption protects your data in transit</span>
              </li>
            </ul>
          </section>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation onMenuClick={() => setShowMenu(true)} />
      </div>
    </PhoneFrame>
  );
}
