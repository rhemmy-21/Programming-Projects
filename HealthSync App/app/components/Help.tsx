import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";

export function Help() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const helpTopics = [
    { title: "Introduction to HealthSync", route: "/help-intro" },
    { title: "How to add or remove a device?", route: "/help-device" },
    { title: "How to fix GPS/MAP errors?", route: "/help-gps" },
    { title: "App Sync/Data loss solutions", route: "/help-sync" },
    { title: "Privacy & Data Control", route: "/help-privacy" },
  ];

  return (
    <PhoneFrame>
      <div className="h-full bg-gray-50 dark:bg-[#0F0F0F] overflow-y-auto pb-24">
        {/* Header */}
        <div className="bg-white dark:bg-[#1E1E1E] px-6 pt-16 pb-6 shadow-sm relative border-b border-gray-100 dark:border-[#2E2E2E]">
          <button
            onClick={() => navigate("/settings")}
            className="absolute left-6 top-16 text-gray-400 dark:text-[#9CA3AF] hover:text-gray-600 dark:hover:text-[#F0F0F0] transition-colors"
          >
            <ChevronLeft size={28} />
          </button>

          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-[#F0F0F0]">Help Center</h1>
        </div>

        {/* Help Topics */}
        <div className="px-6 py-6">
          <div className="space-y-4">
            {helpTopics.map((topic, idx) => (
              <button
                key={idx}
                onClick={() => navigate(topic.route)}
                className="w-full bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm p-5 hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors flex items-center justify-between border border-gray-100 dark:border-[#2E2E2E]"
              >
                <span className="text-base text-gray-800 dark:text-[#F0F0F0] text-left flex-1">{topic.title}</span>
                <ChevronRight className="text-gray-400 dark:text-[#9CA3AF] flex-shrink-0" size={24} />
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation onMenuClick={() => setShowMenu(true)} />
      </div>
    </PhoneFrame>
  );
}
