import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Flame, Calendar, CheckCircle, X } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";

export function Streaks() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const currentStreak = 5;
  const longestStreak = 12;
  const totalDays = 45;

  const weekData = [
    { day: "Mon", completed: true },
    { day: "Tue", completed: true },
    { day: "Wed", completed: true },
    { day: "Thu", completed: true },
    { day: "Fri", completed: true },
    { day: "Sat", completed: false },
    { day: "Sun", completed: false }
  ];

  const streakMilestones = [
    { days: 7, reward: "500 XP", unlocked: false },
    { days: 14, reward: "1000 XP + Bronze Badge", unlocked: false },
    { days: 30, reward: "2500 XP + Silver Badge", unlocked: false },
    { days: 60, reward: "5000 XP + Gold Badge", unlocked: false },
    { days: 100, reward: "10000 XP + Diamond Badge", unlocked: false }
  ];

  return (
    <PhoneFrame>
      <div className="h-full bg-gradient-to-b from-orange-50 to-white flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-400 to-red-500 px-6 pt-16 pb-8 text-white">
            <button
              onClick={() => navigate("/home")}
              className="mb-4 text-white/80 hover:text-white"
            >
              <ChevronLeft size={28} />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Flame size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Streaks</h1>
                <p className="opacity-90">Daily goal streak tracker</p>
              </div>
            </div>

            {/* Current Streak */}
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 text-center">
              <p className="text-sm opacity-90 mb-2">Current Streak</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Flame size={48} />
                <p className="text-6xl font-bold">{currentStreak}</p>
              </div>
              <p className="text-lg font-semibold">Days in a row!</p>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
                <Calendar className="text-orange-500 mx-auto mb-2" size={28} />
                <p className="text-3xl font-bold text-gray-800">{longestStreak}</p>
                <p className="text-sm text-gray-600 mt-1">Longest Streak</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
                <CheckCircle className="text-green-500 mx-auto mb-2" size={28} />
                <p className="text-3xl font-bold text-gray-800">{totalDays}</p>
                <p className="text-sm text-gray-600 mt-1">Total Days</p>
              </div>
            </div>

            {/* This Week */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">This Week</h3>
              <div className="flex justify-between gap-2">
                {weekData.map((day, idx) => (
                  <div key={idx} className="flex-1 text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 mx-auto ${
                      day.completed
                        ? 'bg-gradient-to-br from-orange-400 to-red-500 text-white'
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {day.completed ? <CheckCircle size={20} /> : <X size={20} />}
                    </div>
                    <p className="text-xs font-semibold text-gray-600">{day.day}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Streak Milestones */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Streak Milestones</h3>
              <div className="space-y-4">
                {streakMilestones.map((milestone, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      milestone.unlocked
                        ? 'bg-gradient-to-br from-orange-400 to-red-500'
                        : 'bg-gray-100'
                    }`}>
                      <Flame
                        size={24}
                        className={milestone.unlocked ? 'text-white' : 'text-gray-400'}
                      />
                    </div>
                    <div className="flex-1">
                      <p className={`font-bold ${milestone.unlocked ? 'text-gray-800' : 'text-gray-500'}`}>
                        {milestone.days} Day Streak
                      </p>
                      <p className={`text-sm ${milestone.unlocked ? 'text-gray-600' : 'text-gray-400'}`}>
                        {milestone.reward}
                      </p>
                    </div>
                    {currentStreak >= milestone.days ? (
                      <CheckCircle className="text-green-500" size={24} />
                    ) : (
                      <span className="text-sm text-gray-400">{milestone.days - currentStreak} to go</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Motivation */}
            <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-6 text-white mt-6">
              <h3 className="text-xl font-bold mb-2">Keep it going! 🔥</h3>
              <p className="opacity-90">
                You're just 2 days away from your next milestone. Don't break the chain!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation onMenuClick={() => setShowMenu(true)} />
      </div>
    </PhoneFrame>
  );
}
